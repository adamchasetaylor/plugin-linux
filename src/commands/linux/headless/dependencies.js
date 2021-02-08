/* eslint-disable no-console */
const chalk = require('chalk');
const os = require('@nexssp/os');
const { exec } = require('child_process');
const { BaseCommand, TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

const success = chalk.bold.green;
const code = chalk.bold.blue;

class Keytar extends BaseCommand {
  async run() {
    // Default to Ubuntu/Debian Package

    let installVerdict;
    let pkg = 'npx node-sys libsecret-1-dev gnome-keyring dbus-x11';

    switch (os.get('DISTRIB_ID')) {
      case 'Ubuntu':
        console.log(`To fully install "keytar" package on Ubuntu run: ${code(pkg)}.`);
        installVerdict = await this.askPackage();
        if (installVerdict) {
          //keytar requires gnome-keyring
          this.installPackage(pkg);
        }
        break;
      default:
        console.log('You are not running a supported version of Linux.');
        break;
    }
  }

  installPackage(pkg) {
    exec(pkg, (error, stdout, stderr) => {
      if (error) {
        console.error(error);
      } else {
        console.log(success('Package Installed'));
      }
    });
  }

  async askPackage() {
    const verdict = await this.inquirer.prompt([
      {
        type: 'confirm',
        name: 'installPackage',
        message: 'Would you like to install this package?',
        default: false,
      },
    ]);
    return verdict.installPackage;
  }
}

Keytar.description = 'Command for Installing Libsecret';

module.exports = Keytar;
