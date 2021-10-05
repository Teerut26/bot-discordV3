const { defaultPrefix } = require("../Configs/config.json");
const prefix = require("discord-prefix");
import { Client, Message } from "discord.js";
import RegiterCommand from "../Handles/RegiterCommand";
import { MessageCreateConstructor } from "../Interfaces/MessageCreateConstructor";

export default class messageCreate {
  private message: Message;
  private conmand: Array<string> | undefined;
  private client: Client;
  constructor(messageCreateConstructor: MessageCreateConstructor) {
    this.message = messageCreateConstructor.message;
    this.client = messageCreateConstructor.client;
    if (!this.message.guild) return;
    let guildPrefix = prefix.getPrefix(this.message.guild.id);
    if (!guildPrefix) guildPrefix = defaultPrefix;
    if (!this.message.content.startsWith(guildPrefix)) return;
    this.conmand = this.message.content.slice(guildPrefix.length).split(" ");
    new RegiterCommand(this.message, this.conmand, this.client);
  }
}
