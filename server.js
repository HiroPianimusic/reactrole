const Discord = require('discord.js');
const { Client, Util } = require("discord.js");
const bot = new Client({ disableEveryone: true });
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
// What is partials?
// Partials allow you to receive events that contains uncached instances.
// When you restart your bot, any cache will be lost, and you wouldn't be able to get the previous content (.fetch())
// We're activate this to prevent any mistakes.

let m = require('moment-duration-format'),
    os = require('os'),
    cpuStat = require('cpu-stat'),
    ms = require('ms'),
    moment = require('moment'),
    fetch = require('node-fetch'),
    db = require('quick.db'),
    parse_ms = require('parse-ms'),
    dateformat = require('dateformat');

client.mute = new Map();


function emoji (id) {
  return bot.emojis.get(id).toString();
}



let memberlog = "757269842603540562";

client.on("guildMemberAdd", member => {
  if (member.guild.id !== "718459310702723203") return;
  
  client.channels.cache.get(memberlog).send(`Welcome to the **${member.guild.name}**, <@!${member.user.id}> !!!`);
  member.roles.add("718473980436283442"); // Member role.
})

client.on("guildMemberRemove", member => {
  if (member.guild.id !== "718473980436283442") return;
  
  client.channels.cache.get(memberlog).send(`So long... **${member.user.tag}** ... :(`);
});

