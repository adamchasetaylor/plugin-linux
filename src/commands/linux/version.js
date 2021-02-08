/* eslint-disable no-console */
const os = require('@nexssp/os');
const { BaseCommand, TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

class Version extends BaseCommand {
  async run() {
    console.log(os.get()); // display all available data - different distros, different
  }
}

Version.description = 'Displays Operating System Information';

module.exports = Version;
