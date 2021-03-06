module.exports = {
  name: "invite",
  aliases: ["inv"],
  cat: "misc",
  usage: "invite",
  desc: "Sends the bot's invite link",
  async execute(
    msg,
    args,
    client,
    channel,
    author,
    server,
    guild,
    botMem,
    botNick,
    testServer,
    defChannel,
    me,
    allowed,
    prefix,
    config,
    exec,
    os,
    Discord,
    db
  ) {
    let invEm = new Discord.MessageEmbed()
      .setTitle(`Invite me to your server!`)
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${config.clientID}&permissions=8&scope=bot`
      )
      .setColor(config.embedColor)
      .setTimestamp();
    channel.send({ embeds: [invEm] });
  },
};
