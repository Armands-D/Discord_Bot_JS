require('dotenv').config();
const fs = require('fs')
let stats = require("./variables/stats.json");

let commands = require("./comms.json");

const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
const prefix = "+"

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (msg.content in commands) {
        msg.reply(commands[msg.content]);
    }
});

bot.on('message', msg => {

    let args = msg.content.slice(prefix.lenght).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)]

        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(bot, msg, args);

    } catch (e) {
        console.log(e.stack);
    }
});