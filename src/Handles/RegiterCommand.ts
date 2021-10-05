import ping from "../Commands/ping";

export default class RegiterCommand {
  constructor(message: any, conmand: any, client: any) {
    switch (conmand[0].toLowerCase()) {
      case "ping":
        new ping(message, client, conmand);
        break;
    }
  }
}
