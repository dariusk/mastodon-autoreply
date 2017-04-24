# mastodon-autoreply (Mastodon Autoreply)

A bot that replies to new followers, ideally saying "I've moved! Follow me (here)."

## Installation

```bash
$ git clone git@github.com:dariusk/mastodon-autoreply.git
$ cd mastodon-autoreply
```

Obtain an access token [following the instructions here](https://tinysubversions.com/notes/mastodon-bot/).

Put the access token in the indicated blank in `config.js` and also update the domain the bot is running on as well.

Edit `index.js` so that `awayMessage` says whatever message you want.

Run the bot! Note: _this is not a cron-style bot_. It's going to have to run continuously in the background because it uses the streaming API to watch for new follows. If you're installing this on a Linux server, [this guide](http://stackoverflow.com/questions/4681067/how-do-i-run-a-node-js-application-as-its-own-process/28542093#28542093) will help you run it as a continuous background process, even after a reboot.

## License
Copyright (c) 2017 Darius Kazemi  
Licensed under the MIT license.
