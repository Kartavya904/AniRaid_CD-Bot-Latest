const Discord = require('discord.js')
module.exports = {
    commands : ['changerole', 'rolechange','changeroles', 'roleschange'],
    callback : async (client, message, arguments, text) => {
        const { guild, member } = message;
        if (!member.permissions.has("MANAGE_ROLES")) {
          message.reply(`You need permissions: \`MANAGE_ROLES\``);
          return;
        }   
        let user = message.mentions.members.first();
        if (!user) {
          message.reply(`\`user\` is a required argument which is missing.`);
          return;
        }
        let roleName = arguments.splice(1).join(" ");
        let role =
          message.guild.roles.cache.find((r) => r.name === roleName) ||
          message.mentions.roles.first();
        if (!role) {
          message.reply(`\`role\` is a required argument which is missing.`);
          return;
        }
        try {
          if (user.roles.cache.has(role.id)) {
            user.roles.remove(role);
            message.channel.send(
              `\`${user.user.username}\`'s \`${role.name}\` role has been removed.`
            );
          } else {
            user.roles.add(role);
            message.channel.send(
              `\`${user.user.username}\` has now the \`${role.name}\` role!`
            );
          } 
        } catch (err) {
          console.error(err);
          message.reply(`Something's wrong... Check my role and position.`);
          return;
        }
      }
}