//   _____       _            _    _____  __  __ 
//  / ____|     | |          | |  |  __ \|  \/  |
// | |  __  __ _| | __ _  ___| | _| |  | | \  / |
// | | |_ |/ _` | |/ _` |/ __| |/ / |  | | |\/| |
// | |__| | (_| | | (_| | (__|   <| |__| | |  | |
//  \_____|\__,_|_|\__,_|\___|_|\_\_____/|_|  |_|
//================================================
// Crée le: 04/12/2019
// Crée par: 𝐆𝐚𝐥𝐚𝐜𝐤𝐐𝐒𝐌#0001
// Serveur Discord: https://discord.gg/DkjJXgZ
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
nitro.login("NzE1OTI2NjkwMjQ0NTkxNjM0.XtEUsA.cv09fbPFBuegPUuBs4701E4sCV8");


// Message pub [\n Pour sauter une ligne]
messagetsend = ("🤖 __Voici DeltaBot votre bot pour votre serveur Discord__ 🤖\n\n> 💥 Un bot surpuissant pour votre serveur\n> 💯  Plus de 160 commandes.\n> ⚙️ AutoRole, Message de bienvenue et plein d'autre encore...\n> 📈 Un classement des invitations...\n> 🌐 Un bot multi-langues.\n> 👦 Système de profil, mariage, réputation et autres.\n> 🤪 Un dashboard connecté au bot.\n> 🧨 En développement tous les jours pour être le meilleur des bots.\n\n> 🔗 Serveur Support: https://discord.gg/cAmtjYj\n> 🔗 Site: https://delta-bot.com/")


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
  console.log((chalk.yellow(`                                                               Crée par GalackQSM!`)));  
  console.log((chalk.yellow(`                                                              © 2019 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                       Discord: https://discord.gg/navanTr`)));   
  console.log((chalk.red(`                                                    Twitter: https://twitter.com/Galack_dotsh`)));   
  console.log("");                                  

   console.log(`Statistiques globales : \n\nLe bot a un total de ${nitro.guilds.size} serveurs. \nPour un total de ${nitro.users.size} membres. \n\nMessage :\n\u001b[36m${messagetsend}\u001b[0m\n\n\n `)
  console.log("Connecté en tant que " + nitro.user.id + " | Prefix : " + prefix + " | Nombre de Serveurs "+ nitro.guilds.size +" | Nombres de channels "+ nitro.channels.size +" | Utilisateur totaux "+ nitro.users.size +" | Nombre d'emojis totaux "+ nitro.emojis.size +'');

   tm.question('\u001b[0mTape \u001b[32mENTRER \u001b[0mpour lancer GalackDM\n\n', (answer) => {
      dmed = "0"
      nitro.users.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetsend).catch(O_o => {})
         console.log("\u001b[31;1m[" + dmed + "/" + nitro.users.size + "]\u001b[37m Message envoyer à \u001b[36m" + member.username + "#" + member.discriminator)
           console.log((chalk.white(``)));                    

         if (dmed == nitro.users.size) {
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
