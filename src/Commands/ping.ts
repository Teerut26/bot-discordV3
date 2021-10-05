import PingEmbed from "../Embeds/PingEmbed";

export default class ping {
  private message: any;
  private client: any;
  private conmand: Array<string>;

  constructor(message: any, client: any, conmand: Array<string>) {
    this.message = message;
    this.client = client;
    this.conmand = conmand;

    console.log(this.conmand);
    

    new PingEmbed(this.message, this.client.ws.ping);
  }
}
