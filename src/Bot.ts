const { Client } = require("discord.js");
const { token } = require("./Configs/config.json");
import IntentsSetup from "./Configs/IntentsSetup";

import messageCreate from "./Events/messageCreate";
import typingStart from "./Events/typingStart";

export default class Bot {
  private client: any;
  private token: any;

  constructor() {
    this.client = new Client({intents: IntentsSetup});
    this.token = token;
    this.setup();
  }

  private setup() {
    this.client.login(this.token);
    this.client.once("ready", this.once);
    this.client.on("messageCreate", (message: any) => new messageCreate({message, client:this.client}));
    this.client.on("typingStart", (typing : any) => new typingStart(typing, this.client));
  }

  private once() {
    console.log("Ready!");
  }
}

