/* eslint-disable no-console */
const { exec } = require('child_process');
const { BaseCommand, TwilioClientCommand } = require('@twilio/cli-core').baseCommands;

class Bash extends BaseCommand {
  async run() {
    console.log();
    console.log('# twilio headless DBUS script');
    console.log('if test -z "$DBUS_SESSION_BUS_ADDRESS" ; then');
    console.log('  ## if not found, launch a new one');
    console.log('  eval `dbus-launch --sh-syntax`');
    console.log('  echo "D-Bus per-session daemon address is: $DBUS_SESSION_BUS_ADDRESS"');
    console.log('fi');
    console.log();
    console.log('# twilio headless KEYCHAIN locations');
    console.log(
      '# based off of https://unix.stackexchange.com/questions/473528/how-do-you-enable-the-secret-tool-command-backed-by-gnome-keyring-libsecret-an',
    );
    console.log('mkdir -p ~/.cache');
    console.log('mkdir -p ~/.local/share/keyrings # where the automatic keyring is created');

    console.log("printf '\\n' | gnome-keyring-daemon --unlock");
    console.log("printf '\\n' | /usr/bin/gnome-keyring-daemon --start");
  }
}

Bash.description = '.bashrc script for KEYCHAIN';

module.exports = Bash;
