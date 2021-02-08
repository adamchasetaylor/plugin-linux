plugin-linux
=========================

# Installation
```
twilio plugins:install @adamchasetaylor/plugin-linux
```

# Commands
<!-- commands -->
* [`twilio linux`](#twilio-linux)

## `twilio linux`

Keep an eye on incoming alerts, messages, and calls. Polls every 1 second.

```
Commands for Linux Distros

USAGE
  $ twilio linux:COMMAND

COMMANDS
  linux:environment  Displays Unredacted Environment Variables
  linux:headless     Commands for Headless Environments
  linux:version      Displays Operating System Information
```

## Setting Up Headless Ubuntu (using bash)

1) Install Keytar Dependencies
$ twilio linux:headless:dependencies

1) Add the autocomplete env var to your bash profile and source it
$ printf "$(twilio linux:headless:bash)" >> ~/.bashrc; source ~/.bashrc

## TODO 

1) Add Support for RHEL
2) Add Support for Arch
3) Add Support for ALPINE (inside Docker)# plugin-linux