const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "RG!";
client.on("ready", message => {
    console.log("Ich bereit zu starten");

})


client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
});


client.on("message", message => {
    if(message.content === `${prefix}Hallo`) {
        message.channel.send(`Hey 👋`)
    }
});

client.login("Nzc2MzU0MDQ4MTU2NzYyMTQy.X6zqDQ.p_W9Y24tfbftsiUxRMkskD2SZVk")