plugin-linux
=========================

# Installation
```
twilio plugins:install @adamchasetaylor/plugin-linux
```

# Commands
<!-- commands -->
* [`twilio linux:environment`](#twilio-linuxenvironment)
* [`twilio linux:headless:bash`](#twilio-linuxheadlessbash)
* [`twilio linux:headless:dependencies`](#twilio-linuxheadlessdependencies)
* [`twilio linux:version`](#twilio-linuxversion)

## `twilio linux:environment`

Displays Unredacted Environment Variables

```
USAGE
  $ twilio linux:environment

OPTIONS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv)            [default: columns] Format of command output.
```

## `twilio linux:headless:bash`

.bashrc script for KEYCHAIN

```
USAGE
  $ twilio linux:headless:bash

OPTIONS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv)            [default: columns] Format of command output.
```

## `twilio linux:headless:dependencies`

Command for Installing Libsecret

```
USAGE
  $ twilio linux:headless:dependencies

OPTIONS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv)            [default: columns] Format of command output.
```

## `twilio linux:version`

Displays Operating System Information

```
USAGE
  $ twilio linux:version

OPTIONS
  -l=(debug|info|warn|error|none)  [default: info] Level of logging messages.
  -o=(columns|json|tsv)            [default: columns] Format of command output.
```
<!-- commandsstop -->

## Setting Up Headless Ubuntu (using bash)

1) Ensure you have CURL
`sudo apt-get install curl`

2) Add NodeSource Repo to your APT Sources
`curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -``

3) Install the LTS version of NodeJS
`sudo apt-get install -y nodejs`

3) Install Keytar Dependencies
`$ twilio linux:headless:dependencies`

4) Add the autocomplete env var to your bash profile and source it
`$ printf "$(twilio linux:headless:bash)" >> ~/.bashrc; source ~/.bashrc`

## TODO 

1) Add Support for RHEL
2) Add Support for Arch
3) Add Support for ALPINE (inside Docker)
