const { Client, GatewayIntentBits } = require('discord.js'); 
const cron = require('node-cron');
require('dotenv').config(); 
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const client = new Client({ 
  intents: [ 
      GatewayIntentBits.Guilds,  
      GatewayIntentBits.GuildMessages,  
      GatewayIntentBits.MessageContent] 
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);


cron.schedule('0 9 * * *', () => {
        const channel = client.channels.cache.get('YOUR_CHANNEL_ID');
        if (channel) {
            channel.send('This message sends at 9:00 AM every day.');
        }
    });
  });

client.login(process.env.DISCORD_BOT_TOKEN);
