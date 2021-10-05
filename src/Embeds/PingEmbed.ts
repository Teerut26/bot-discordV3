const { MessageEmbed } = require("discord.js");
export default class PingEmbed {
  embed: any;
  message: any;
  constructor(message: any, ping: string) {
    this.message = message;
    this.embed = new MessageEmbed()
      .setColor("#0099ff")
      .setTitle(`${ping} ms`)
    this.sendMessage();
  }

  sendMessage() {
    this.message.channel.send({ embeds: [this.embed] });
  }
}
