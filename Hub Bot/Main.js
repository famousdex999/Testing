var Discord = require('discord.js')
var client = new Discord.Client()
var fetch = require('node-fetch')
var sha512 = require('js-sha512')
const lr = require('line-reader')
var fs = require('fs')

client.on('ready', () => {
    client.user.setActivity('!help in my DMS')
});


client.login('NjMyNTEwOTE1MjQ5NzAwODg0.XaGd4Q.gPdG5lkD8HrVtat2IFtRX6vnKlI')

client.on('message', function(message) {
    if(message.author.bot) return;

    if(message.channel.type !== 'dm') {
        if(message.content.includes('!wl')) {
            message.delete()
            message.reply('Send that in my DMS!')
        }
    }

    if(message.channel.type !== 'dm') {
    if (message.member.roles.get('625258205433430028')) {
        if(message.content.includes('!getscript')) {
            message.delete()
            client.channels.get(`625070375004405780`).send(message.author.id + " got the script")
            message.author.send({embed: {
                color: 3447003,
                author: {
                  name: message.author.username,
                  icon_url: message.author.avatarURL
                },
                title: "Whitelist Bot",
                fields: [{
                    name: "TOS:",
                value: "1. You're NOT allowed to share you're key (sharing will result in a blacklist!)\n2. Attempting to crack the script will also result in a blacklist!\n3. Giving the script to a non-buyer will result in a blacklist!\n4. Helping game developers patch scripts will result in a blacklist!\n5. I can discontinue the script at any time.\n6. No Refunds."
                  },
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "Unique Id: " + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                }
              },
              files: ['./Hub V0.3.lua']
            })          
        }
    }
    else {
        message.reply("You're not a buyer!")
    }
}

    if(message.channel.type === 'dm') {
        if(message.content.startsWith('!wl ')) {
            Key = message.content.slice(4)
            fetch('https://r8hi0kp0xx5agqywpym6.000webhostapp.com/jIzmOIanzyuBaimzijUbna/JNZInZIAnsaiuznazGbazo/HbzoMAzoamnhBSmz.php?Key=' + Key)
            .then(res => final = res.text())
            .then(final => {
                if(final === sha512(Key)) {
                    message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: message.author.username,
                          icon_url: message.author.avatarURL
                        },
                        title: "Whitelist Bot",
                        fields: [{
                            name: "Status:",
                            value: "You're key is valid, All whitelisting is done manually so please wait!"
                          },
                        ],
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "Unique Id: " + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                        }
                      }
                    });
                } else {
                    message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: message.author.username,
                          icon_url: message.author.avatarURL
                        },
                        title: "Whitelist Bot",
                        fields: [{
                            name: "Status:",
                            value: "Invalid key or it's already been used, please contact fake#9658 (584121078272491530) if this is an error!"
                          },
                        ],
                        timestamp: new Date(),
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "Unique Id: " + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                        }
                      }
                    });
                }
            })
        }
    }
    // End of WL Handler ^
    if(message.content.startsWith('!wlip')) {
        SLICEDDD = message.content.slice(6)
        lr.eachLine("./Buyers.txt", function(Buyer) {
            if(Buyer.includes(message.author.id)) {
                message.reply("You're IP will be whitelisted! (Done Manually!)")
                fs.appendFile('WHITELIST NEW IPS.txt', SLICEDDD + " | " + message.author.id + "\n", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  })
            }   
        })
    }
    // End of WLIP Handler ^

    if(message.content.startsWith('!wlid')) {
        SLICEDDDD = message.content.slice(6)
        lr.eachLine("./Buyers.txt", function(Buyer) {
            if(Buyer.includes(message.author.id)) {
                message.reply("You're ID will be whitelisted! (Done Manually!)")
                fs.appendFile('WHITELIST NEW IDS.txt', SLICEDDDD + " | "  + message.author.id + "\n", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                })
            }   
        })
    }
    // End of WLID Handler ^

    if(message.content.startsWith('!newip')) {
    SLICED = message.content.slice(7)
    lr.eachLine("./Buyers.txt", function(Buyer) {
        if(Buyer.includes(message.author.id)) {
            message.reply("You're IP will be changed! (Done Manually!)")
            fs.appendFile('NEED TO CHANGE IPS.txt', SLICED + " | "  + message.author.id +  "\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
              })
            }   
        })
    }
    // End of NEWIP Handler ^
    if(message.content.startsWith('!newid')) {
        SLICEDD = message.content.slice(7)
        lr.eachLine("./Buyers.txt", function(Buyers) {
            if(Buyers.includes(message.author.id)) {
                message.reply("You're ID will be changed! (Done Manually!)")
                fs.appendFile('NEED TO CHANGE IDS.txt', SLICEDD + " | "  + message.author.id +  "\n", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                  });
                }   
            })
        }

    if(message.content.startsWith('!help')) {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: message.author.username,
              icon_url: message.author.avatarURL
            },
            title: "Whitelist Bot",
            fields: [{
                name: "Use a key:",
                value: "To use a key do: !wl KEY"
              },
              {
                  name: "Whitelist You're ID:",
                  value: "Use command !wlid ID (You need the role #buyers to use this!)"
              },
              {
                name: "Whitelist You're IP:",
                value: "Use command !wlip IP (You need the role #buyers to use this!)"
              },
              {
                name: "Change Whitelisted IP:",
                value: "Change IP do: !newip OLDIP;NEWIP (You must use the correct format or it will not work!)"
              },
              {
                name: "Change Whitelisted ID:",
                value: "Change ID do: !newid OLDID;NEWID (You must use the correct format or it will not work!)"
              },
              {
                name: "To Get The Script:",
                value: "Go into any channel (not dms) and type !getscript"
              },
              {
                name: "TOS:",
                value: "1. You're NOT allowed to share you're key (sharing will result in a blacklist!)\n2. Attempting to crack the script will also result in a blacklist!\n3. Giving the script to a non-buyer will result in a blacklist!\n4. Helping game developers patch scripts will result in a blacklist!\n5. I can discontinue the script at any time.\n6. No Refunds."
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Unique Id: " + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            }
          }
        });
    }
})