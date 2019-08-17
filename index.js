const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "/"; //Prefix du bot

client.login("NjEyMjc5NzQwMjkxNjEyNjkz.XVgxfA.ANFPCmZAWaPfz7U5gLekf8uj-6k")

client.on("guildMemberRemove", userj =>{
    userj.guild.channels.get("488013034548101122").send("Bienvenue sur le discord marche de la faction Minable ! Avant de commencer tes achats nous te demandons de respecter le reglement ! Sache que ce discord est **en aucun cas le discord officiel de la faction** ! ")

});

client.on("guildMemberRemove", userl =>{
    userl.guild.channels.get("488013034548101122").send("Au non " + userl.user.username + " a quitte le navire de la Minable ! ")
});

client.on("message", message =>{
    if(!message.guild) return 
    if(message.content === "Salut"){
    message.channel.send("Bonjour " + message.author + " ! ")
}
});