export default class ping {
  message: any;
  client: any;
  constructor(message: any, client: any) {
    this.message = message;
    this.client = client;
    this.message.reply(`${this.client.ws.ping}ms.`);
  }
}
