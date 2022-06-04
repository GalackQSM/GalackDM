//   _____       _            _    _____  __  __ 
//  / ____|     | |          | |  |  __ \|  \/  |
// | |  __  __ _| | __ _  ___| | _| |  | | \  / |
// | | |_ |/ _` | |/ _` |/ __| |/ / |  | | |\/| |
// | |__| | (_| | | (_| | (__|   <| |__| | |  | |
//  \_____|\__,_|_|\__,_|\___|_|\_\_____/|_|  |_|
//================================================
// Crée le: 18/08/2020
// Crée par: GalackQSM#7926
// Serveur Discord: https://discord.gg/XH7zQ8s
//================================================

console.clear()
const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs');
const mkdirp = require('mkdirp');
var nitro = new Discord.Client();
var sleep = require('system-sleep');
var readline = require('readline');
var tm = readline.createInterface(process.stdin, process.stdout);
var prefix = ("*");

// TOKEN DU BOT
nitro.login("OTc2ODg2NjUwMDUzNDYwMDA4.GaJpZ4.P_rRt5tTCue-XDhk11YTv8v5GGiXFVVsVjRTwQ");


// Message pub [\n Pour sauter une ligne]
messagetsend = ("{
     "content": "Bravo, tu as gagner 1x Nitro Classique & 1x Nitro Boost !",
     "embed": {
       "color": 2894892,

           "image": {
         "url": "https://media.discordapp.net/attachments/867436223568019466/878289761532534854/nitro_gif.gif"
        },
       "": {
      "url": "https://cdn.discordapp.com/attachments/883696201545953280/883700975301443604/wumpus-discord.gif"
    },

       "author": {
         "name": "Bravo !",
         "icon_url": "https://media.discordapp.net/attachments/823572443293286401/823584434531205200/giveaways_1.png"
       },
       "fields": [
         {
          "name": "Condtions :",
           "value": "1. [Clique ici pour obtenir le lien vers le serveur](https://discord.gg/Nitrofr) \n\n2. Une fois dans le serveur n'oublie pas de regarder le salon 🎁•rewards afin savoir les rewards! "
         }

       ]
     }
   }")


// Vitesse
timeout = 100
// 100 =  10  Par Seconde
// 1000 = 1   par Seconde
// 2000 = 0.5 par Seconde



nitro.on('ready', () => {
  console.log("");                                   
  console.log((chalk.cyan(`                                           #####                                     ######  #     # `)));
  console.log((chalk.cyan(`                                          #     #   ##   #        ##    ####  #    # #     # ##   ## `)));
  console.log((chalk.cyan(`                                          #        #  #  #       #  #  #    # #   #  #     # # # # # `)));
  console.log((chalk.cyan(`                                          #  #### #    # #      #    # #      ####   #     # #  #  # `)));
  console.log((chalk.cyan(`                                          #     # ###### #      ###### #      #  #   #     # #     # `)));
  console.log((chalk.cyan(`                                          #     # #    # #      #    # #    # #   #  #     # #     # `)));
  console.log((chalk.cyan(`                                           #####  #    # ###### #    #  ####  #    # ######  #     # `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#7926 !`)));  
  console.log((chalk.yellow(`                                                              © 2020 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                       Discord: https://discord.gg/XH7zQ8s`)));   
  console.log((chalk.red(`                                                     Twitter: https://twitter.com/Galack_QSM`)));   
  console.log((chalk.red(`                                                       Github: https://github.com/GalackQSM`))); 
  console.log((chalk.red(`                                                       Youtube: https://youtube.com/GalackQSM`)));   
  console.log("");                                  

   console.log(`Statistiques globales : \n\nLe bot a un total de ${nitro.guilds.cache.size} serveurs. \nPour un total de ${nitro.users.cache.size} membres. \n\nMessage :\n\u001b[36m${messagetsend}\u001b[0m\n\n\n `)
  console.log("Connecté en tant que " + nitro.user.id + " | Prefix : " + prefix + " | Nombre de Serveurs "+ nitro.guilds.cache.size +" | Nombres de channels "+ nitro.channels.cache.size +" | Utilisateur totaux "+ nitro.users.cache.size +" | Nombre d'emojis totaux "+ nitro.emojis.cache.size +'');

   tm.question('\u001b[0mTape \u001b[32mENTRER \u001b[0mpour lancer GalackDM\n\n', (answer) => {
      dmed = "0"
      nitro.users.cache.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetsend).catch(O_o => {})
         console.log("\u001b[31;1m[" + dmed + "/" + nitro.users.cache.size + "]\u001b[37m Message envoyer à \u001b[36m" + member.username + "#" + member.discriminator)
           console.log((chalk.white(``)));                    

         if (dmed == nitro.users.cache.size) {
            console.log("\u001b[32mGalackDM terminé avec succès \nLaissez le logiciel courir 10 minutes de plus pour être sûr que tout le monde a bien reçu le DM.")
         }
      })
   })
})




process.on("unhandledRejection", error => {

      if (error) {
         console.log("Token invalide ou suspendu par discord.")
      } else {
         console.error(error);
      }
   
});
