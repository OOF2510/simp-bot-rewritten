FROM oof2510/discordbot-base:v1

RUN mkdir -p /usr/src/SimpBot \
&& pip3 install --no-cache-dir gTTS

WORKDIR /usr/src/SimpBot
COPY . ./

RUN yarn install \
&& yarn cache clean 

WORKDIR /

RUN apk del build-base g++

WORKDIR /usr/src/SimpBot

CMD ["yarn", "start"]
