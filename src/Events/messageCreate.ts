import ping from "../Commands/ping";
const {defaultPrefix} = require("../Configs/config.json");
const prefix = require("discord-prefix");
export default class messageCreate {
  message: any;
  conmand: any;
  client: any;
  constructor(message: any, client: any) {
    this.message = message;
    this.client = client;
    if (!this.message.guild) return;
    let guildPrefix = prefix.getPrefix(this.message.guild.id);
    if (!guildPrefix) guildPrefix = defaultPrefix;
    if (!this.message.content.startsWith(guildPrefix)) return;
    this.conmand = this.message.content
      .slice(guildPrefix.length)
      .split(" ")[0]
      .toLowerCase();
    this.onMessage();
  }
  async onMessage() {
    switch (this.conmand) {
      case "ping":
        new ping(this.message, this.client);
        break;
    }
  }
}
