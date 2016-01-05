var Discord = require("discord.js");

var config = require("./config.json");

var radio = require("./radio.json");

var bot = new Discord.Client();

var inChannel = false;

bot.on("ready", function () {
    console.log("Bot is up and running in " + bot.channels.length + " channels");
});

bot.on("disconnected", function () {
    console.log("Disconnected from Discord");
    process.exit(1);
});

bot.on("message", function (message) {
    if (message.author.id != bot.user.id && (message.content[0] === "!" || message.content.indexOf (bot.user.mention()) == 0 )) {
        //console.log("Incoming command '" + message.content + "' from user " + message.author);
        var cmdTxt = message.content.split(" ")[0].substring(1);
        var suffix = message.content.substring(cmdTxt.length + 2);
        if (message.content.indexOf(bot.user.mention()) == 0){
            try {
                cmdTxt = message.content.split(" ")[1];
                suffix = message.content.substring(bot.user.mention().length+cmdTxt.length + 2);
            } catch (e){
                bot.sendMessage(message.channel,"Yes?");
                return;
            }
        }
        
        var rstat = radio[cmdTxt]
        
        if (cmdTxt === "radio") {
            bot.sendMessage(message.channel, "__**Available radio stations:**__", function () { // message.author
                for(var fxes in radio) {
                    var info = "**!" + fxes + "**";
                    var usage = radio[fxes].usage;
                    
                    var name = radio[fxes].name;
                    if (name) {
                        info += "\n\t" + name;
                    }
                    
                    var url = radio[fxes].url;
                    if (url) {
                        info += "\n\t" + url;
                    }
                    bot.sendMessage(message.channel, info); // message.author
                }
            });
        }
        
        if (rstat && inChannel) {
                bot.voiceConnection.playFile(rstat.url);
                bot.setStatus("idle", rstat.name);
        }
        
        if (cmdTxt === "join") {
            if (suffix) {
                for (var channel of message.channel.server.channels) {
                    if (!suffix || channel.name === suffix) {
                        bot.joinVoiceChannel(channel, function (error) {
                            if (error != null) {
                                console.log(error);
                                process.exit(1);
                            }
                        });
                        inChannel = true;
                    }
                }
            }
        }
        
        if (cmdTxt === "leave") {
            if (inChannel) {
                bot.setStatus("idle");
                bot.leaveVoiceChannel();
                inChannel = false;
            }
        }
        
        if (message.author == bot.user) {
            return;
        }
    }
});

bot.login(config.email, config.password);