client.on("messageReactionAdd", async (reaction, user) => {
  // If a message gains a reaction and it is uncached, fetch and cache the message.
  // You should account for any errors while fetching, it could return API errors if the resource is missing.
  if (reaction.message.partial) await reaction.message.fetch(); // Partial messages do not contain any content so skip them.
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; // If the user was a bot, return.
  if (!reaction.message.guild) return; // If the user was reacting something but not in the guild/server, ignore them.
  if (reaction.message.guild.id !== "718459310702723203") return; // Use this if your bot was only for one server/private server.
  
  if (reaction.message.channel.id === "757284141703364739") { // This is a #self-roles channel.
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729054000229384232") // Minecraft role.
      return user.send("Mobile Legend role was given!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("757268091611906109"); // Roblox role.
      return user.send("Among Us role was given!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "3️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729054790319079514")
      return user.send("Free Fire role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "4️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729055156729282561")
      return user.send("Dota 2 role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "5️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729054272435519599")
      return user.send("CS:GO role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "6️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729053790925488140")
      return user.send("PUBG PC/Mobile role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "7️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729054953909256192")
      return user.send("Fornite role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "8️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729055347326844978")
      return user.send("YU GI OH role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "9️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729058465049214998")
      return user.send("Point Blank role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "🔟") {
      await reaction.message.guild.members.cache.get(user.id).roles.add("729556210109644860")
      return user.send("AOV & SAO role was given!").catch(() => console.log("Failed to send DM."));
    }
  } else {
    return; // If the channel was not a #self-roles, ignore them.
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  // We're gonna make a trigger, if the user remove the reaction, the bot will take the role back.
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "718459310702723203") return;
  
  if (reaction.message.channel.id === "757284141703364739") {
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729054000229384232") // Minecraft role removed.
      return user.send("Mobile Legend role was taken!").catch(() => console.log("Failed to send DM."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("757268091611906109") // Minecraft role removed.
      return user.send("Among Us role was taken!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "3️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729054790319079514")
      return user.send("Free Fire role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "4️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729055156729282561")
      return user.send("Dota 2 role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "5️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729054272435519599")
      return user.send("CS:GO role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "6️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729053790925488140")
      return user.send("PUGB PC/Mobile role was given!").catch(() => console.log("Failed to send DM."));
    }
    if (reaction.emoji.name === "7️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729054953909256192")
      return user.send("Fornite role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "8️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729055347326844978")
      return user.send("YU GI OH role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "9️⃣") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729058465049214998")
      return user.send("Point Blank role was taken!").catch(() => console.log("Failed to send DM"));
    }
    if (reaction.emoji.name === "🔟") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("729556210109644860")
      return user.send("AOV & SAO role was taken!").catch(() => console.log("Failed to send DM"));
    }
  } else {
    return;
  }
})

require('./uptime.js')

client.on("ready", () => {
  function randomStatus() {
    let status = ["kucing hiro#0297", "Discord.js V12", "Reaction Roles"] // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);
    
    // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming
    
    client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/chilledcow"});
  }; setInterval(randomStatus, 30000) // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
  
  console.log('Bot online')
  let channel = client.channels.cache.get("718483831661002762") // We want to sent the embed, directly to this channel.
  let embed = new Discord.MessageEmbed()
  .setTitle("XX#4266")
  .setDescription("Bot Take Role On!")
  .setColor("#ffffff")
  .setTimestamp()
  channel.send("<@&718462182144213013>")
  channel.send(embed)
})

client.on('message', async message => {
  if (message.author.bot) return; // Ignore if the user is a bot.
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = ";"; // If the server doesn't have any custom prefix, return default.
  } else {
    prefix = pref;
  }
  
  let afk = new db.table("AFKs"),
      authorStatus = await afk.fetch(message.author.id),
      mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await afk.fetch(mentioned.id);
    
    if (status) {
      const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setDescription(`This user (${mentioned.user.tag}) is AFK: **${status}**`)
      message.channel.send(embed).then(i => i.delete({timeout: 5000}));
    }
  }
  
  if (authorStatus) {
    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setDescription(`**${message.author.tag}** is no longer AFK.`)
    message.channel.send(embed).then(i => i.delete({timeout: 5000}));
    afk.delete(message.author.id)
  }
  
  if (!message.content.startsWith(prefix)) return; // use this. so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1)); // Message Flags: -default, -ban, -parameter
  }
  
  if (msg.startsWith(prefix + "help")) {
    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setDescription("**COMMAND LIST**\n\n```afk, userinfo, serverinfo, ping, stats, corona, prune, kick, ban, spotify, meme, pat, meow, mute, unmute```")
    .setTimestamp()
    message.channel.send(embed)
    }
  
  if (msg.startsWith(prefix + "roles-game")) {
    let channel = client.channels.cache.get("757284141703364739") // We want to sent the embed, directly to this channel.
    const embed = new Discord.MessageEmbed()
    .setColor(0xffffff)
    .setTitle("PILIH ROLE GAME!")
    .setDescription(`1️⃣ Mobile Legend \n\n2️⃣ Among Us \n\n3️⃣ Free Fire \n\n4️⃣ Dota 2 \n\n5️⃣ CS:GO \n\n6️⃣ PUBG PC/Mobile \n\n7️⃣ Fornite \n\n8️⃣ YU GI OH \n\n9️⃣ Point Blank \n\n 🔟 AOV & SAO`) // We're gonna try an unicode emoji. Let's find it on emojipedia.com !
    channel.send("@everyone take role game!")
    channel.send(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
      await msg.react("3️⃣");
      await msg.react("4️⃣");
      await msg.react("5️⃣");
      await msg.react("6️⃣");
      await msg.react("7️⃣");
      await msg.react("8️⃣");
      await msg.react("9️⃣");
      await msg.react("🔟");
      // We're gonna using an await, to make the react are right in order.
    })
  }
  
  if (msg.startsWith(prefix + "prefix")) {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("You don't have any permissions to do this!");
    let data = db.get(`prefix.${message.guild.id}`);
    if (message.flags[0] === "default") {
      await db.delete(`prefix.${message.guild.id}`);
      return message.channel.send("The server prefix has been changed into default.");
    }
    
    let symbol = args.join(" ");
    if (!symbol) return message.channel.send("Please input the prefix.");
    
    db.set(`prefix.${message.guild.id}`, symbol);
    return message.channel.send(`The server prefix has been changed to **${symbol}**`);
  }
  
  if (msg.startsWith(prefix + 'afk')) {
    const status = new db.table("AFKs");
    let afk = await status.fetch(message.author.id);
    const embed = new Discord.MessageEmbed().setColor(0xffffff)
    
    if (!afk) {
      embed.setDescription(`**${message.author.tag}** now AFK.`)
      embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
      status.set(message.author.id, args.join(" ") || `AFK`);
    } else {
      embed.setDescription("You are no longer AFK.");
      status.delete(message.author.id);
    }
    
    message.channel.send(embed)
  }
  
  if (msg.startsWith(prefix + 'userinfo') || msg.startsWith(prefix + 'user')) {
    let user = message.mentions.users.first() || message.author;
    
    if (user.presence.status === "dnd") user.presence.status = "Do Not Disturb";
    if (user.presence.status === "idle") user.presence.status = "Idle";
    if (user.presence.status === "offline") user.presence.status = "Offline";
    if (user.presence.status === "online") user.presence.status = "Online";
    
    function game() {
      let game;
      if (user.presence.activities.length >= 1) game = `${user.presence.activities[0].type} ${user.presence.activities[0].name}`;
      else if (user.presence.activities.length < 1) game = "None"; // This will check if the user doesn't playing anything.
      return game; // Return the result.
    }
    
    let x = Date.now() - user.createdAt; // Since the user created their account.
    let y = Date.now() - message.guild.members.cache.get(user.id).joinedAt; // Since the user joined the server.
    let created = Math.floor(x / 86400000); // 5 digits-zero.
    let joined = Math.floor(y / 86400000);
    
    const member = message.guild.member(user);
    let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
    let createdate = moment.utc(user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Created Date
    let joindate = moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"); // User Joined the Server Date
    let status = user.presence.status;
    let avatar = user.avatarURL({size: 2048}); // Use 2048 for high quality avatar.
    
    const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag, avatar)
    .setThumbnail(avatar)
    .setTimestamp()
    .setColor(0x7289DA)
    .addField("ID", user.id, true)
    .addField("Nickname", nickname, true)
    .addField("Created Account Date", `${createdate} \nsince ${created} day(s) ago`, true)
    .addField("Joined Guild Date", `${joindate} \nsince ${joined} day(s) ago`, true)
    .addField("Status", status, true)
    .addField("Game", game(), true)
    
    message.channel.send(embed); // Let's see if it's working.
  }
  
  if (msg.startsWith(prefix + 'serverinfo')) {
    let icon = message.guild.iconURL({size: 2048}); // Server Avatar
    
    let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "london": "London",
      "russia": "Russia",
      "japan": "Japan",
      "hongkong": "Hongkong",
      "sydney": "Sydney",
      "us-central": "U.S. Central",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe"
    }
    
    // Members
    let member = message.guild.members;
    let offline = member.cache.filter(m => m.user.presence.status === "offline").size,
        online = member.cache.filter(m => m.user.presence.status === "online").size,
        idle = member.cache.filter(m => m.user.presence.status === "idle").size,
        dnd = member.cache.filter(m => m.user.presence.status === "dnd").size,
        robot = member.cache.filter(m => m.user.bot).size,
        total = message.guild.memberCount;
    
    // Channels
    let channels = message.guild.channels;
    let text = channels.cache.filter(r => r.type === "text").size,
        vc = channels.cache.filter(r => r.type === "voice").size,
        category = channels.cache.filter(r => r.type === "category").size,
        totalchan = channels.cache.size;
    
    // Region
    let location = region[message.guild.region];
    
    // Date
    let x = Date.now() - message.guild.createdAt;
    let h = Math.floor(x / 86400000) // 86400000, 5 digits-zero.
    let created = dateformat(message.guild.createdAt); // Install "dateformat" first.
    
    const embed = new Discord.MessageEmbed()
    .setColor(0x7289DA)
    .setTimestamp(new Date())
    .setThumbnail(icon)
    .setAuthor(message.guild.name, icon)
    .setDescription(`**ID:** ${message.guild.id}`)
    .addField("Region", location)
    .addField("Date Created", `${created} \nsince **${h}** day(s)`)
    .addField("Owner", `**${message.guild.owner.user.tag}** \n\`${message.guild.owner.user.id}\``)
    .addField(`Members [${total}]`, `Online: ${online} \nIdle: ${idle} \nDND: ${dnd} \nOffline: ${offline} \nBots: ${robot}`)
    .addField(`Channels [${totalchan}]`, `Text: ${text} \nVoice: ${vc} \nCategory: ${category}`)
    message.channel.send(embed); // Let's see if it's working!
  }
  
  if (msg.startsWith(prefix + 'ping')) {
    try {
      const m = await message.channel.send("Pinging..."); // Make sure the async is written, top of the client.on("message", ...)
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM") // Tired of choosing the embed colors? Just type "RANDOM" on it!
      .addField("⌛ Latency", `**${m.createdTimestamp -  message.createdTimestamp}ms**`)
      .addField("💓 API", `**${Math.floor(client.ws.ping)}ms**`) // Use "client.ping" if your Discord.js is < 1.15.1 --- Use "client.ws.ping" if your Discord.js is > 12.0.0
      return m.edit(`🏓 Pong!`, embed);
    } catch (error) {
      return message.channel.send(`Something went wrong: ${error.message}`);
      // Restart the bot as usual.
    }
  } // easy way.
  
  if (msg.startsWith(prefix + 'hello')) {
    message.channel.send('hewwo'); // results.
  }
  
  if (msg.startsWith(prefix + 'stats')) {
    cpuStat.usagePercent(function (error, percent, seconds) {
      if (error) {
        return console.error(error)
      }
      
      const cores = os.cpus().length // Counting how many cores your hosting has.
      const cpuModel = os.cpus()[0].model // Your hosting CPU model.
      const guild = client.guilds.cache.size.toLocaleString() // Counting how many servers invite your bot. Tolocalestring, meaning separate 3 numbers with commas.
      const user = client.users.cache.size.toLocaleString() // Counting how many members in the server that invite your bot.
      const channel = client.channels.cache.size.toLocaleString() // Counting how many channels in the server that invite your bot.
      const usage = formatBytes(process.memoryUsage().heapUsed) // Your memory usage.
      const Node = process.version // Your node version.
      const CPU = percent.toFixed(2) // Your CPU usage.
      
      const embed = new Discord.MessageEmbed() // Stable or < below than 11.x.x use RichEmbed. More than 12.x.x or Master or https://github.com/discordjs/discord.js/ (github:discordjs/discord.js) use MessageEmbed.
      // Actually they are exactly the same.
      embed.addField('Bot Statistics:', `Server: ${guild} \nUser: ${user} \nChannel: ${channel} \nUsage: ${usage} \nNode: ${Node} \nCPU Usage: ${CPU}%`) // Use Grave accent or `` 
      // (its on your keyboard, besides on number 1.)
      // Use \n to make a new line.
      embed.addField('Physical Statistics:', `CPU: ${cores} - ${cpuModel} \nUptime: **${parseDur(client.uptime)}**`)
      // Let's test it!
      // Use ** turn the text into bold.
      // Let's test again.
      message.channel.send(embed)
    })
  }
  
  if (msg.startsWith(prefix + "corona")) {
    let countries = args[0] // Your/someone countries prefix.
    
    fetch(`https://corona.lmao.ninja/v2/countries/${countries}`)
    .then(console.log)
    .then(res => res.json())
    .then(data => {
      let country = data.country;
      let flag = data.countryInfo.flag; // Turns out -> Link.
      let confirmed = data.cases.toLocaleString();
      let todayconfirmed = data.todayCases.toLocaleString();
      let deaths = data.deaths.toLocaleString();
      let todaydeaths = data.todayDeaths.toLocaleString();
      let recovered = data.recovered.toLocaleString();
      let critical = data.critical.toLocaleString();
      let active = data.active.toLocaleString();
      // Add .toLocaleString() if you wanna separate 3 numbers with commas.
      
      const embed = new Discord.MessageEmbed()
      .setColor(0x1d1d1d)
      .setTimestamp(new Date())
      .setAuthor("Coronavirus Statistics", flag)
      .addField(`Data for: ${country}`, `Confirmed: (Total: **${confirmed}** | Daily: **${todayconfirmed}**) \nDeaths: (Total: **${deaths}** | Daily: **${todaydeaths}**) \nRecovered: **${recovered}** \nCritical: **${critical}** \nActive: **${data.active}**`) // Sorry a little bit more complex.
      
      message.channel.send(embed);
      // Let's test it out!
    })
  }
  
  if (msg.startsWith(prefix + "prune") || msg.startsWith(prefix + "purge")) { // You can make an aliases. Just like that.
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
    if (isNaN(args[0])) return message.channel.send("Please input a valid number.") // isNaN = is Not a Number. (case sensitive, write it right)
    if (args[0] > 100) return message.channel.send("Insert the number less than 100.") // Discord limited purge number into 100.
    if (args[0] < 2) return message.channel.send("Insert the number more than 1.")
    
    await message.delete()
    await message.channel.bulkDelete(args[0])
    .then(messages => message.channel.send(`Deleted ${messages.size}/${args[0]} messages.`)).then(d => d.delete({timeout: 10000})) // How long this message will be deleted (in ms)
    .catch(() => message.channel.send("Something went wrong, while deleting messages.")) // This error will be displayed when the bot doesn't have an access to do it.
  }
  
  if (msg.startsWith(prefix + "kick")) {
    if (!message.member.hasPermission("KICK_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(1).join(" ");
    
    if (!user) return message.channel.send("Please mention the user.");
    if (user.id === message.author.id) return message.channel.send("You can't kick yourself.");
    if (user.id === client.user.id) return message.channel.send("You can't kick me.");
    
    if (!reason) reason = "No reason provided";
    
    member.kick(reason).then(() => {
      message.channel.send(`Successfully kicked **${user.tag}**`);
    }).catch(err => {
      message.reply("I was unable to kick the member.");
    })
  }
  
  if (msg.startsWith(prefix + "ban")) {
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have a permissions to do this.");
    let user = message.mentions.users.first();
    
    let member = message.guild.member(user);
    let reason = args.slice(22).join(" ");
    
    if (!user) return message.channel.send("Please mention the user.");
    if (user.id === message.author.id) return message.channel.send("You can't ban yourself.");
    if (user.id === client.user.id) return message.channel.send("You can't ban me.");
    
    if (!reason) reason = "No reason provided";
    member.ban(reason).then(() => {
      message.channel.send(`Successfully banned **${user.tag}**`);
    }).catch(err => {
      message.reply("I was unable to ban the member.");
    })
  }
  
  if (msg.startsWith(prefix + "spotify")) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }
    
    let convert = require('parse-ms')
    
    let status = user.presence.activities[0];
    
    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") return message.channel.send("This user isn't listening the Spotify.");
    
    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
      let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
          url = `https://open.spotify.com/track/${status.syncID}`,
          name = status.details,
          artist = status.state,
          album = status.assets.largeText,
          timeStart = status.timestamps.start,
          timeEnd = status.timestamps.end,
          timeConvert = convert(timeEnd - timeStart);
      
      let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
      let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
      
      let time = `${minutes}:${seconds}`;
      
      const embed = new Discord.MessageEmbed()
      .setAuthor("Spotify Track Information", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
      .setColor(0x1ED768)
      .setThumbnail(image)
      .addField("Name:", name, true)
      .addField("Album:", album, true)
      .addField("Artist:", artist, true)
      .addField("Duration:", time, false)
      .addField("Listen now on Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
      message.channel.send(embed)
    }
  }
  
  if (msg.startsWith(prefix + "meme") || msg.startsWith(prefix + "memes")) {
    const got = require('got'),
          {MessageEmbed} = require('discord.js');
    
    got('https://www.reddit.com/r/meme/random/.json').then(response => {
      let content = JSON.parse(response.body),
          image = content[0].data.children[0].data.url,
          embed = new MessageEmbed()
      .setImage(image)
      .setTimestamp()
      .setFooter('from: r/meme')
      message.channel.send(embed);
    }).catch(console.log)
  }
  
  if (msg.startsWith(prefix + "pat")) {
    const {MessageAttachment} = require('discord.js');
    const {body} = fetch('https://nekos.life/api/v2/img/pat').then(res => res.json()).then(result => {
      if (!result.url) return message.channel.send("Something went wrong.");
      const attachment = new MessageAttachment(result.url);
      message.channel.send(":)", attachment)
    })
  }
  
  if (msg.startsWith(prefix + "meow")) {
    const {MessageAttachment} = require('discord.js');
    const {body} = fetch('https://nekos.life/api/v2/img/meow').then(res => res.json()).then(result => {
      if (!result.url) return message.channel.send("Something went wrong.");
      const attachment = new MessageAttachment(result.url);
      message.channel.send(attachment) // You can remove the :), it's optional.
    })
  }
  
  if (msg.startsWith(prefix + "mute")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have any permissions to do this: Manage Messages/Mute Members/Admin");
    }
    
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("You need to mention the user.");
    // Optional:
    // if (user.id === client.user.id) return message.channel.send("You can't mute me.");
    // if (user.id === message.author.id) return message.channel.send("You can't mute yourself.");
    let role = message.guild.roles.cache.find(r => r.name === "muted");
    let bot = message.guild.members.cache.get(client.user.id).roles.highest;
    
    if (!role) return message.channel.send("Couldn't find the mute role.");
    if (role.position > bot.position) return message.channel.send("The role is higher than me.");
    
    let time = args[1];
    
    if (!time) {
      if (user.roles.cache.has(role.id)) return message.channel.send("The user is still muted.");
      await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`)))
      return message.channel.send(`${user.user.tag} is now muted.`);
    } else {
      if (user.roles.cache.has(role.id)) return message.channel.send("The user is still muted.");
      await (user.roles.add(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`)))
      
      let timer = setTimeout(function() {
        user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`));
        message.channel.send(`${user.user.tag} is now unmuted.`);
      }, ms(time))
      
      client.mute.set(user.user.id, timer);
      message.channel.send(`${user.user.tag} is now muted for **${ms(ms(time), {long: true})}**`);
    }
  }
  
  if (msg.startsWith(prefix + "unmute")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("MUTE_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You don't have any permissions to do this: Manage Messages/Mute Members/Admin");
    }
    
    let user = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if (!user) return message.channel.send("You need to mention the user.");
    
    let role = message.guild.roles.cache.find(r => r.name === "muted");
    if (!role) return message.channel.send("Couldn't find the mute role.");
    
    if (!user.roles.cache.find(r => r.name === "muted")) return message.channel.send("The user doesn't get muted.");
    
    await user.roles.remove(role.id).catch(err => message.channel.send(`Something went wrong: ${err}`));
    await clearTimeout(client.mute.get(user.user.id));
    await client.mute.delete(user.user.id);
    await message.channel.send(`${user.user.tag} is now unmuted.`);
  }
});

client.login(process.env.TOKEN); // Put your token into the .env
// Make sure to lock your project. Go to the your name project and click "Make This Project Private"

function formatBytes (a, b) {
  if (0 == a) return "0 Bytes";
  let c = 1024,
      d = b || 2,
      e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
} // Create MB, KB, TB or something in the back of your memory counters.

function parseDur(ms) {
  let seconds = ms / 1000,
      days = parseInt(seconds / 86400);
  seconds = seconds % 86400
  
  let hours = parseInt(seconds / 3600);
  seconds = seconds % 3600
  
  let minutes = parseInt(seconds / 60);
  seconds = parseInt(seconds % 60)
  
  if (days) {
    return `${days} day, ${hours} hours, ${minutes} minutes`
  } else if (hours) {
    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
  } else if (minutes) {
    return `${minutes} minutes, ${seconds} seconds`
  }
  
  return `${seconds} second(s)`
} // Uptime bot.
