export default class interactionCreate {
  interaction: any;
  constructor(interaction: any) {
    this.interaction = interaction;
    this.onInteractionCreate();
  }
  async onInteractionCreate() {
    if (!this.interaction.isCommand()) return;

    if (this.interaction.commandName === "ping") {
      await this.interaction.reply("Pong!");
    }
  }
}
