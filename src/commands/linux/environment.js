/* eslint-disable no-console */
const { BaseCommand, TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

class Environment extends BaseCommand {
  async run() {
    console.log(process.env); // display environment variables
  }
}

Environment.description = 'Displays Unredacted Environment Variables';

module.exports = Environment;
