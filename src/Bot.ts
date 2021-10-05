const { Client } = require("discord.js");
const { token } = require("./Configs/config.json");
import IntentsSetup from "./Configs/IntentsSetup";

import messageCreate from "./Events/messageCreate";
// import interactionCreate from "./Events/interactionCreate";

export default class Bot {
  client: any;
  token: any;
  constructor() {
    this.client = new Client({
      intents: IntentsSetup,
    });
    this.token = token;
    this.setup();
  }

  setup() {
    this.client.login(this.token);
    this.once();
    this.client.on("messageCreate", (message: any) => new messageCreate(message,this.client));
    // this.client.on("interactionCreate", (interaction : any) => new interactionCreate(interaction));
  }

  once() {
    this.client.once("ready", () => {
      console.log("Ready!");
    });
  }
}
