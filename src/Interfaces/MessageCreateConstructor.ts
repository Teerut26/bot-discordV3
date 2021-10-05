import { Client, Message } from "discord.js";

export interface MessageCreateConstructor {
  message: Message;
  client: Client;
}
