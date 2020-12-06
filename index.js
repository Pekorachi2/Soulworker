const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Nzg1MDU2NjU0MzkwOTg0NzI1.X8yS_A.JsKUJzs-WidKBxp3-C29Ky8l04M';

client.on('ready', () => {
    console.log('켰다.');
    client.user.setPresence({ game: { name: 'SoulWorker' }, status: 'online' })
  });

  client.on('message', (message) => {
    if(message.content === '!웹페이지') {
      message.reply('http://dorothy.greyfroze.co.kr/Soulworker/');
    }
  });

client.login(token);