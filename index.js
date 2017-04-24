const Mastodon = require('mastodon-api');
const M = new Mastodon(require('./config.js'));

const awayMessage = `Hello! I am moving to a new Mastodon account. Please follow me instead at @USER@NEWDOMAIN. Thanks.`;

const listener = M.stream('streaming/user');

listener.on('message', msg => {
  if (msg.event === 'notification') {
    if (msg.data.type === 'follow') {
      var acct = msg.data.account.acct;
      M.post('statuses', { status: `@${acct} ${awayMessage}` });
    }
  }
});

