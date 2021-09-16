const pagination = require('discord.js-pagination')
const { MessageEmbed } = require('discord.js')

module.exports = {
  //commands: ['emojis', 'serveremojis','emoji', 'serveremoji'],
  commands : 'emojis',
  callback: async (client, message, arguments, text) => {
    const emojis = message.guild.emojis.cache;
    const animated = emojis.filter(emoji => emoji.animated).map(emoji => `<:${emoji.name}:${emoji.id}>`);
    const regular = emojis.filter(emoji => !emoji.animated).map(emoji => `<:${emoji.name}:${emoji.id}>`);

    const Embed1 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The 1st 25 Regular Emojis Are : ${regular.slice(0,25).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The 1st 10 Animated Emojis Are : ${animated.slice(0,10).join(' ')}` : 'N/A'
        });
    const Embed2 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The Next 25 Regular Emojis Are : ${regular.slice(25,50).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The Next 15 Animated Emojis Are : ${animated.slice(10,25).join(' ')}` : 'N/A'
        });
    const Embed3 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The Next 25 Regular Emojis Are : ${regular.slice(50,75).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The Next 15 Animated Emojis Are : ${animated.slice(25,40).join(' ')}` : 'N/A'
        });
    const Embed4 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The Next 25 Regular Emojis Are : ${regular.slice(75,100).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The Next 15 Animated Emojis Are : ${animated.slice(40,55).join(' ')}` : 'N/A'
        });
    const Embed5 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The Next 25 Regular Emojis Are : ${regular.slice(100,125).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The Next 15 Animated Emojis Are : ${animated.slice(55,70).join(' ')}` : 'N/A'
        });
    const Embed6 = new MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name} | Emojis [${emojis.size}]`)
      .setColor('RANDOM')
      .addFields(
        {
          name: `Standard [${regular.length}]:`, value: regular.length > 0 ? `The Next 25 Regular Emojis Are : ${regular.slice(125,150).join(' ')}` : 'N/A'
        },
        {
          name: `Animated [${animated.length}]:`, value: animated.length > 0 ? `The Next 15 Animated Emojis Are : ${animated.slice(70,85).join(' ')}` : 'N/A'
        });
    const pages = [Embed1,Embed2,Embed3,Embed4,Embed5,Embed6];
    const emoji = ["⏪", "⏩"]
    const timeout = '100000'
    pagination(message, pages, emoji, timeout)
  }
}