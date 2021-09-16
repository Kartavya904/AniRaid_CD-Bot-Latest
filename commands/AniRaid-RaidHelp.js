const { MessageEmbed, MessageReaction, MessageButton, MessageActionRow, Interaction, ButtonInteraction } = require("discord.js")
const pagination = require('discord.js-pagination')
module.exports = {
    commands: [`raidhelp`, `teamfor`, `rdhelp`, `rd help`, `raid help`],
    callback: async (client, message, arguments, text) => {
        const me = client.users.cache.get('439541365580365835')
        //console.log(message.channel)
        const cardList = [
            ['2B', 'Nier: Automata', 'Neutral ✨', 'https://i.ibb.co/0XgcjLp/c3cae03eae5b.png', 80, 97, 66, 82, 0, 1, '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', 'Everything that lives is designed to end. We are perpetually trapped...in a never-ending spiral of life and death. [SARIYA] ', 1],['9S', 'Nier: Automata', 'Neutral ✨', 'https://i.ibb.co/19Z7BdB/1d07c0121215.png', 94, 67, 90, 76, 0, 2, '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', "I can't control my curiosity about machines anymore. I'm leaving so I can study them as much as I want! [yoshi55level] ", 2], ['Accelerator', 'A Certain Scientific Railgun', 'Light ☀️', 'https://i.ibb.co/Wx9mR3K/5e1ce88ba2b5.png', 73, 89, 70, 89, 33, 1, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'I strive for something beyond the strongest, that challenging me would be the most ridiculous thought ever, that fighting me would be a sin! [danieldats] ', 3], ['Ai Hayasaka', 'Love Is War', 'Ground ⛰️', 'https://i.ibb.co/XbcYYzG/d7e9bd181d2d.png', 88, 88, 57, 93, 61, 1, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', "If you don't put on an act, you won't be loved. [N/A] ", 4], ['Ainz Ooal Gown', 'Overlord', 'Dark 🌙', 'https://i.ibb.co/dPGckHS/090e479781ab.png', 82, 99, 66, 78, 22, 1, '**Elemental Strike**: Deal **Dark** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Feel the power of the man you all respect and call your master! [moni158] ', 5], ['Ais Wallenstein', 'Danmachi', 'Neutral ✨', 'https://i.ibb.co/bF3bHyh/dac718938fe3.png', 68, 93, 94, 66, 19, 1, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'I want to make it up to him! ', 6], ['Akame', 'Akame Ga Kill!', 'Dark 🌙', 'https://i.ibb.co/dMn2RKM/ccf00bbfeda5.png', 85, 80, 69, 86, 24, 1, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'As the living it is our responsibility to carry out the wishes of the ones who are gone. ', 7], ['Akane Tsunemori', 'Psycho Pass', 'Light ☀️', 'https://i.ibb.co/R0jMfzh/326784a64f59.png', 77, 89, 93, 62, 67, 1, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', "Society doesn't do what's right. That's exactly why we ourselves must live virtuous lives. ", 8], ['Akeno Himejima', 'High School DxD', 'Electric ⚡', 'https://i.ibb.co/wyPbwyQ/71e012356ab9.png', 62, 99, 71, 91, 26, 1, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Even the phoenix that rises from the ashes can’t recover instantly from mental damage.[ADSouto] ', 9], ['Akiko Yosano', 'Bungou Stray Dogs', 'Neutral ✨', 'https://i.ibb.co/GdvpdRK/3ee8420b2b54.png', 85, 75, 85, 80, 64, 1, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "It's my fault that those close to me are dead.", 10], ['Akira Hayama', 'Shokugeki No Soma', 'Grass 🍃', 'https://i.ibb.co/Bqg3Wxp/d970e52bf14b.png', 73, 83, 71, 100, 57, 1, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', "I'm perfectly prepared. [ngk06titi] ", 11], ['Akitaru Obi', 'Fire Force', 'Ground ⛰️', 'https://i.ibb.co/mtkSVNp/d5417b123afd.png', 94, 70, 76, 83, 55, 1, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', 'Fire soldiers do not leave their comrades behind and run away. [maioceaneyes] ', 12], ['Aladdin', 'Magi', 'Light ☀️', 'https://i.ibb.co/KLw6w5g/489faa99f17f.png', 64, 76, 84, 97, 34, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'Don’t you think that if you keep lying, eventually no one, not even yourself, will be able to believe your own words? ', 13], ['Albedo', 'Overlord', 'Dark 🌙', 'https://i.ibb.co/pR81qFn/5b0137e2e666.png', 96, 94, 67, 67, 22, 2, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'I will let you taste the most amount of pain you have ever felt until you go mad! [JJU] ', 14], ['Alex Louis Armstrong', 'Fullmetal Alchemist', 'Light ☀️', 'https://i.ibb.co/MRvf1Xm/3fdd81769d02.png', 89, 87, 92, 86, 20, 1, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', 'Destruction and creation are two sides of the same coin! You must destroy to create! That is the law of the universe! [gongsang81] ', 15], ['Alibaba Saluja', 'Magi', 'Fire 🔥', 'https://i.ibb.co/G38bQ6D/66a1974c227b.png', 80, 76, 96, 71, 34, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'There are real heroes in the world. [BlackLawliet] ', 16], ['Alice Nakiri', 'Shokugeki No Soma', 'Ground ⛰️', 'https://i.ibb.co/6ZxWtyP/ebd39b212ba0.png', 81, 73, 76, 95, 57, 2, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'What an utterly surprising dish! Each piece has an exquisite taste completely unlike what you would expect! [kizashi_mairu] ', 17], ['Alice Zuberg', 'Sword Art Online', 'Light ☀️', 'https://i.ibb.co/68jxJxG/b1b3bc0bb719.png', 75, 86, 98, 65, 12, 1, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "Pain... we've all experienced that. [Edgina36] ", 18], ['All Might', 'My Hero Academia', 'Neutral ✨', 'https://i.ibb.co/Cw423rt/3cc9fe1001f7.png', 85, 94, 76, 67, 17, 1, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'Whether you win or lose, looking back and learning from the experience is a part of life! [original art] ', 19], ['Amber', 'Darker Than Black', 'Neutral ✨', 'https://i.ibb.co/12S48r7/308ffeb9605a.png', 79, 99, 83, 66, 8, 1, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "I've always missed you. I missed you for so long. [original art] ", 20], ['Ami Mizuno (Sailor Mercury)', 'Sailor Moon', 'Water 💧', 'https://i.ibb.co/L0Kg5Xp/e4516e84477d.png', 72, 84, 70, 98, 37, 1, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'For love and exams, I’m Sailor Mercury! Stand under a cold waterfall and reflect on your conduct! [Tosikou] ', 21], ['Android 18', 'Dragon Ball', 'Ground ⛰️', 'https://i.ibb.co/bRT5ZMc/fc18e323b685.png', 74, 92, 75, 81, 29, 1, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "Now you've really pissed me off! ", 22], ['Annie Leonhart', 'Attack On Titan', 'Water 💧', 'https://i.ibb.co/rxRGNSS/b47b938dffc3.png', 96, 96, 65, 70, 9, 1, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "I dont care if I'm swept along with the flow, as long as I'm considered human. ", 23], ['Aoi Asahina', 'Danganronpa', 'Water 💧', 'https://i.ibb.co/M1vqrbd/d960dd5072a6.png', 72, 77, 91, 87, 54, 1, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "There are 2 things I'm sure God created - outer space, and donuts! [omagu] ", 24], ['Aqua', 'Konosuba', 'Water 💧', 'https://i.ibb.co/RYC3qmn/d7fb450453b2.png', 80, 93, 85, 68, 18, 1, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Like they say, make the best of a bad situation! [original art] ', 25], ['Arataka Reigen', 'Mob Psycho 100', 'Neutral ✨', 'https://i.ibb.co/XX11txN/908aa181e6d2.png', 85, 70, 87, 75, 56, 1, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', "If you misuse a power that's all too great, you will only destroy yourself. ", 26], ['Armin Arlert', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/KFGdKQS/02c9e1ec970d.png', 70, 96, 73, 86, 9, 2, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'Someone who cannot abandon everything cannot achieve anything. [Ashes泽] ', 27], ['Arthur Boyle', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/vcTJfs6/99d0f4cc7d34.png', 86, 78, 72, 95, 55, 2, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "Everyone is equal before the round table. Don't sweat it. [bey_bev] ", 28], ['Artoria Pendragon', 'Fate', 'Light ☀️', 'https://i.ibb.co/7WMFBfb/66e36f8f67fd.png', 86, 93, 75, 65, 2, 1, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'The weight of my sword is the weight of my pride. [推奨幻想] ', 29], ['Aru Akise', 'Mirai Nikki', 'Light ☀️', 'https://i.ibb.co/gFH6Bhg/748861de61c0.png', 95, 84, 70, 76, 31, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'If you want to know what others think, you first have to say what you think. ', 30], ['Asia Argento', 'High School DxD', 'Light ☀️', 'https://i.ibb.co/smJZXj0/6cf7ae9c080f.png', 99, 81, 62, 81, 26, 2, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "He took care of me, and now it's my turn to take care of him! ", 31], ['Asta', 'Black Clover', 'Dark 🌙', 'https://i.ibb.co/ykd3FLf/bfcce5983ce6.png', 83, 85, 68, 93, 3, 1, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'You need to stand your ground, no matter how pathetic you are! [Original art] ', 32], ['Asuna Yuuki', 'Sword Art Online', 'Water 💧', 'https://i.ibb.co/G3k12mm/f79031e146fa.png', 97, 85, 63, 79, 12, 2, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'Keep doing your best, up until the very end. ', 33], ['Atsushi Nakajima', 'Bungou Stray Dogs', 'Light ☀️', 'https://i.ibb.co/dJ47Jy0/3344fda81bc4.png', 90, 81, 93, 63, 64, 2, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'If I wish to live, I have no choice but to steal from others!', 34], ['Ayano Keiko [Silica]', 'Sword Art Online', 'Grass 🍃', 'https://i.ibb.co/T26bJw7/24351488a946.png', 63, 84, 100, 80, 12, 3, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', "It's impossible to work hard for something you don't enjoy. ", 35], ['Ayato Kirishima', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/VCBvY4L/27b33ccf6c8f.png', 87, 94, 63, 75, 6, 1, '**Elemental Strike**: Deal **Dark** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "You're the little kid. Face reality, you callous. ", 36], ['Ayato Naoi', 'Angel Beats', 'Neutral ✨', 'https://i.ibb.co/DgDZm2g/ce2e4766a8b4.png', 89, 81, 86, 67, 14, 1, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'No matter what kind of past you had, don’t lose sight of yourself. [U-ka] ', 37], ['Azusa Nakano', 'K-On!', 'Light ☀️', 'https://i.ibb.co/rfDX4HN/b2f244ce0ca2.png', 80, 80, 82, 77, 21, 1, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', "Yui-senpai, you can't start crying like a baby. [機助] ", 38], ['Bad [Metal Bat]', 'One Punch Man', 'Ground ⛰️', 'https://i.ibb.co/2S0NkCH/51459c1fc239.png', 60, 92, 79, 94, 36, 1, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'Phew... been awhile since I showed this much fighting spirit. [vinrylgrave] ', 39], ['Ban', '7 Deadly Sins', 'Dark 🌙', 'https://i.ibb.co/fNR2cvF/b6092780224b.png', 90, 61, 83, 94, 5, 1, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', 'A real sin is something you can never atone for. [The O_Murgan] ', 40], ['Basara Toujou', 'Shinmai Maou No Testament', 'Light ☀️', 'https://i.ibb.co/ThC6V5B/687fc61c88cc.png', 65, 77, 94, 87, 38, 1, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', "If a person is someone you want to live with and protect, then she's already family. [Original art] ", 41], ['Bell Cranel', 'Danmachi', 'Dark 🌙', 'https://i.ibb.co/v4HBH2j/002195ea0310.png', 75, 88, 86, 70, 19, 2, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'If I don’t stand up here… If I don’t reach higher here… When am I ever going to do it? ', 42], ['Bell Hydra', 'Blood Lad', 'Neutral ✨', 'https://i.ibb.co/58w32Sw/a8ec417ae317.png', 84, 89, 66, 82, 40, 1, "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __60__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", '<:TRICK_ROOM:761996115410944013>', "I like to use people, but I can't stand people using me. [Bashikou] ", 43], ['Benedict Blue', 'Violet Evergarden', 'Water 💧', 'https://i.ibb.co/SwWTGTj/4fbf33dd6194.png', 95, 87, 68, 80, 0, 1, '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __10__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __18__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __20__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '<:MIRACLE_INJECTION:853196724315357185>', "She's my sister, she needs me.", 44], ['Benimaru', 'Tensei Shitara Slime Datta Ken', 'Fire 🔥', 'https://i.ibb.co/m04yk9L/792026a6b3a8.png', 75, 86, 71, 90, 46, 1, '**Time Attack**: Deal __5__% of your base ATK as **Fire** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Fire** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Fire** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'I would like to accept the offer you presented last night. We hereby serve under you. ', 45], ['Benimaru Shinmon', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/rpgYK7m/e90480f5facc.png', 73, 87, 76, 91, 55, 3, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', "Ow. You're a hard one, all right.  ", 46], ['Beros', 'Blood Lad', 'Dark 🌙', 'https://i.ibb.co/5GTZJ1R/d97e72113584.png', 84, 86, 80, 76, 40, 2, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "I'm going to smash those glasses of yours! ", 47], ['Bishamonten', 'Noragami', 'Electric ⚡', 'https://i.ibb.co/whZXKBm/641582d8b121.png', 77, 95, 73, 80, 47, 1, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', "You're human, you're allowed to make mistakes! [謖] ", 48], ['Bisky Krueger', 'Hunter X Hunter', 'Light ☀️', 'https://i.ibb.co/1z91PqH/188db518bc30.png', 67, 96, 62, 95, 15, 1, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'There are liars who only lie when there’s a reason to, and there are liars who also lie without a reason. [稚代★レインボー生足ウェーブ] ', 49], ['Black Star', 'Soul Eater', 'Ground ⛰️', 'https://i.ibb.co/2MsY2Lg/2009f31aa381.png', 83, 92, 70, 80, 42, 1, '**Time Attack**: Deal __5__% of your base ATK as **Ground** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Ground** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Ground** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'I’ll never give up. The only time I lose is when I die. [TAiGA] ', 50], ['Blair', 'Soul Eater', 'Dark 🌙', 'https://i.ibb.co/2j9qmpb/157878e4bbb6.png', 102, 69, 68, 84, 42, 2, '**Time Attack**: Deal __5__% of your base max HP as **Dark** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base max HP as **Dark** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base max HP as **Dark** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "I'm just a kitty with strong magic. [Original art] ", 51], ['Botan', 'Yu Yu Hakusho', 'Light ☀️', 'https://i.ibb.co/mXs3GZf/a422a351a072.png', 92, 73, 81, 81, 66, 1, '**Reversion** [PSV]: Once your health drops below __20__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __12__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __36__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __24__% after the reversion.', '<:REVERSION:822684998514901002>', 'Wow what an embarrassing way to die.', 52], ['Braz D Blood', 'Blood Lad', 'Dark 🌙', 'https://i.ibb.co/84Ztwvc/64960f4144d5.png', 70, 92, 87, 75, 40, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'Promises are meant to be kept, are they not?  ', 53], ['Brook', 'One Piece', 'Dark 🌙', 'https://i.ibb.co/vckZ2PK/f55fd9b32db0.png', 78, 94, 72, 79, 10, 1, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "What keeps me alive in this world is neither my bodily organs nor muscles. It's my soul! [vougle] ", 54], ['Byakuya Togami', 'Danganronpa', 'Light ☀️', 'https://i.ibb.co/fSy7cLG/2eb241e6a7a1.png', 89, 70, 91, 75, 54, 2, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', "Don't assume other people think the way you do. [Chi*ko] ", 55], ['C.C.', 'Code Geass', 'Light ☀️', 'https://i.ibb.co/KzwZDQ2/8901efab89eb.png', 95, 67, 93, 70, 43, 1, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'In this world, evil can arise from the best of intentions. And there is good which can come from evil intentions. ', 56], ['Charmy Pappitson', 'Black Clover', 'Dark 🌙', 'https://i.ibb.co/tKjwZKn/6de6dc387858.png', 82, 87, 79, 77, 3, 2, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "I'm going to pound the importance of food on your body! [EDIPTUS] ", 57], ['Chiaki Nanami', 'Danganronpa', 'Electric ⚡', 'https://i.ibb.co/sKfkBYJ/edf9ad48b048.png', 80, 91, 68, 86, 54, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', "I'm Chiaki Nanami, the Ultimate Gamer. Video games are my hobby, and I'm a fan of all genres. ", 58], ['Chika Fujiwara', 'Love Is War', 'Light ☀️', 'https://i.ibb.co/jWmgXh4/5674af9bd651.png', 87, 90, 82, 66, 61, 2, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'I really like it when you laugh, Kaguya. [やとみ] ', 59], ['Child Emperor', 'One Punch Man', 'Neutral ✨', 'https://i.ibb.co/YNzNdLK/dacb593f1f8c.png', 84, 85, 62, 93, 36, 2, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "Is this a joke? That's just silly. [Meka] ", 60], ['Chino Kafuu', 'Gochuumon Wa Usagi Desu Ka', 'Water 💧', 'https://i.ibb.co/bzwpPK1/63e024956d24.png', 80, 95, 81, 70, 41, 1, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "I am not good at talking. I can't just make a small talk out of nowhere... [koi/koisan] ", 61], ['Chisato Hasegawa', 'Shinmai Maou No Testament', 'Neutral ✨', 'https://i.ibb.co/z5tLSN5/3af1b32a40df.png', 98, 92, 64, 70, 38, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'Instead of being in fear of the problems that might arise, think about how you plan to deal with them. That will be how you can protect the things important to you. ', 62], ['Chiya Ujimatsu', 'Gochuumon Wa Usagi Desu Ka', 'Water 💧', 'https://i.ibb.co/SddMSWJ/013f2a55141c.png', 76, 69, 98, 77, 41, 2, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'When I look at Japanese sweets, all kinds of ideas come to me. [Kujou Danbo] ', 63], ['Chlammy Zell', 'No Game No Life', 'Neutral ✨', 'https://i.ibb.co/pfm9tcX/bd8ed83d07bf.png', 81, 81, 81, 81, 48, 1, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'A way for the weak to stay weak, but still defeat the strong. A way to stay who you are but surpass your limits. ', 64], ['Chomusuke', 'Konosuba', 'Dark 🌙', 'https://i.ibb.co/1Zxr0LD/2ee09fd9a8f4.png', 81, 81, 81, 81, 18, 2, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'Nom. ', 65], ['Chrome', 'Dr. Stone', 'Ground ⛰️', 'https://i.ibb.co/pbYymG9/1a372fa4c297.png', 79, 88, 78, 82, 28, 1, '**Elemental Strike**: Deal **Ground** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Ground** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Ground** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'What?!! A machine that flies in the air? [asatohiru33] ', 66], ['Cocoa Hoto', 'Gochuumon Wa Usagi Desu Ka', 'Fire 🔥', 'https://i.ibb.co/qYdnVqs/b49a7ba93595.png', 70, 95, 72, 85, 41, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'If only I had some special skill… [N2A7N4M6I9N] ', 67], ['Colossal Titan', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/xzYz9hR/1f9d8703b58d.png', 95, 95, 95, 50, 9, 3, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', 'Grr.... ', 68], ['Cornelia Britannia', 'Code Geass', 'Neutral ✨', 'https://i.ibb.co/RS7vh1w/ec1c7bd493ad.png', 76, 97, 74, 73, 43, 2, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'I want the enemy of the Empire caught! [Midnight Phoenix] ', 69], ['Cow Girl', 'Goblin Slayer', 'Water 💧', 'https://i.ibb.co/VjsJvjh/e68054408b91.png', 98, 74, 72, 80, 58, 1, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', "Let's take our time thinking about the future, there's no need to rush. [Original art] ", 70], ['Crona', 'Soul Eater', 'Dark 🌙', 'https://i.ibb.co/Bss1665/41eae30be88a.png', 96, 87, 62, 79, 42, 3, '**Time Attack**: Deal __5__% of your base DEF as **Dark** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base DEF as **Dark** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base DEF as **Dark** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'Trusting someone not to hurt you… how idiotic is that? [redrunner613] ', 71], ['Crusch Karsten', 'Re:Zero', 'Neutral ✨', 'https://i.ibb.co/5hT5Jqs/344c5d5e149c.png', 84, 80, 78, 85, 13, 1, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'If our weakest man has not given up, how is kneeling acceptable for us? [Aruyanita] ', 72], ['Dabi', 'My Hero Academia', 'Fire 🔥', 'https://i.ibb.co/LxPcdsZ/0bc434cb9d60.png', 80, 87, 83, 72, 17, 2, '**Amplifier**: Increase the ATK of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "Being insane is what's keeping me alive from my nightmares! ", 73], ['Darkness', 'Konosuba', 'Neutral ✨', 'https://i.ibb.co/tcR7MJR/1b5cdedee3bb.png', 97, 70, 91, 61, 18, 3, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'A knight must never run away, no matter how mighty the enemy. [けむけむ] ', 74], ['Death The Kid', 'Soul Eater', 'Dark 🌙', 'https://i.ibb.co/Gv4nwHQ/9423b500b545.png', 93, 67, 75, 88, 42, 4, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'I’m going to keep fighting until this world is the way it should be. Until the world is balanced. [umi no mizu] ', 75], ['Demiurge', 'Overlord', 'Fire 🔥', 'https://i.ibb.co/P6dBRQQ/2ddc74225b58.png', 86, 75, 88, 80, 22, 3, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', 'The universe itself—and the Mind behind it—is insane. Therefore someone in touch with reality is, by definition, in touch with the insanity! ', 76], ['Denki Kaminari', 'My Hero Academia', 'Electric ⚡', 'https://i.ibb.co/71X0zvB/14a99aa12795.png', 60, 98, 75, 91, 17, 3, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'This is all gonna be over in two seconds, honey! ', 77], ['Diablo', 'Tensei Shitara Slime Datta Ken', 'Dark 🌙', 'https://i.ibb.co/vm1fZSk/b598acd24fe9.png', 85, 60, 77, 100, 46, 2, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'You should cease your trivial arguing. You currently stand before Diablo. ', 78], ['Diane', '7 Deadly Sins', 'Ground ⛰️', 'https://i.ibb.co/mX0mgLQ/130c8fedd80c.png', 81, 81, 83, 81, 5, 2, '**Elemental Strike**: Deal **Ground** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Ground** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Ground** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'You humans are so full of yourselves! ', 79], ['Dio Brando', "Jojo's Bizarre Adventure", 'Electric ⚡', 'https://i.ibb.co/LQ7y8nc/2a37a4eedce4.png', 74, 88, 83, 81, 51, 1, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', 'It was me, Dio! ', 80], ['Doppo Kunikida', 'Bungou Stray Dogs', 'Grass 🍃', 'https://i.ibb.co/ZdDGJmW/cf469ee1c0dc.png', 97, 77, 73, 79, 64, 3, '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __20__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __36__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __40__%, and heal allied familiars equal to 2.5x your max Mana.', '<:CELESTIAL_BLESSING:853196185250299955>', "If you try to save someone you can't save, you'll both end up sinking.", 81], ['Echidna', 'Re:Zero', 'Dark 🌙', 'https://i.ibb.co/nrB5j7w/427626a7de9e.png', 76, 99, 84, 67, 13, 2, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'Powerful people from all around the world have come to me in search of knowledge! [イセ川] ', 82], ['Ed', 'Cowboy Bebop', 'Fire 🔥', 'https://i.ibb.co/PFL9wbQ/8bec10165b83.png', 87, 65, 92, 83, 60, 1, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', 'Vroom Vroom nearrrrrAAh! [Sapphire ART] ', 83], ['Edward Elric', 'Fullmetal Alchemist', 'Electric ⚡', 'https://i.ibb.co/J3B0nBx/cb7b9343022c.png', 84, 75, 101, 63, 20, 2, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "What?! I'm not small! It's the world that's too big! ", 84], ['Elaine', '7 Deadly Sins', 'Grass 🍃', 'https://i.ibb.co/K0mNjgx/127804d10a3b.png', 72, 88, 76, 87, 5, 3, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "I wish what Ban came to steal wasn't the Fountain of Youth... but me... ", 85], ['Elma', "Ms. Kobayashi's Dragon Maid", 'Water 💧', 'https://i.ibb.co/f8crHGf/5aed3d98d512.png', 86, 85, 86, 68, 7, 1, '**Time Attack**: Deal __5__% of your base ATK as **Water** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Water** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Water** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "Hard to believe you'd run to a dump like this. [aka tomato] ", 86], ['Emilia', 'Re:Zero', 'Water 💧', 'https://i.ibb.co/ZKdZ4SH/6a911c57972a.png', 82, 90, 72, 76, 13, 3, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'I have only one wish: for all to be equal. [SWD3E2] ', 87], ['Enel', 'One Piece', 'Electric ⚡', 'https://i.ibb.co/3BqL9cG/534976827018.png', 94, 62, 76, 87, 10, 2, '**Double-edged Strike**: Deal **Electric** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Electric** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Electric** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'There is a god in this world... me. [maruyama3] ', 88], ['Envy', 'Fullmetal Alchemist', 'Dark 🌙', 'https://i.ibb.co/ZJXZ1C6/66b0a91176e7.png', 85, 73, 76, 88, 20, 3, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', "You humans don't make any sense to me. You throw away your lives for nothing. [もぶ] ", 89], ['Eren Yeager', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/8jGzNNV/e5223310d2f8.png', 73, 68, 87, 95, 9, 4, "**Dexterity Drive**: Deal **Ground** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Ground** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Ground** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'What is the point if those with the means and power do not fight? [Official art] ', 90], ['Eri', 'My Hero Academia', 'Light ☀️', 'https://i.ibb.co/1b0NTgc/48a117963205.png', 79, 84, 75, 83, 17, 4, '**Reversion** [PSV]: Once your health drops below __20__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __12__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __36__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __24__% after the reversion.', '<:REVERSION:822684998514901002>', "I'm sorry... how do you smile again? [MikiGas] ", 91], ['Erina Nakiri', 'Shokugeki No Soma', 'Neutral ✨', 'https://i.ibb.co/SvxwPjf/54ef79d02a98.png', 84, 90, 76, 76, 57, 3, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'I understand what you are getting at father. And, as such... I have decided that I must relinquish my position as tenth seat. From now on I am just...just plain old Erina. [Totsugeruru] ', 92], ['Eris', 'Konosuba', 'Light ☀️', 'https://i.ibb.co/RyvwKtC/d7ba6c5b650a.png', 82, 84, 83, 76, 18, 4, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'Aqua-senpai is as unreasonable as ever! ', 93], ['Eruka Frog', 'Soul Eater', 'Light ☀️', 'https://i.ibb.co/4TSkf22/980d059d9441.png', 74, 78, 83, 89, 42, 5, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'I can finally relax now, after coming this far, ribbit. ', 94], ['Erwin Smith', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/RjsyGnX/f6a9f42de8fd.png', 86, 87, 73, 77, 9, 5, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', "It's us who gives meaning to our comrades lives! ", 95], ['Erza Scarlet', 'Fairy Tail', 'Ground ⛰️', 'https://i.ibb.co/xfRKdcs/f0597d364549.png', 78, 95, 80, 76, 27, 1, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'When life changes to be harder, change yourself to be stronger. ', 96], ['Escanor', '7 Deadly Sins', 'Fire 🔥', 'https://i.ibb.co/XLDQ6p6/e2a9eff0b01c.png', 79, 100, 80, 64, 5, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "Pardon me. I feel sick when I'm looked down at by someone smaller than me. ", 97], ['Esdeath', 'Akame Ga Kill!', 'Water 💧', 'https://i.ibb.co/LRqB0b4/088cc86b8c40.png', 70, 97, 62, 90, 24, 2, '**Elemental Strike**: Deal **Water** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'The weak are destined to lie beneath the boots of the strong. If that angers you, overcome your deficits. ', 98], ['Eto Yoshimura', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/4pvMnsh/a68cfe3102c4.png', 95, 80, 78, 73, 6, 2, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "You're looking rather pale... ", 99], ['Eugeo', 'Sword Art Online', 'Water 💧', 'https://i.ibb.co/Ptd80Lh/78347e23d19b.png', 73, 89, 76, 84, 12, 4, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', "Love isn't something you seek. It's something you give. ", 100], ['Fafnir', "Ms. Kobayashi's Dragon Maid", 'Dark 🌙', 'https://i.ibb.co/ZVzc8xq/0a8611478d3c.png', 89, 83, 74, 79, 7, 2, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'This curse has consumed me, and so I shall consume you! [ice] ', 101], ['Fairy King Harlequin', '7 Deadly Sins', 'Grass 🍃', 'https://i.ibb.co/v1cMPGc/31af07190a36.png', 91, 92, 63, 73, 5, 5, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', "No matter how much power you have, there's a limit to everything. ! [りんごレンジ] ", 102], ['Faye Valentine', 'Cowboy Bebop', 'Light ☀️', 'https://i.ibb.co/txqJsFr/312ca6469523.png', 85, 91, 74, 77, 60, 2, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Men are such idiots... [TORANKI_MJ] ', 103], ['Feitan Portor', 'Hunter X Hunter', 'Fire 🔥', 'https://i.ibb.co/zFhnMFY/83cfb651e17c.png', 75, 80, 86, 82, 15, 2, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'If I want something, I take it. [ADONISZAP] ', 104], ['Felix Argyle', 'Re:Zero', 'Neutral ✨', 'https://i.ibb.co/WyFJk4K/1f553f8d520b.png', 102, 73, 77, 68, 13, 4, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'Ah, nyow I see... Of course. ', 105], ['Ferid Bathory', 'Owari No Seraph', 'Dark 🌙', 'https://i.ibb.co/Jrp8m1J/e89e49d334cc.png', 70, 92, 86, 70, 39, 1, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', 'You had better not underestimate humans. They’re greedy, cunning, and tenacious. [Dessa-nya] ', 106], ['Fiel Nirvalen (Fii)', 'No Game No Life', 'Light ☀️', 'https://i.ibb.co/8Bq4Yw7/91d64f5a82e8.png', 73, 86, 86, 79, 48, 2, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', "I want you there by my side always so I don't make a foolish mistake and lose the person I care about. ", 107], ['Filo', 'The Rising Of The Shield Hero', 'Light ☀️', 'https://i.ibb.co/xsj40PD/bef7ceba5921.png', 85, 76, 83, 79, 4, 1, '**Amplifier**: Increase the ATK of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "Yeah! I'll do my best! ", 108], ['Fitoria', 'The Rising Of The Shield Hero', 'Light ☀️', 'https://i.ibb.co/HP4nrNZ/084dff753ca9.png', 90, 82, 76, 77, 4, 2, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "If you don't tell them they're wrong. You're basically admitting your guilt! [Narucchii] ", 109], ['Fran', 'Katekyo Hitman Reborn', 'Grass 🍃', 'https://i.ibb.co/mRJ4Qd4/6172eddefdaf.png', 76, 62, 98, 84, 30, 1, '**Double-edged Strike**: Deal **Grass** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Grass** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Grass** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'Don’t you ever spare a thought for the environmental crisis?” ', 110], ['Franken Stein', 'Soul Eater', 'Dark 🌙', 'https://i.ibb.co/djH8mM7/60384e119847.png', 93, 81, 85, 67, 42, 6, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'There is no inherent right or wrong in this world, those labels are just artificial constructs. Right and wrong are held by positions of authority. [luebke28] ', 111], ['Freya', 'Danmachi', 'Grass 🍃', 'https://i.ibb.co/tm8T0kN/0f95a2e9aeac.png', 75, 79, 84, 83, 19, 3, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Will you give me sweet dreams tonight? ', 112], ['Fumikage Tokoyami', 'My Hero Academia', 'Dark 🌙', 'https://i.ibb.co/YbQm3dW/5d59f7a8adf5.png', 86, 71, 67, 95, 17, 5, "**Dexterity Drive**: Deal **Dark** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'Rather than feeling regretful right now, you should use this next match as a source of encouragement. ', 113], ['Fuutarou Uesugi', 'The Quintessential Quintuplets', 'Neutral ✨', 'https://i.imgur.com/cLVtv3u.png', 80, 80, 80, 80, 63, 1, '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __20__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __36__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __40__%, and heal allied familiars equal to 2.5x your max Mana.', '<:CELESTIAL_BLESSING:853196185250299955>', "Studying is a student's duty!", 114], ['Fuyumi Yanagi', 'Blood Lad', 'Water 💧', 'https://i.ibb.co/B37pnKG/fb72ae7ab8ea.png', 79, 88, 84, 75, 40, 4, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', "That's enough! You two friends are fighting one another... this is nothing but a nasty fight! ", 115], ['Gaara', 'Naruto', 'Ground ⛰️', 'https://i.ibb.co/yR7ZGLV/03e6e4ac13af.png', 78, 80, 92, 75, 16, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', "If love is just a word, then why does it hurt so much if you realize it isn't there? [Matsunaka Hiro] ", 116], ['Gajeel Redfox', 'Fairy Tail', 'Ground ⛰️', 'https://i.ibb.co/4VmRLxV/8ab55bb37fe1.png', 80, 89, 80, 75, 27, 2, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', '[N/A] ', 117], ['Garou', 'One Punch Man', 'Neutral ✨', 'https://i.ibb.co/kGthFpc/62ae51b25329.png', 70, 82, 91, 80, 36, 3, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', 'This world is unfair. Justice and evil are decided by others. That’s how the world is. [k9k992] ', 118], ['Gen Asagiri', 'Dr. Stone', 'Neutral ✨', 'https://i.ibb.co/S64Btxx/a8305b171241.png', 96, 60, 84, 82, 28, 2, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', "I've always been fond of you, Senku, aside from personal gains. [N/A] ", 119], ['Genos', 'One Punch Man', 'Fire 🔥', 'https://i.ibb.co/FxnWJhv/277429c416d3.png', 83, 90, 76, 72, 36, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'Even the most powerful weapon would be meaningless if the wearer was weak. ', 120], ['Genryusai Shigekuni Yamamoto', 'Bleach', 'Fire 🔥', 'https://i.ibb.co/mR9Fdyp/5bb080fa6b75.png', 97, 74, 84, 66, 11, 1, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "Even if I'm down to 1 arm, my powers won't drop. ", 121], ['Ghost', 'Halloween Event', 'Dark 🌙', 'https://i.ibb.co/NtVWz2M/884590ae256e.png', 75, 75, 75, 75, 0, 1, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'Boo! A spooky ghost. Looks like it can be merged for a stronger card. ', 122], ['Gilbert Bougainvillea', 'Violet Evergarden', 'Neutral ✨', 'https://i.ibb.co/ggw5WJN/6c467dfa066c.png', 81, 96, 81, 70, 0, 2, '**Double-edged Strike**: Deal **Electric** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Electric** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Electric** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'I think it takes quite a bit of courage to actually live freely. It takes effort and courage to take the risks that others will laugh at you, or put you down for taking action on the things you want.', 123], ['Gilgamesh', 'Fate', 'Fire 🔥', 'https://i.ibb.co/ccqD6r9/5fae6dfa3617.png', 84, 86, 85, 70, 2, 2, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'Do exactly what you like. That is the true meaning of pleasure. ', 124], ['Gilthunder', '7 Deadly Sins', 'Electric ⚡', 'https://i.ibb.co/fC5grbG/45ec78539a5b.png', 80, 82, 73, 88, 5, 6, '**Elemental Strike**: Deal **Electric** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Electric** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Electric** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "Being released from my bound, I'm feeling really bright. I only have business with the Sins. ", 125], ['Gin', 'Hotarubi No Mori E', 'Grass 🍃', 'https://i.ibb.co/xHS4NcD/e1a1d476f10e.png', 95, 84, 78, 78, 0, 1, "**Soul Stealer** [PSV]: Absorb __4__% of the enemy familiars' DEF every turn.", "**Soul Stealer** [PSV]: Absorb __7__% of the enemy familiars' DEF every turn.", "**Soul Stealer** [PSV]: Absorb __8__% of the enemy familiars' DEF every turn.", '<:SOUL_STEALER:824278124057067531>', "Sorry, you're a human child right? If a human touches me, I'll disappear. [AjaSketch] ", 126], ['Gintoki Sakata', 'Gintama', 'Electric ⚡', 'https://i.ibb.co/Pc05HRX/a2ff52db30c1.png', 83, 80, 87, 74, 52, 1, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', 'Everyone has their flaws and imperfections, but that’s what drives us to work together… To make up for those flaws. ', 127], ['Giorno Giovanna', "Jojo's Bizarre Adventure", 'Grass 🍃', 'https://i.ibb.co/Qkk3PtJ/8d76e52c3261.png', 84, 84, 78, 78, 51, 2, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', 'A man can learn more from defeat than success or victory. ', 128], ['Giyu Tomioka', 'Kimetsu No Yaiba', 'Water 💧', 'https://i.ibb.co/TbySdR4/4cfe8ff57d2a.png', 76, 80, 81, 93, 23, 1, '**Double-edged Strike**: Deal **Water** damage equal to __15__% of your SPD, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __27__% of your SPD, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __30__% of your SPD, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'Their only fate is to be relentlessly crushed by the strong. ', 129], ['Goblin Slayer', 'Goblin Slayer', 'Ground ⛰️', 'https://i.ibb.co/DQz2PZz/c2d019ab72d1.png', 90, 95, 77, 63, 58, 2, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', "Of course I am. They hold on to grudges for life. And the survivors of the nest learn from their mistakes and adapt. There isn't a single reason to let them live. ", 130], ['Gon Freecss', 'Hunter X Hunter', 'Light ☀️', 'https://i.ibb.co/Z6GgMGx/46ebc9a72495.png', 80, 86, 80, 77, 15, 3, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'If you’re willing to do whatever it takes, I won’t hold back. ', 131], ['Goro (056)', 'Darling In The Franxx', 'Ground ⛰️', 'https://i.ibb.co/ZGmR5vc/4dfb761784c1.png', 84, 75, 92, 76, 32, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'No one can swim in the same river water twice. ', 132], ['Gowther', '7 Deadly Sins', 'Water 💧', 'https://i.ibb.co/zfK0tNq/8d5263e75dab.png', 89, 63, 82, 83, 5, 7, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'What I desire is a heart… A heart that understands emotions. ', 133], ['Gray Fullbuster', 'Fairy Tail', 'Water 💧', 'https://i.ibb.co/4YhCxS3/8c7ac3fd6e1e.png', 81, 83, 80, 79, 27, 3, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', "It's not the goodbyes that hurt, its the flashback that follows. ", 134], ['Greed', 'Fullmetal Alchemist', 'Neutral ✨', 'https://i.ibb.co/xjrry6x/0b3fbae9cef9.png', 84, 73, 95, 72, 20, 4, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "Everyone just wants something they don't have. ", 135], ['Grimmjow Jeagerjaques', 'Bleach', 'Dark 🌙', 'https://i.ibb.co/jh952c3/bc89e03d1293.png', 67, 94, 68, 95, 11, 2, "**Dexterity Drive**: Deal **Dark** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "They're all cowards, every damn one of them. Whatever. I'll just consume them. As they become my flesh and blood, they will see beyond. ", 136], ['Guild Girl', 'Goblin Slayer', 'Ground ⛰️', 'https://i.ibb.co/rstxYNQ/7b536e2b6677.png', 85, 70, 95, 74, 58, 3, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'Promises must be kept, right? ', 137], ['Guren Ichinose', 'Owari No Seraph', 'Neutral ✨', 'https://i.ibb.co/1sKg0SF/73b279be3a7d.png', 63, 85, 95, 80, 39, 2, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'I’m not a fan of complicating things, so let’s give this a try. Those of you who die, blame yourselves for not training hard enough! ', 138], ['Happy', 'Fairy Tail', 'Water 💧', 'https://i.ibb.co/GkjpWJh/502283159e61.png', 84, 83, 71, 90, 27, 4, "**Dexterity Drive**: Deal **Water** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Water** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Water** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'Aye!', 139], ['Haruka Tenou (Sailor Uranus)', 'Sailor Moon', 'Grass 🍃', 'https://i.ibb.co/YLLNBfp/df7f236b8e4e.png', 90, 82, 60, 92, 37, 2, '**Elemental Strike**: Deal **Grass** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "You're so unfair Michiru...To leave into your own world...Don't leave me alone... ", 140], ['Hatsune Miku', 'Vocaloid', 'Water 💧', 'https://i.ibb.co/PGfRZwk/b07656817511.png', 85, 78, 83, 83, 0, 1, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "If you don't understand my silence, how will you understand my words?", 141], ['Hayato Gokudera', 'Katekyo Hitman Reborn', 'Fire 🔥', 'https://i.ibb.co/cLSspBq/9731aa1fd997.png', 84, 86, 68, 84, 30, 2, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "My dream is to be the tenth's right hand man! ", 142], ['Hei', 'Darker Than Black', 'Dark 🌙', 'https://i.ibb.co/B2kQZcM/238dae07d758.png', 80, 85, 80, 81, 8, 2, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'If you pretend to feel a certain way, the feeling can become genuine all by accident. ', 143], ['Hestia', 'Danmachi', 'Light ☀️', 'https://i.ibb.co/tmPVQgb/fcd963a9563a.png', 85, 73, 83, 87, 19, 4, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', 'In the end, guilt is just the question of whether you can forgive yourself or not. ', 144], ['Hibana', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/10kwp4B/d9592bf9774b.png', 76, 90, 83, 77, 55, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'In this world, you either burn or get burned. Go ahead and pray to the God of salvation you favour so much. ', 145], ['Hideyoshi Nagachika', 'Tokyo Ghoul', 'Electric ⚡', 'https://i.ibb.co/SK2V6gY/daa0a2920ad9.png', 83, 92, 67, 84, 6, 3, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'I guess a lot of things can happen if you keep living. ', 146], ['Hiei', 'Yu Yu Hakusho', 'Dark 🌙', 'https://i.ibb.co/GJCMWL6/5400225fe598.png', 93, 86, 82, 58, 66, 2, '**Reversion** [PSV]: Once your health drops below __20__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __12__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __36__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __24__% after the reversion.', '<:REVERSION:822684998514901002>', 'Being lucky seems to be your greatest tactic.', 147], ['High Elf Archer', 'Goblin Slayer', 'Grass 🍃', 'https://i.ibb.co/L6DYQrZ/1f35870472d8.png', 81, 75, 88, 82, 58, 4, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "I hate taking advice from dwarves, but you're right. ", 148], ['Hijikata Toushirou', 'Gintama', 'Fire 🔥', 'https://i.ibb.co/DzQT97n/2977348ed190.png', 74, 86, 90, 76, 52, 2, '**Double-edged Strike**: Deal **Fire** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'There is no need for any proof. There is no need to create any. We just have to live every second to the fullest, and the traces of the path we lived will burn into the ground. ', 149], ['Himiko Toga', 'My Hero Academia', 'Dark 🌙', 'https://i.ibb.co/VNbZZCv/f79b0d0befdc.png', 79, 85, 86, 79, 17, 6, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', "I'm Toga! Himiko Toga! ", 150], ['Hinami Fueguchi', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/QpK1myF/f4e53acf9ee7.png', 74, 88, 81, 77, 6, 4, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', "I can't do anything, but I can keep someone company. ", 151], ['Hinata Hyuga', 'Naruto', 'Neutral ✨', 'https://i.ibb.co/3h3sNjs/b044c19cfb61.png', 85, 75, 94, 69, 16, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'I will never go back on my word, because that too is my ninja way! ', 152], ['Hiro (016)', 'Darling In The Franxx', 'Neutral ✨', 'https://i.ibb.co/4JGzXrk/2f30bbec50b5.png', 89, 96, 60, 77, 32, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'It’s only because I met you, that I can stand here right now. ', 153], ['Hisako Arato', 'Shokugeki No Soma', 'Neutral ✨', 'https://i.ibb.co/8j5bm6g/d958cf3e8cb4.png', 69, 83, 85, 90, 57, 4, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', "If there's something you want to go through with, you should stick to it without keeping up appearances. ", 154], ['Hisoka Morrow', 'Hunter X Hunter', 'Dark 🌙', 'https://i.ibb.co/Nn1hd71/05a672145663.png', 83, 72, 90, 75, 15, 4, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'Love and hate are two sides of the same coin. ', 155], ['Historia Reiss', 'Attack On Titan', 'Light ☀️', 'https://i.ibb.co/s21mt6T/0f654c88eb19.png', 83, 77, 95, 73, 9, 6, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', 'I am Historia Reiss, the true ruler of these Walls. ', 156], ['Hiyori Iki', 'Noragami', 'Water 💧', 'https://i.ibb.co/fYP13Yf/028dac0cab8d.png', 72, 80, 93, 81, 47, 2, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'The gap between the rich and the poor exists even amongst the gods. ', 157], ['Hotaru Takegawa', 'Hotarubi No Mori E', 'Water 💧', 'https://i.ibb.co/tps8b92/3acd94ec73ad.png', 83, 89, 66, 91, 0, 2, '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Start off the battle buffing your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', "Gin, don't forget about me. Don't forget. [Haruyama Kazunori] ", 158], ['Houka Inumuta', 'Kill La Kill', 'Water 💧', 'https://i.ibb.co/YcDj15z/ace516b72b81.png', 90, 86, 75, 74, 45, 1, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'If anything happens to my laptop, you die. ', 159], ['Ichigo (015)', 'Darling In The Franxx', 'Water 💧', 'https://i.ibb.co/ctt13jf/26ec7b296e96.png', 81, 65, 90, 83, 32, 3, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "We're all complicated, difficult, and a pain. ", 160], ['Ichigo Kurosaki', 'Bleach', 'Dark 🌙', 'https://i.ibb.co/FKt6qhG/e636b3c45681.png', 89, 102, 64, 66, 11, 3, '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', "Don't break anyone's heart, they only have one. Break their bones, they have 206. ", 161], ['Ichika Nakano', 'The Quintessential Quintuplets', 'Electric ⚡', 'https://i.imgur.com/ZLQnWvj.png', 76, 80, 95, 76, 63, 2, '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __10__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __18__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __20__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '<:MIRACLE_INJECTION:853196724315357185>', "I'm really glad to have you be my teacher. I'm also very happy to be your student.", 162], ['Ikumi Mito', 'Shokugeki No Soma', 'Ground ⛰️', 'https://i.ibb.co/gysX7N2/43005d151184.png', 76, 92, 80, 80, 57, 5, "**Life Sap** [PSV]: Every round, deal __2__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __3__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __4__% of the enemy familiars' max HP as damage, and heal for the same amount.", '<:LIFE_SAP:822731181526876161>', "Don't call me Nikumi! ", 163], ['Illyasviel Von Einzbern', 'Fate', 'Water 💧', 'https://i.ibb.co/FVrN5vW/a3dcf95f3581.png', 84, 85, 78, 76, 2, 3, '**Elemental Strike**: Deal **Water** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Did I get bigger…? I-I’m talking about my height! ', 164], ['Inosuke Hashibira', 'Kimetsu No Yaiba', 'Dark 🌙', 'https://i.ibb.co/ZgZ3G8s/ca35ec285abc.png', 90, 88, 81, 62, 23, 2, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "It's not about going first, it's about the overall flow. ", 165], ['Inuyasha', 'Inuyasha', 'Dark 🌙', 'https://i.ibb.co/r3THf3R/1da871e27aed.png', 84, 81, 68, 92, 25, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'You got two legs and a heart beat. What’s stopping you? ', 166], ['Ira Gamagori', 'Kill La Kill', 'Ground ⛰️', 'https://i.ibb.co/dp2ypZS/2fd11f181797.png', 98, 80, 68, 79, 45, 2, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'I am Lady Satsuki’s impenetrable shield! ', 167], ['Irina Jelavic', 'Assassination Classroom', 'Neutral ✨', 'https://i.ibb.co/GnjGBNG/0379bf543581.png', 84, 76, 85, 80, 50, 1, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', 'Feelings are difficult to kill, but a lot harder to resurrect. ', 168], ['Iris', 'Fire Force', 'Neutral ✨', 'https://i.ibb.co/xHLmr2G/f3b1f0a241fd.png', 88, 70, 96, 72, 55, 5, "**Life Sap** [PSV]: Every round, deal __2__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __3__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __4__% of the enemy familiars' max HP as damage, and heal for the same amount.", '<:LIFE_SAP:822731181526876161>', 'If you pray with all your heart, you can find comfort, and people have been saved by it. ', 169], ['Issei Hyoudou', 'High School DxD', 'Dark 🌙', 'https://i.ibb.co/HPBvPW8/1b70a2ff6b99.png', 82, 86, 70, 86, 26, 3, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'I’m fine with being a fool. If there’s no way I can win with my abilities, then I’ll stick with being a fool to the end! ', 170], ['Itachi Uchiha', 'Naruto', 'Dark 🌙', 'https://i.ibb.co/d6xJxhV/4d59729bf301.png', 82, 101, 70, 72, 16, 3, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'Even the strongest of opponents always has a weakness. ', 171], ['Itaru Hashida', 'Steins Gate', 'Ground ⛰️', 'https://i.ibb.co/sVvtkrc/4221f5feee2a.png', 90, 90, 97, 75, 1, 1, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', 'There are two types of lies: Lies that hurt, and lies that don’t hurt. ', 172], ['Itona Horibe', 'Assassination Classroom', 'Electric ⚡', 'https://i.ibb.co/RpWTPrQ/626198baabfd.png', 78, 83, 80, 86, 50, 2, "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __3__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __30__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __6__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __60__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", '<:ULTIMATE_COMBO:822684576786546690>', "I might fail a hundred times, but I'll be sure to kill him before it's all said and done. You've got my back, right guys? ", 173], ['Itsuki Kawasumi', 'The Rising Of The Shield Hero', 'Grass 🍃', 'https://i.ibb.co/YDcDJmY/a2f3f3faf293.png', 80, 82, 80, 85, 4, 3, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'Someone needs to be taught that with great power comes great responsibility. ', 174], ['Itsuki Nakano', 'The Quintessential Quintuplets', 'Fire 🔥', 'https://i.imgur.com/niWKUw3.png', 76, 76, 76, 95, 63, 3, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "In the end, we can't know what he feels, what he thinks, unless we ask him personally...", 175], ['Izuku Midoriya (Deku)', 'My Hero Academia', 'Grass 🍃', 'https://i.ibb.co/qdMqjjp/53a9c84a1cea.png', 78, 93, 66, 84, 17, 7, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', "If I match my pace with everyone else, I'll never be number one. ", 176], ['Izumi Kyoka', 'Bungou Stray Dogs', 'Water 💧', 'https://i.ibb.co/1rWG8VN/c2ad4504c493.png', 85, 80, 82, 80, 64, 4, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', 'I saw a bright world. I cannot go back to a time when I did not know such a thing existed.', 177], ['Izumo Kamiki', 'Ao No Exorcist', 'Dark 🌙', 'https://i.ibb.co/jb8sLg2/1a86e836d2d7.png', 93, 75, 82, 76, 44, 1, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'I was always alone. What the hell am I fighting for? ', 178], ['Izuna Hatsuse', 'No Game No Life', 'Fire 🔥', 'https://i.ibb.co/CmGP3FV/aab51dc2add3.png', 90, 83, 84, 66, 48, 3, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "That's impossible... desu... So many people are going to suffer because I lost... desu ", 179], ['Jack Frost', 'Christmas Afterparty 2020', 'Water 💧', 'https://i.ibb.co/CbXbmQv/fc9ab061af4e.png', 82, 110, 70, 73, 0, 1, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'How can I know who I am, until I find out who I was? ', 180], ['Jellal Fernandes', 'Fairy Tail', 'Dark 🌙', 'https://i.ibb.co/NSpt6hF/1e480b654cc7.png', 69, 94, 98, 64, 27, 5, '**Elemental Strike**: Deal **Light** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'The loneliest people are the kindest. ', 181], ['Jet Black', 'Cowboy Bebop', 'Ground ⛰️', 'https://i.ibb.co/Tc89Vcn/c50535ea5c3b.png', 85, 90, 86, 100, 60, 3, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don't desire, but they're inevitable, we have to face them. ", 182], ['Jibril', 'No Game No Life', 'Light ☀️', 'https://i.ibb.co/cLDJhD0/f692851ade18.png', 81, 88, 75, 80, 48, 4, '**Elemental Strike**: Deal **Light** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "Oh yes...where are my manners, my name is Jibril. Pleased to make your acquaintance. But I'm afraid it's time for us to say goodbye. ", 183], ['Jiraiya', 'Naruto', 'Ground ⛰️', 'https://i.ibb.co/dgcjhmM/be78ce24978a.png', 91, 83, 85, 65, 16, 4, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'A place where someone still thinks about you is a place you can call home. ', 184], ['Jonathan Joestar', "Jojo's Bizarre Adventure", 'Water 💧', 'https://i.ibb.co/yNbJ5BQ/4ac7dabe918e.png', 84, 90, 74, 77, 51, 3, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', 'I’m fighting to protect my family from those that wish it harm, I doubt very much that your resolve is equal to mine. ', 185], ['Joseph Joestar', "Jojo's Bizarre Adventure", 'Light ☀️', 'https://i.ibb.co/pPBWYfM/a0320b0a5c69.png', 96, 88, 72, 70, 51, 4, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Well, my arms are folded and my eyes are closed, this is a victory laugh. ', 186], ['Josuke Higashikata', "Jojo's Bizarre Adventure", 'Ground ⛰️', 'https://i.ibb.co/0F32WtS/a74712e1b2c7.png', 92, 68, 88, 75, 51, 5, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "Oi! Don't talk negatively about yourself like that! ", 187], ['Jotaro Kujo', "Jojo's Bizarre Adventure", 'Neutral ✨', 'https://i.ibb.co/rfdt48k/94a6ab0140af.png', 80, 90, 80, 75, 51, 6, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'You truly are the lowest scum in history. You can’t pay back what you owe with money. ', 188], ['Judar', 'Magi', 'Dark 🌙', 'https://i.ibb.co/RjScTrF/15137e76db9a.png', 65, 78, 91, 86, 34, 3, '**Double-edged Strike**: Deal **Dark** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Dark** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Dark** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'I thought it would be incredibly fun to conquer the world with you! ', 189], ['July', 'Darker Than Black', 'Neutral ✨', 'https://i.ibb.co/d7cCDfy/886a1f1b2cf9.png', 78, 75, 97, 70, 8, 3, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', '10 more centimetres to the right. ', 190], ['Junko Enoshima', 'Danganronpa', 'Electric ⚡', 'https://i.ibb.co/NrKVhdX/9ee6c4a0b288.png', 78, 72, 90, 87, 54, 4, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'Despair is contagious. Everyone catches it. ', 191], ['Juvia Lockser', 'Fairy Tail', 'Water 💧', 'https://i.ibb.co/prCFyC4/7d4ac9997f7c.png', 75, 97, 80, 71, 27, 6, '**Elemental Strike**: Deal **Water** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'You can give without loving, but you cannot live without giving. ', 192], ['Kaede Kayano', 'Assassination Classroom', 'Grass 🍃', 'https://i.ibb.co/M23WwGx/64637fd90d2d.png', 74, 87, 81, 84, 50, 3, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "Once I decided something, I move straight towards it, that's how I am. ", 193], ['Kagome Higurashi', 'Inuyasha', 'Grass 🍃', 'https://i.ibb.co/KFhcHnK/8fa9c77adbc6.png', 75, 91, 91, 64, 25, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'How could I forget? He’s into dead girls. ', 194], ['Kagura', 'Gintama', 'Ground ⛰️', 'https://i.ibb.co/8mTTmGn/a34cd49903d1.png', 84, 87, 78, 77, 52, 3, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', 'I choose my own battlefields. Not by my blood, but by my heart! I stand on the battlefield to protect what’s important to me. ', 195], ['Kaguya Shinomiya', 'Love Is War', 'Dark 🌙', 'https://i.ibb.co/NjbQ3rp/c9e4cb886c61.png', 84, 77, 88, 76, 61, 3, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "If it's true love, I'm prepared to even accept expulsion. ", 196], ['Kakashi Hatake', 'Naruto', 'Electric ⚡', 'https://i.ibb.co/Ycr0KDq/f54ed5d57ae5.png', 67, 97, 74, 81, 16, 5, '**Elemental Strike**: Deal **Electric** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Electric** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Electric** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "In the ninja world, those who break the rules are scum, that's true, but those who abandon their friends are worse than scum. ", 197], ['Kakine Teitoku', 'A Certain Scientific Railgun', 'Light ☀️', 'https://i.ibb.co/VvQFLG5/9a13849e25ae.png', 70, 86, 86, 84, 33, 2, '**Elemental Strike**: Deal **Dark** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "Are you making fun of me? Because it sounds like to me you'd make a nice corpse. ", 198], ['Kallen Kozuki', 'Code Geass', 'Ground ⛰️', 'https://i.ibb.co/Mp9xYGY/ca88e07d9a7b.png', 73, 69, 96, 87, 43, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'If destiny truly does exist, then why are we born in the first place? ', 199], ['Kamijou Touma', 'A Certain Scientific Railgun', 'Light ☀️', 'https://i.ibb.co/090Gyzm/edc70191f615.png', 84, 89, 71, 77, 33, 3, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'If I come into contact with an Esper ability with this right hand, be it a railgun or a lightning attack, even a miracle of God can be dispelled. ', 200], ['Kanade Tachibana', 'Angel Beats', 'Light ☀️', 'https://i.ibb.co/B6y5Z8m/a76632d0afa2.png', 70, 89, 75, 87, 14, 2, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'Please let me believe in everything you believed in. Let me believe that life is great. ', 201], ['Kanao Tsuyuri', 'Kimetsu No Yaiba', 'Neutral ✨', 'https://i.ibb.co/DV5PhgC/80ecb27ea746.png', 69, 81, 96, 77, 23, 3, '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', 'Because it came up tails, I spoke to you. ', 202], ['Kaneki Ken', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/ChqTwJS/5d85e0d8cff5.png', 73, 99, 75, 80, 6, 5, '**Amplifier**: Increase the ATK of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'Never trust anyone too much. ', 203], ['Kanna Kamui', "Ms. Kobayashi's Dragon Maid", 'Electric ⚡', 'https://i.ibb.co/zrGJN99/e7728db8b171.png', 93, 75, 89, 73, 7, 3, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "I know that you've seduced her. With your body! ", 204], ['Karasuma Tadaomi', 'Assassination Classroom', 'Ground ⛰️', 'https://i.ibb.co/CMsxkrC/d8016c0767b3.png', 87, 84, 75, 82, 50, 4, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'If something is possible, carry on as planned. Even if it isn’t possible, do it anyway. ', 205], ['Karma Akabane', 'Assassination Classroom', 'Fire 🔥', 'https://i.ibb.co/QFTqBbL/d7f009c30731.png', 73, 96, 72, 86, 50, 5, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'People with talent often have the wrong impression that things will go as they think. ', 206], ['Katsuki Bakugo', 'My Hero Academia', 'Fire 🔥', 'https://i.ibb.co/k24cQH9/8f2dbbb3bbf9.png', 85, 94, 63, 82, 17, 8, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', 'Stop talking, I will win. That’s… what heroes do. ', 207], ['Katsura Kotarou', 'Gintama', 'Grass 🍃', 'https://i.ibb.co/HBm6crP/7709e6d2dca5.png', 83, 98, 76, 67, 52, 4, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their DEF.', '<:VENGEANCE:761979331471736842>', 'Change is never easy in this world. I can’t even change one friend, let alone a whole country. ', 208], ['Kazuma', 'Noragami', 'Grass 🍃', 'https://i.ibb.co/bKPnLBR/1b54fd66833c.png', 83, 80, 73, 90, 47, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', "People don't always wish for good things. There are evil wishes, too. ", 209], ['Kazuma Kuwabara', 'Yu Yu Hakusho', 'Ground ⛰️', 'https://i.ibb.co/PrqzbS0/badfdec48f57.png', 91, 73, 77, 86, 66, 3, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', "Bite my ankles shorty, I swear I'll make you cry to your mom! If you have a mom, that is. ", 210], ['Kazuma Satou', 'Konosuba', 'Neutral ✨', 'https://i.ibb.co/cwdf4wm/a4c4a072ba36.png', 75, 84, 100, 64, 18, 5, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', "This isn't how I imagined life in a parallel world would be. ", 211], ['Keigo Takami (Hawks)', 'My Hero Academia', 'Grass 🍃', 'https://i.ibb.co/S0bJ7XD/c93993230895.png', 68, 97, 65, 95, 17, 9, '**Double-edged Strike**: Deal **Grass** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Grass** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Grass** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', "I have to keep up appearances on my end. I can't afford to lose the faith that's been placed on me as a hero. ", 212], ['Kei Shirogane', 'Love Is War', 'Water 💧', 'https://i.ibb.co/yyJPvQW/8e69098cc077.png', 88, 76, 75, 93, 61, 4, "**Dexterity Drive**: Deal **Light** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Light** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Light** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "In reality, she wants to speak to you normally, but she's too embarrassed to do so. It happens all the time. [hitsuKuya] ", 213], ['Kei Tsukishima', 'Haikyuu!!', 'Dark 🌙', 'https://i.ibb.co/YyXjZGc/fe8618324a0d.png', 78, 78, 93, 76, 53, 1, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', 'Useless hot-blooded people irritate me. ', 214], ['Kenji Miyazawa', 'Bungou Stray Dogs', 'Ground ⛰️', 'https://i.ibb.co/dM6wp3b/6c34661c0f71.png', 78, 80, 66, 100, 64, 5, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'Be not defeated by the rain. Be not defeated by the wind.', 215], ['Kenma Kozume', 'Haikyuu!!', 'Water 💧', 'https://i.ibb.co/p2z0Xz7/884bdaf3eba4.png', 90, 87, 68, 81, 53, 2, "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __60__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'I’m not good with people, I don’t want to interact with them. ', 216], ['Kenpachi Zaraki', 'Bleach', 'Electric ⚡', 'https://i.ibb.co/mynNN7S/d562f32b414c.png', 97, 91, 65, 71, 11, 4, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Death and pain are just a small price to pay for the enjoyment of battle! ', 217], ['Kento Nanami', 'Jujutsu Kaisen', 'Ground ⛰️', 'https://i.ibb.co/jvXZqB7/7456979b0985.png', 69, 92, 84, 80, 65, 1, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', "You've got it from here.", 218], ['Kid Buu', 'Dragon Ball', 'Dark 🌙', 'https://i.ibb.co/kSQ5NjX/419e82fa008d.png', 80, 83, 81, 78, 29, 2, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'You say bad things about Buu? ', 219], ['Kikyo', 'Inuyasha', 'Light ☀️', 'https://i.ibb.co/w72cBLX/6ea301ba3f79.png', 80, 85, 74, 80, 25, 3, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Once the thread of fate is tangled, it cannot be undone. ', 220], ['Killua Zoldyck', 'Hunter X Hunter', 'Electric ⚡', 'https://i.ibb.co/z54pXL5/9c487298d7cd.png', 87, 88, 67, 84, 15, 5, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', "People find me interesting, because they can't tell whether I'm serious or not. ", 221], ['Kirari Momobami', 'Kakegurui', 'Light ☀️', 'https://i.ibb.co/7pj5mfr/06710cea5030.png', 85, 84, 76, 82, 62, 1, "**Life Sap** [PSV]: Every round, deal __2__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __3__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __4__% of the enemy familiars' max HP as damage, and heal for the same amount.", '<:LIFE_SAP:822731181526876161>', "They say humans are irrational creatures, but coming this far without a reason is rare. Gambling doesn't get them anything, we only lose something. But even so, we still gamble. We do that because we enjoy the risk. ", 222], ['Kirito', 'Sword Art Online', 'Dark 🌙', 'https://i.ibb.co/DtK1TmP/7c5e4b99bb88.png', 82, 90, 73, 85, 12, 5, '**Elemental Strike**: Deal **Dark** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Real pain is the result of losing someone you care about. ', 223], ['Kiritsugu Emiya', 'Fate', 'Dark 🌙', 'https://i.ibb.co/4t3tjk3/60d7695a3980.png', 70, 85, 77, 90, 2, 4, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Righteousness cannot save the world. ', 224], ['Kishou Arima', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/p4v4VTM/45779c62c2d9.png', 76, 78, 79, 94, 6, 6, "**Dexterity Drive**: Deal **Dark** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "Some good people make bad choices. It doesn't mean they are bad people. It means they're human. ", 225], ['Kisuke Urahara', 'Bleach', 'Dark 🌙', 'https://i.ibb.co/dbfbYNB/1ec152d7e76b.png', 90, 72, 84, 85, 11, 5, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'A warrior who has lost his ability to fight is only going to be in the way. ', 226], ['Klein', 'Sword Art Online', 'Fire 🔥', 'https://i.ibb.co/ChX2YG0/44ec5f88873b.png', 83, 74, 96, 70, 12, 6, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'Just consider hardships as another part of training and keep working hard. ', 227], ['Kobayashi', "Ms. Kobayashi's Dragon Maid", 'Neutral ✨', 'https://i.ibb.co/B65f6MW/7d9b44c5cf5f.png', 86, 75, 82, 79, 7, 4, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', "You'll never get anywhere if you can't compromise. ", 228], ['Koenma', 'Yu Yu Hakusho', 'Electric ⚡', 'https://i.ibb.co/QdyzSpM/572567b56dbd.png', 85, 85, 80, 75, 66, 4, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', "I am Koenma and I'm very cool.", 229], ['Kofuku', 'Noragami', 'Grass 🍃', 'https://i.ibb.co/VCytwb4/b11600f56c4e.png', 82, 91, 67, 85, 47, 4, '**Time Attack**: Deal __5__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "People's wishes are what let gods exist. ", 230], ['Kohaku', 'Dr. Stone', 'Grass 🍃', 'https://i.ibb.co/VjRM16J/7b339d5caf9f.png', 70, 85, 80, 95, 28, 3, "**Dexterity Drive**: Deal **Grass** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Grass** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Grass** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "I said I'm not a gorilla! ", 231], ['Kojiro Shinomiya', 'Shokugeki No Soma', 'Fire 🔥', 'https://i.ibb.co/fY6bJyM/2410bf8fa73f.png', 100, 70, 75, 83, 57, 6, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'If you want to grow, just look above you. There are plenty of people perfect to serve as fodder for your growth. ', 232], ['Kokoro', 'Darling In The Franxx', 'Grass 🍃', 'https://i.ibb.co/rMdQxZr/a46570cb6693.png', 71, 87, 88, 78, 32, 4, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'Why do you say my name, even when it hurts you? ', 233], ['Koneko Toujou', 'High School DxD', 'Neutral ✨', 'https://i.ibb.co/Jjzy7nC/17722dd1ef2c.png', 89, 72, 71, 89, 26, 4, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Are you not satisfied with me? ', 234], ['Konno Yuuki', 'Sword Art Online', 'Ground ⛰️', 'https://i.ibb.co/7k8WHZ6/c3fe128677d3.png', 76, 85, 93, 70, 12, 7, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'You hit me with everything you had, so I decided to trust you with everything I had. ', 235], ['Koro Sensei', 'Assassination Classroom', 'Light ☀️', 'https://i.ibb.co/m461kkC/9935197ab66d.png', 73, 85, 73, 100, 50, 6, "**Dexterity Drive**: Deal **Light** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Light** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Light** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'The difference between the novice and the master is that the master has failed more times than the novice has tried. ', 236], ['Koshi Sugawara', 'Haikyuu!!', 'Grass 🍃', 'https://i.ibb.co/mv2RRsQ/155dbc79b52e.png', 84, 69, 93, 78, 53, 3, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Talent is something you make bloom, instinct is something you polish. ', 237], ['Kotori Itsuka', 'Date A Live', 'Fire 🔥', 'https://i.ibb.co/S5dbKsy/f832272a387d.png', 94, 94, 64, 69, 35, 1, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "A second chance doesn't always mean a happy ending... ", 238], ['Kougyoku', 'Magi', 'Water 💧', 'https://i.ibb.co/0hw4cGQ/8497dd581006.png', 88, 87, 73, 76, 34, 4, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'My dear boy, do me a favour and stop being so cocky! ', 239], ['Kouta', 'Elfen Lied', 'Neutral ✨', 'https://i.ibb.co/nf0rVcS/6019e57e26a3.png', 72, 87, 85, 81, 59, 1, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'Are you hurt? ', 240], ['Krillin', 'Dragon Ball', 'Neutral ✨', 'https://i.ibb.co/hLWzF8f/f770746529e8.png', 96, 91, 68, 65, 29, 3, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', "Hey hun! I've got a great idea, lets trade! you take my spot and I'll fight Hercule! ", 241], ['Krul Tepes', 'Owari No Seraph', 'Dark 🌙', 'https://i.ibb.co/pr47B2q/addecc6f8b31.png', 65, 74, 94, 87, 39, 3, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', 'Ha. Love? The only thing you love is my power.” ', 242], ['Kurapika', 'Hunter X Hunter', 'Light ☀️', 'https://i.ibb.co/c3MRcqG/f9f7c30ffc70.png', 75, 77, 85, 87, 15, 6, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', "I'll avenge my clan and kill the phantom troupe! ", 243], ['Kurisu Makise', 'Steins Gate', 'Ground ⛰️', 'https://i.ibb.co/xG1HdCR/e6a216a5885e.png', 76, 90, 70, 87, 1, 2, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their DEF.', '<:VENGEANCE:761979331471736842>', 'Every brilliant day should be lived for those who passed away. ', 244], ['Kurumi Nonaka', 'Shinmai Maou No Testament', 'Water 💧', 'https://i.ibb.co/bQLmhb5/74fbf58e9ce9.png', 75, 97, 74, 76, 38, 3, '**Elemental Strike**: Deal **Water** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Water** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "I'll make you realize your mistake! ", 245], ['Kurumi Tokisaki', 'Date A Live', 'Fire 🔥', 'https://i.ibb.co/HVMR3tL/2a304256d67e.png', 75, 88, 75, 83, 35, 2, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', "You were ready to kill another creature, yet you're scared to be killed. Don't you think that's weird? ", 246], ['Kyoka Jiro', 'My Hero Academia', 'Electric ⚡', 'https://i.ibb.co/HYJ0jPH/eda0dceb9bbe.png', 78, 93, 60, 93, 17, 10, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', "If you do this, we just might win. But there's no time to hesitate, so do it now! You wanna be a hero, don't you?! ", 247], ['Kyoko Kirigiri', 'Danganronpa', 'Neutral ✨', 'https://i.ibb.co/C7qggN9/91aa180fa731.png', 68, 87, 82, 90, 54, 5, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'It’s odd, isn’t it? People die everyday and the world goes on like nothing happened. ', 248], ['Kyoya Hibari', 'Katekyo Hitman Reborn', 'Neutral ✨', 'https://i.ibb.co/WxVr0C9/8530e4db6c9d.png', 73, 79, 82, 88, 30, 3, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'Pride is not something you can surrender. ', 249], ['L', 'Death Note', 'Light ☀️', 'https://i.ibb.co/qjJYTY8/f327743d308d.png', 88, 73, 80, 87, 49, 1, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'There is no heaven or hell. No matter what you do while you’re alive, everybody goes to the same place once you die. Death is Equal. ', 250], ['Lambo', 'Katekyo Hitman Reborn', 'Electric ⚡', 'https://i.ibb.co/HN4qMXJ/503171c9ed4f.png', 74, 87, 77, 85, 30, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "I'm at an age where I just want to be loud! ", 251], ['Laxus Dreyar', 'Fairy Tail', 'Electric ⚡', 'https://i.ibb.co/nnCxTC9/e0ccddfb6519.png', 85, 89, 68, 83, 27, 7, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', "I'm gonna surpass you one day. Not for my father, but for myself. So I can become a man in my own right. ", 252], ['Lelouch Lamperouge', 'Code Geass', 'Dark 🌙', 'https://i.ibb.co/FVYQw4w/1955a1c487aa.png', 80, 64, 86, 90, 43, 4, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'The only ones who should kill, are those who are prepared to be killed. ', 253], ['Leorio Paradinight', 'Hunter X Hunter', 'Water 💧', 'https://i.ibb.co/8zpB7YG/c51e2b510e2e.png', 75, 81, 79, 92, 15, 7, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "For the right price, you can buy not only treasures, but dreams, hearts and even people's lives! ", 254], ['Levi Ackerman', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/f903brK/4cd39ebceab3.png', 75, 88, 74, 94, 9, 7, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'Somebody shut up these goddamn brats... ', 255], ['Liala', 'Shinmai Maou No Testament', 'Grass 🍃', 'https://i.ibb.co/bF3r5gB/b3f862666f9e.png', 85, 85, 81, 71, 38, 4, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', 'My my my. ', 256], ['Light Yagami (Kira)', 'Death Note', 'Light ☀️', 'https://i.ibb.co/G51w1Q8/99f974bcd0f9.png', 86, 100, 78, 61, 49, 2, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'This world is rotten, and those who are making it rot deserve to die. Someone has to do it, so why not me? ', 257], ['Liliruca Arde', 'Danmachi', 'Ground ⛰️', 'https://i.ibb.co/Cbn40Q7/d2fa3bc64d92.png', 80, 67, 99, 73, 19, 5, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'All the mistakes I made were for this moment. ', 258], ['Lisa Lisa', "Jojo's Bizarre Adventure", 'Water 💧', 'https://i.ibb.co/yRvgBnC/b44e3b305c22.png', 83, 89, 74, 82, 51, 7, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'Walking on water when you obviously lack proper training is quite an accomplishment. ', 259], ['Liz T Blood', 'Blood Lad', 'Dark 🌙', 'https://i.ibb.co/hyRPkpQ/5899e9ebf73b.png', 78, 87, 68, 92, 40, 5, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "You gave me this teddy bear. That's all I want. ", 260], ['Loke', 'Fairy Tail', 'Ground ⛰️', 'https://i.ibb.co/6DcxLcp/3d02160309df.png', 65, 77, 87, 94, 27, 8, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', 'I met Lucy, and I have regained my true powers as a spirit. ', 261], ['Lubbock', 'Akame Ga Kill!', 'Grass 🍃', 'https://i.ibb.co/1JCtnvg/7b5974a6d586.png', 91, 80, 75, 76, 24, 3, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'There is no way to train your heart to be invulnerable. ', 262], ['Luck Voltia', 'Black Clover', 'Electric ⚡', 'https://i.ibb.co/RjMWN2t/00f31d861f55.png', 76, 91, 79, 80, 3, 3, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', "I'm going to beat him on my own. ", 263], ['Lucoa', "Ms. Kobayashi's Dragon Maid", 'Ground ⛰️', 'https://i.ibb.co/6DjcgnC/ad076e46a535.png', 86, 73, 83, 79, 7, 5, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', 'Your virginity trial ends now. ', 264], ['Lucy Heartfilia', 'Fairy Tail', 'Light ☀️', 'https://i.ibb.co/hRPKD2v/63842e5cffef.png', 75, 92, 86, 68, 27, 9, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'Forget what hurt you in the past, but never forget what it taught you. ', 265], ['Lucy (Kaede)', 'Elfen Lied', 'Dark 🌙', 'https://i.ibb.co/Y2Jp003/58a29e12146a.png', 80, 82, 90, 80, 59, 2, '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', "Everyone in this place is unhappy. And since they're unhappy, they're probably looking for someone worse off than they are. [Official] ", 266], ['Machi Komacine', 'Hunter X Hunter', 'Ground ⛰️', 'https://i.ibb.co/6X4svLG/eeb52a427fff.png', 91, 78, 76, 80, 15, 8, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "Move, and you'll get cut. ", 267], ['Madara Uchiha', 'Naruto', 'Dark 🌙', 'https://i.ibb.co/WFwvxz5/3f4b1fed8740.png', 88, 90, 82, 60, 16, 6, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', 'Love is not necessary, power is the only true necessity. ', 268], ['Maka Albarn', 'Soul Eater', 'Light ☀️', 'https://i.ibb.co/vQLWc5q/c49b4b616024.png', 87, 80, 72, 80, 42, 7, '**Time Attack**: Deal __5__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'We might be scared but that’s what makes us stronger. ', 269], ['Maki Oze', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/dtDY4qb/f146d71803a6.png', 92, 76, 83, 77, 55, 6, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', 'As a sister, and a lovable Iris, violence does not become you. ', 270], ['Mako Mankanshoku', 'Kill La Kill', 'Fire 🔥', 'https://i.ibb.co/ZYDGZBF/b644883a7af1.png', 63, 89, 82, 95, 45, 3, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'And everyone on the planet knows that if you win with friendship, you win at life! ', 271], ['Makoto Kino (Sailor Jupiter)', 'Sailor Moon', 'Electric ⚡', 'https://i.ibb.co/hHMfW6N/12b19bf6dc1b.png', 83, 89, 79, 76, 37, 3, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Jupiter Thunder Crash! ', 272], ['Makoto Naegi', 'Danganronpa', 'Dark 🌙', 'https://i.ibb.co/854RpBb/0e4c1ef3e189.png', 81, 81, 81, 83, 54, 6, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'I refuse to give up. I refuse to get bored. I refuse to throw it all away. I refuse to despair. Because all I have going for me is the desire to keep moving forward! ', 273], ['Mamoru Chiba (Tuxedo Mask)', 'Sailor Moon', 'Dark 🌙', 'https://i.ibb.co/ZXqKJFx/40cdda686864.png', 82, 87, 73, 77, 37, 4, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', 'Even a lovely flower will soon wilt if a poisonous energy eats away at it. ', 274], ['Maria Naruse', 'Shinmai Maou No Testament', 'Dark 🌙', 'https://i.ibb.co/XJ4wLN1/808ba50a554b.png', 84, 68, 93, 80, 38, 5, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "You raised your hand against a woman?! It's the lowest thing for a man to do. ", 275], ['Mariko Kurama', 'Elfen Lied', 'Fire 🔥', 'https://i.ibb.co/tDgJZxy/48e8a89633b3.png', 83, 81, 70, 95, 59, 3, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'And now.. we meet... just like in my dreams. ', 276], ['Mary Saotome', 'Kakegurui', 'Neutral ✨', 'https://i.ibb.co/x5B4tJ7/dde9886b8f8c.png', 78, 79, 86, 84, 62, 2, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'I mean, I did win because of this 3 though. [shiunga315] ', 277], ['Mavis Vermillion', 'Fairy Tail', 'Light ☀️', 'https://i.ibb.co/bmRnF8B/fd27a22dc327.png', 63, 87, 87, 87, 27, 10, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', 'Mistakes are not shackles that halt one from stepping forward. ', 278], ['Maya Joga', 'Gochuumon Wa Usagi Desu Ka', 'Neutral ✨', 'https://i.ibb.co/mSRTCkw/a40e44bc8af7.png', 78, 87, 93, 65, 41, 4, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'I want to become an adult like that too! ', 279], ['Mayu', 'Elfen Lied', 'Neutral ✨', 'https://i.ibb.co/FB9xP7y/cc6caf63bd43.png', 90, 82, 85, 73, 59, 4, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "I envy you just for having someone who's worried about you. [Official] ", 280], ['Mayuri', 'Date A Live', 'Fire 🔥', 'https://i.ibb.co/B3nwNYv/d7d73cdc4c23.png', 86, 72, 85, 83, 35, 3, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', 'I am the embodiment of the Spirit power. Once the seal is broken, I will naturally disappear. ', 281], ['Mayuri Shiina', 'Steins Gate', 'Neutral ✨', 'https://i.ibb.co/Z65sNPZ/5f0a28913b76.png', 66, 66, 95, 94, 1, 3, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'Tuturuuuu! ', 282], ['Medusa Gorgon', 'Soul Eater', 'Dark 🌙', 'https://i.ibb.co/MDdrtT4/73ee8f33bbe9.png', 68, 99, 65, 90, 42, 8, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'Fear is what creates order. ', 283], ['Megumi Fushiguro', 'Jujutsu Kaisen', 'Light ☀️', 'https://i.ibb.co/mFbNLzq/5558d9189573.png', 86, 71, 92, 78, 65, 2, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "I don't care if I'm right or wrong. I just... have faith in my own good conscience", 284], ['Megumin', 'Konosuba', 'Fire 🔥', 'https://i.ibb.co/d6bWkmZ/35a8e40c8f55.png', 80, 97, 70, 73, 18, 6, '**Elemental Strike**: Deal **Fire** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Taste the power of my EXPLOSION! ', 285], ['Megumi Natsu', 'Gochuumon Wa Usagi Desu Ka', 'Light ☀️', 'https://i.ibb.co/4mfD0N8/12862c9731e8.png', 85, 91, 78, 70, 41, 5, '**Time Attack**: Deal __5__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Light** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "Hey! Don't make fun of me! ", 286], ['Megumi Tadokoro', 'Shokugeki No Soma', 'Water 💧', 'https://i.ibb.co/LC2ccjW/3c8c0b8be5bb.png', 74, 88, 92, 70, 57, 7, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "I've been always been saved by Soma-kun and the way he faces anything positively. Today he is not here to save me like those other times but he is also fighting right now. I don't know if I'll able to do it by myself, but...Soma-kun, today just lend me your courage! ", 287], ['Meliodas', '7 Deadly Sins', 'Ground ⛰️', 'https://i.ibb.co/TRddqtP/4c17845f6fe0.png', 77, 76, 73, 98, 5, 8, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'No matter what lies you tell, you can’t fool your own heart. ', 288], ['Mello', 'Death Note', 'Ground ⛰️', 'https://i.ibb.co/6mMtzfw/25df2ef4c7d9.png', 83, 91, 70, 83, 49, 3, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'No matter what I have to do, I will get it before Near. ', 289], ['Melty Q Melromarc', 'The Rising Of The Shield Hero', 'Water 💧', 'https://i.ibb.co/CPwLkFN/f6e86b7e5632.png', 73, 75, 87, 86, 4, 4, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "It's been far too long... sister. ", 290], ['Mephisto Pheles', 'Ao No Exorcist', 'Dark 🌙', 'https://i.ibb.co/bg2xsGm/a941e45d2980.png', 70, 100, 87, 64, 44, 2, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "It's the birth of a Blue Exorcist... whose self-imposed fate is to kill his own comrades. ", 291], ['Mera Mera', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/NVkW9cV/ec7f24441e2e.png', 81, 81, 82, 82, 55, 7, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', 'Szz... ', 292], ['Merlin', '7 Deadly Sins', 'Dark 🌙', 'https://i.ibb.co/8g4LZWH/de9f763d8cb6.png', 76, 88, 89, 71, 5, 9, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', 'A human ceases to be once he or she stops thinking. ', 293], ['Mikaela Hyakuya', 'Owari No Seraph', 'Fire 🔥', 'https://i.ibb.co/gdXVkBp/1baf50d032bf.png', 96, 81, 67, 77, 39, 4, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'I will do whatever it takes to protect you. ', 294], ['Mikasa Ackerman', 'Attack On Titan', 'Ground ⛰️', 'https://i.ibb.co/z2pQCxV/31f65fc26ba5.png', 70, 83, 78, 93, 9, 8, "**Dexterity Drive**: Deal **Ground** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Ground** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Ground** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "This world is cruel and merciless... but it's also very beautiful. ", 295], ['Miko', 'No Game No Life', 'Fire 🔥', 'https://i.ibb.co/PrfsH0c/8d9e56d1de76.png', 87, 92, 73, 72, 48, 5, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'Let us begin... the festival. ', 296], ['Miko Iino', 'Love Is War', 'Ground ⛰️', 'https://i.ibb.co/pP44csn/9a90fbc7909f.png', 93, 77, 79, 86, 61, 5, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'I want to convey those feelings of mine to the students through my campaign. [niniko2ko] ', 297], ['Miku (390)', 'Darling In The Franxx', 'Neutral ✨', 'https://i.ibb.co/16GFBcp/2bb5b40d626d.png', 93, 87, 74, 71, 32, 5, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', "Don't you realize Goro's always been looking out for you? ", 298], ['Miku Nakano', 'The Quintessential Quintuplets', 'Electric ⚡', 'https://i.imgur.com/KYqUGsh.png', 95, 76, 76, 76, 63, 4, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', "Fuutarou's word got me thinking. Only a little. That... Maybe I can do it too. So... You have to take resposibility!", 299], ['Milim Nava', 'Tensei Shitara Slime Datta Ken', 'Ground ⛰️', 'https://i.ibb.co/2WwwhcT/32b3f3b73055.png', 70, 90, 92, 72, 46, 3, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'What’s this? Haven’t played enough yet? Very well. I’ll play with you some more. ', 300], ['Minako Aino (Sailor Venus)', 'Sailor Moon', 'Neutral ✨', 'https://i.ibb.co/PGSWSP4/d17375a9416a.png', 66, 80, 94, 87, 37, 5, '**Elemental Strike**: Deal **Neutral** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Neutral** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Neutral** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Venus Crescent Beam! ', 301], ['Minato Namikaze', 'Naruto', 'Electric ⚡', 'https://i.ibb.co/4jCRff9/74d4ba62a614.png', 73, 82, 65, 103, 16, 7, "**Dexterity Drive**: Deal **Electric** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Electric** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Electric** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "Because I know that you're strong, in body and in mind. ", 302], ['Mine', 'Akame Ga Kill!', 'Neutral ✨', 'https://i.ibb.co/Y30WXZv/8ec30b0798b2.png', 97, 68, 94, 66, 24, 4, '**Time Attack**: Deal __5__% of your base DEF as **Neutral** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base DEF as **Neutral** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base DEF as **Neutral** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'People who abuse power they were born into piss me off more than anything else. ', 303], ['Minene Uryuu', 'Mirai Nikki', 'Dark 🌙', 'https://i.ibb.co/2KK5SKf/449e8f4de404.png', 87, 90, 83, 62, 31, 2, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'Nothing good comes from digging up the past. ', 304], ['Mio Akiyama', 'K-On!', 'Neutral ✨', 'https://i.ibb.co/hWr8HN8/75a704936853.png', 84, 87, 78, 71, 21, 2, '**Amplifier**: Increase the ATK of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "You're crying too, you big hypocrite! ", 305], ['Mio Naruse', 'Shinmai Maou No Testament', 'Fire 🔥', 'https://i.ibb.co/kqZ6qtt/3eb9ff5b1030.png', 86, 84, 72, 80, 38, 6, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'You have a heart! How could we just abandon you to die?! ', 306], ['Mio Takamiya', 'Date A Live', 'Light ☀️', 'https://i.ibb.co/b67fnQK/63a74ee508a7.png', 74, 80, 72, 99, 35, 4, '**Double-edged Strike**: Deal **Light** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Light** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Light** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'Originally, the word Spirit only referred to me, the First Spirit. ', 307], ['Miroku', 'Inuyasha', 'Grass 🍃', 'https://i.ibb.co/nf1WJvr/545ec816676d.png', 92, 93, 67, 74, 25, 4, '**Elemental Strike**: Deal **Grass** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Life itself is a frightening image for every human being… being strong in life isn’t easy. ', 308], ['Misa Amane', 'Death Note', 'Light ☀️', 'https://i.ibb.co/q1dj5Cn/e977afbb08ea.png', 85, 97, 74, 72, 49, 4, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'Unless someone makes the first move, nothing will happen. ', 309], ['Misaka Mikoto', 'A Certain Scientific Railgun', 'Electric ⚡', 'https://i.ibb.co/F0kfFc4/d7f7604b7463.png', 75, 92, 71, 87, 33, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'I just don’t have any patience for people who would rather hurt others instead of facing their own reality. ', 310], ['Mitsuba Sangu', 'Owari No Seraph', 'Ground ⛰️', 'https://i.ibb.co/6XWs5K6/d74a877c02a8.png', 87, 73, 65, 94, 39, 5, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'I hate people that put their comrades at risk. ', 311], ['Miyuki Shirogane', 'Love Is War', 'Light ☀️', 'https://i.ibb.co/tCynLgV/13fc054123e9.png', 84, 83, 90, 69, 61, 6, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', 'When it comes to student council, school rules take priority over traffic rules! [ぽりごん。/Poligon] ', 312], ['Mocha Hoto', 'Gochuumon Wa Usagi Desu Ka', 'Ground ⛰️', 'https://i.ibb.co/CKCVxpV/eda64e246dd6.png', 65, 93, 72, 92, 41, 6, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'There there... ', 313], ['Momo Yaoyorozu', 'My Hero Academia', 'Ground ⛰️', 'https://i.ibb.co/Htnpyk1/2f6d943a338a.png', 83, 65, 100, 71, 17, 11, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "I trust you, but worse comes to worst, I should be there backup which is why I'm coming too. ", 314], ['Monika', 'DDLC', 'Light ☀️', 'https://i.ibb.co/nR6RTCW/1055134a6e6e.png', 72, 88, 75, 93, 0, 1, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', "Well, to be honest, I do start getting all romantic when the mood is right.. but that'll be our secret~ ", 315], ['Monkey D Luffy', 'One Piece', 'Neutral ✨', 'https://i.ibb.co/kSDr57K/d354b76a74b9.png', 70, 90, 86, 76, 10, 3, '**Elemental Strike**: Deal **Neutral** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Neutral** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Neutral** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "Power isn't determined by your size, but the size of your heart and dreams ! ", 316], ['Morgiana', 'Magi', 'Fire 🔥', 'https://i.ibb.co/8s6Rvyv/53ca8288c7af.png', 67, 96, 72, 89, 34, 5, '**Double-edged Strike**: Deal **Fire** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'I want to fight for the people who are being oppressed. ', 317], ['Mori Jin', 'The God Of High School', 'Ground ⛰️', 'https://i.ibb.co/4Zvgkwx/e684a704d89e.png', 83, 83, 83, 83, 0, 1, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', "I think it's time to get serious! ", 318], ['Motoyasu Kitamura', 'The Rising Of The Shield Hero', 'Electric ⚡', 'https://i.ibb.co/1bs3dyq/4ecde28e34e7.png', 72, 90, 82, 81, 4, 5, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "I guess you're not the shield hero for nothing. ", 319], ['Mukuro Rokudo', 'Katekyo Hitman Reborn', 'Dark 🌙', 'https://i.ibb.co/JsJnS2F/dda750d1a711.png', 85, 65, 91, 79, 30, 5, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'The reason you lost, was because you had me as your opponent. ', 320], ['Nagisa Shiota', 'Assassination Classroom', 'Water 💧', 'https://i.ibb.co/3fvQDrP/99f1d018da77.png', 81, 93, 74, 80, 50, 7, "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __3__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __30__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __6__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __60__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", '<:ULTIMATE_COMBO:822684576786546690>', 'Anything can be a sword if you polish it enough. ', 321], ['Nagito Komaeda', 'Danganronpa', 'Water 💧', 'https://i.ibb.co/7W0gM5s/7701fb3d6790.png', 74, 88, 89, 72, 54, 7, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', "It's a given that trials are necessary to become strong, the harsher the trial, the stronger you become, no? ", 322], ['Nami', 'One Piece', 'Electric ⚡', 'https://i.ibb.co/mv0XCFY/327f19e5a8d2.png', 70, 85, 75, 95, 10, 4, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'Life is like a pencil that will surely run out, but will leave the beautiful writing of life. ', 323], ['Nana', 'Elfen Lied', 'Fire 🔥', 'https://i.ibb.co/m9FR9GG/4f6859b73375.png', 75, 80, 75, 95, 59, 5, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'Are you going to kill me too? [Official] ', 324], ['Naofumi Iwatani', 'The Rising Of The Shield Hero', 'Ground ⛰️', 'https://i.ibb.co/d67Ftj1/5632387b22c1.png', 78, 67, 100, 78, 4, 6, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "If I can't win anyway, I might as well make you as miserable as I can. ", 325], ['Naomi Misora', 'Death Note', 'Water 💧', 'https://i.ibb.co/Kq9H7m5/89c9096ce600.png', 67, 88, 90, 81, 49, 5, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "He's dead. Raye's dead. No, he was murdered by Kira. ", 326], ['Naraku', 'Inuyasha', 'Dark 🌙', 'https://i.ibb.co/B4YktQB/213ccb40d5dd.png', 83, 62, 96, 79, 25, 5, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'I am not going to kill you – I am going to break you. ', 327], ['Naruto Uzumaki', 'Naruto', 'Fire 🔥', 'https://i.ibb.co/k3P7cVG/aff3413d7beb.png', 75, 95, 70, 89, 16, 8, '**Elemental Strike**: Deal **Fire** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', "I'm not gonna run away, I never go back on my word! That’s my ninja way! ", 328], ['Natsu Dragneel', 'Fairy Tail', 'Fire 🔥', 'https://i.ibb.co/zF09gy7/0c703fe29018.png', 80, 95, 64, 81, 27, 11, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', "Whoever looks down upon our guild, I'll shut him up!!! I will show the power of Fairy Tail!!! ", 329], ['Natsuki', 'DDLC', 'Water 💧', 'https://i.ibb.co/3ky6Lm5/961e629beca3.png', 95, 78, 77, 74, 0, 2, "**Life Sap** [PSV]: Every round, deal __2__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __3__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __4__% of the enemy familiars' max HP as damage, and heal for the same amount.", '<:LIFE_SAP:822731181526876161>', "Well everyone has their own opinion. But my opinion is the best opinion. I'm sure you've figured that out already. ", 330], ['Near', 'Death Note', 'Neutral ✨', 'https://i.ibb.co/58tL7xR/d82de7e8d5f3.png', 75, 81, 62, 88, 49, 6, "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __60__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'Nobody can tell what is right and what is wrong, what is righteous and what is evil. ', 331], ['Neji Hyuga', 'Naruto', 'Grass 🍃', 'https://i.ibb.co/WkgH0f3/b523f6e8e3d4.png', 82, 88, 86, 70, 16, 9, "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __3__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __30__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __6__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __60__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", '<:ULTIMATE_COMBO:822684576786546690>', 'People are judged by their true nature. It is the way of the world. ', 332], ['Nero', 'Black Clover', 'Dark 🌙', 'https://i.ibb.co/vHdtsMZ/1191b71a6a4e.png', 75, 84, 89, 75, 3, 4, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "We can't let what happened before happen ever again. ", 333], ['Nezuko Kamado', 'Kimetsu No Yaiba', 'Dark 🌙', 'https://i.ibb.co/vLDGS1X/7484620ddea0.png', 84, 82, 80, 78, 23, 4, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', 'Mmmhmp mmhmmh mmm mhhhmmp hmmmp hmmp mmmhp mmmmmmmhp!!! ', 334], ['Nico Robin', 'One Piece', 'Dark 🌙', 'https://i.ibb.co/6DndZkS/c720bb110c02.png', 90, 90, 70, 70, 10, 5, "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __60__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", '<:TRICK_ROOM:761996115410944013>', "Fools who don't respect the past are doomed to repeat it. ", 335], ['Nino Nakano', 'The Quintessential Quintuplets', 'Light ☀️', 'https://i.imgur.com/u5YiN8Y.png', 76, 95, 76, 76, 63, 5, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'I will never accept you, even if it means being hated by my sisters.', 336], ['Nobara Kugisaki', 'Jujutsu Kaisen', 'Ground ⛰️', 'https://i.ibb.co/vzn6vf6/c5af259ae2ef.png', 95, 73, 78, 85, 65, 3, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', "Cheer up guys, at least I'm here.", 337], ['Nobuchika Ginoza', 'Psycho Pass', 'Neutral ✨', 'https://i.ibb.co/TB6jVHd/e545d53f943b.png', 95, 66, 78, 85, 67, 2, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'As a leader, you need to learn from the mistakes of others, not your own.', 338], ['Noda', 'Angel Beats', 'Ground ⛰️', 'https://i.ibb.co/yYsgcGP/376f1dcee0dc.png', 78, 92, 86, 70, 14, 3, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'Is that all you got?! ', 339], ['Noelle Silva', 'Black Clover', 'Water 💧', 'https://i.ibb.co/TBgKQ05/fa05cff8cb60.png', 75, 81, 93, 77, 3, 5, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "No no no! I don't feel anything for that idiot. ", 340], ['No Face', 'Spirited Away', 'Dark 🌙', 'https://i.ibb.co/q9q3tCg/d70642c2ccf5.png', 83, 91, 80, 74, 0, 1, "**Life Sap** [PSV]: Every round, deal __2__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __3__% of the enemy familiars' max HP as damage, and heal for the same amount.", "**Life Sap** [PSV]: Every round, deal __4__% of the enemy familiars' max HP as damage, and heal for the same amount.", '<:LIFE_SAP:822731181526876161>', 'Come closer, Sen. What would you like? Just name it. ', 341], ['November', 'Darker Than Black', 'Water 💧', 'https://i.ibb.co/5sbJVYN/3fd0a5d16bce.png', 87, 82, 81, 75, 8, 4, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', 'The second hand-smoker also inhales eleven times the volume of smoke itself. 18,000 nanograms in all ', 342], ['Nui Harime', 'Kill La Kill', 'Fire 🔥', 'https://i.ibb.co/QYWHkn3/2e9cf782b032.png', 66, 89, 97, 70, 45, 4, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'Hate and love are two sides of the same coin. ', 343], ['Ochaco Uraraka', 'My Hero Academia', 'Light ☀️', 'https://i.ibb.co/YcLYQgC/e7bcd5ce2dd9.png', 92, 97, 63, 70, 17, 12, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "So I'm gonna be a hero. I'll make that money… so that my mom and dad can have easier lives. ", 344], ['Okita Sougo', 'Gintama', 'Water 💧', 'https://i.ibb.co/5kjkhmQ/bd31f3ede945.png', 81, 93, 74, 78, 52, 5, '**Double-edged Strike**: Deal **Water** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'Sometimes, it’s necessary to look back at the past in order to move on to the future. ', 345], ['Origami Tobiichi', 'Date A Live', 'Water 💧', 'https://i.ibb.co/cgh0nnj/566cb595d5cc.png', 94, 76, 79, 73, 35, 5, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "It was a Spirit's fault, that five years ago... my parents died. ", 346], ['Osamu Dazai', 'Bungou Stray Dogs', 'Dark 🌙', 'https://i.ibb.co/6XdZCTK/39f6fd3d72b6.png', 80, 88, 76, 84, 64, 6, '**Unlucky Coin**: Roll a __20__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '**Unlucky Coin**: Roll a __36__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '**Unlucky Coin**: Roll a __40__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '<:UNLUCKY_COIN:853202656116604938>', "A good book is always good, no matter how many times you've already read it.", 347], ['Padoru', 'Christmas Afterparty 2020', 'Water 💧', 'https://i.ibb.co/2YZKSVN/e8b1b5be70d8.png', 90, 95, 70, 80, 0, 2, "**Soul Stealer** [PSV]: Absorb __4__% of the enemy familiars' DEF every turn.", "**Soul Stealer** [PSV]: Absorb __7__% of the enemy familiars' DEF every turn.", "**Soul Stealer** [PSV]: Absorb __8__% of the enemy familiars' DEF every turn.", '<:SOUL_STEALER:824278124057067531>', 'Hashire sori yo, kaze no you ni... ', 348], ['Pain', 'Naruto', 'Dark 🌙', 'https://i.ibb.co/23K9LBV/93d3a5bb67c3.png', 80, 86, 85, 78, 16, 10, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'To understand pain, you must know pain. ', 349], ['Piccolo', 'Dragon Ball', 'Grass 🍃', 'https://i.ibb.co/VDKFBTQ/742ea68b19d3.png', 62, 83, 99, 76, 29, 4, '**Elemental Strike**: Deal **Grass** damage based on __10__% of your DEF.', '**Elemental Strike**: Deal **Grass** damage based on __18__% of your DEF.', '**Elemental Strike**: Deal **Grass** damage based on __20__% of your DEF.', '<:METEOR:761978476856082494>', "You'll laugh at your fears when you find out who you are. ", 350], ['Portgas D Ace', 'One Piece', 'Fire 🔥', 'https://i.ibb.co/rvZPRYF/f4fa47e265ee.png', 91, 72, 92, 70, 10, 6, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', "You still haven't changed at all, have you Luffy? ", 351], ['Priestess', 'Goblin Slayer', 'Light ☀️', 'https://i.ibb.co/WnKDxdh/a804de43d0ef.png', 85, 85, 85, 70, 58, 5, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', 'Are you going to kill them? ', 352], ['Prince Diamond', 'Sailor Moon', 'Light ☀️', 'https://i.ibb.co/bscGjVt/a614ff297bc3.png', 80, 92, 75, 74, 37, 6, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'Oh Sailor Moon, how I love to hear more about Earth from you. Maybe we people on Nemesis might have been able to live in peace with you Earthlings. ', 353], ['Puck', 'Re:Zero', 'Light ☀️', 'https://i.ibb.co/R35jWmW/2cfc8e196d99.png', 70, 90, 78, 89, 13, 5, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', "Do anything to her, and I'll haunt you and your kin forever. ", 354], ['Rabo', 'Noragami', 'Water 💧', 'https://i.ibb.co/przj5F5/7e38f74e15a0.png', 85, 92, 78, 71, 47, 5, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'However many wishes we grant, people will always fear, loathe and forget gods of calamity. ', 355], ['Ram', 'Re:Zero', 'Grass 🍃', 'https://i.ibb.co/qgc2j2m/53f930cf7763.png', 85, 89, 81, 66, 13, 6, '**Elemental Strike**: Deal **Grass** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Grass** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'Pardon my intrusion, sir. ', 356], ['Ranpo Edogawa', 'Bungou Stray Dogs', 'Electric ⚡', 'https://i.ibb.co/N72tyGX/3a48a243af57.png', 90, 87, 75, 70, 64, 7, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', "As long as I'm alive, everything is fine!", 357], ['Raphtalia', 'The Rising Of The Shield Hero', 'Ground ⛰️', 'https://i.ibb.co/bvFTnpY/61fb9d3c64db.png', 91, 85, 87, 61, 4, 7, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', "Even if you can't trust anyone anymore, I'll still trust you! ", 358], ['Reborn', 'Katekyo Hitman Reborn', 'Neutral ✨', 'https://i.ibb.co/1nDsywY/e033c706da2e.png', 73, 94, 76, 76, 30, 6, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Intelligence rules the world. ', 359], ['Rei Hino (Sailor Mars)', 'Sailor Moon', 'Fire 🔥', 'https://i.ibb.co/5Fvsv8K/e613c120728c.png', 84, 71, 96, 69, 37, 7, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', 'I shall punish those who steal pure hearts to destroy innocent lives with the fire of Mars. ', 360], ['Reisuke Houjou', 'Mirai Nikki', 'Ground ⛰️', 'https://i.ibb.co/FzzhngY/623982d53a6a.png', 88, 80, 85, 72, 31, 3, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'Big brother! Come play with me! ', 361], ['Rem', 'Re:Zero', 'Water 💧', 'https://i.ibb.co/HKGqy7G/ac78497f22dd.png', 85, 87, 78, 71, 13, 7, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', "When you don't believe in yourself, I will believe in you! ", 362], ['Ren Amaki', 'The Rising Of The Shield Hero', 'Water 💧', 'https://i.ibb.co/601dS7Z/51bf5002c42a.png', 82, 84, 70, 91, 4, 8, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Why are you angry all the time? ', 363], ['Ren Amamiya (Joker)', 'Persona 5', 'Fire 🔥', 'https://i.ibb.co/k6jBjnv/15084024616c.png', 75, 84, 90, 82, 0, 1, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', "It's showtime! ", 364], ['Ren Hakuryuu', 'Magi', 'Dark 🌙', 'https://i.ibb.co/x1kWMHV/4dff317f29eb.png', 84, 87, 68, 84, 34, 6, '**Double-edged Strike**: Deal **Dark** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Dark** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Dark** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'To force obedience by the sword now will only invite bloody rebellion later. ', 365], ['Renzo Shima', 'Ao No Exorcist', 'Fire 🔥', 'https://i.ibb.co/z49Mhhb/510fc9ef032c.png', 98, 92, 63, 70, 44, 3, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "You're a good person... I trust you. ", 366], ['Rias Gremory', 'High School DxD', 'Fire 🔥', 'https://i.ibb.co/1Q2yBst/68723e18e8b9.png', 70, 86, 74, 97, 26, 5, "**Dexterity Drive**: Deal **Fire** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Fire** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Fire** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "Pawns are important. They're not the weakest piece in the game by any means. ", 367], ['Riko Saikawa', "Ms. Kobayashi's Dragon Maid", 'Grass 🍃', 'https://i.ibb.co/rfzXskH/1746efa83678.png', 72, 92, 78, 83, 7, 6, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'Kanna-san! ', 368], ['Rimuru Tempest', 'Tensei Shitara Slime Datta Ken', 'Water 💧', 'https://i.ibb.co/yFk40wW/5ba32f77c314.png', 67, 102, 76, 79, 46, 4, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'I underestimated you, but not as much as you underestimated me. ', 369], ['Rin Okumura', 'Ao No Exorcist', 'Fire 🔥', 'https://i.ibb.co/3kQMj5z/64fca10e066f.png', 86, 94, 68, 74, 44, 4, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', "Don't just mindlessly judge people as you please. ", 370], ['Rintarou Okabe', 'Steins Gate', 'Neutral ✨', 'https://i.ibb.co/HKDg0GG/7b294198f3a7.png', 85, 90, 86, 60, 1, 4, '**Rejuvenation**: Restore the HP of all allied familiars by __12__%, as well as increasing healing effects on allied familiars by __10__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __21__%, as well as increasing healing effects on allied familiars by __18__%, up to a maximum of 50% heal increase.', '**Rejuvenation**: Restore the HP of all allied familiars by __24__%, as well as increasing healing effects on allied familiars by __20__%, up to a maximum of 50% heal increase.', '<:REJUVENATION:761980005445271562>', 'No one knows what the future holds. That’s why its potential is infinite. ', 371], ['Rin Tohsaka', 'Fate', 'Fire 🔥', 'https://i.ibb.co/Dw07LFN/ad716aa736b5.png', 71, 89, 100, 64, 2, 5, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'The world is just another word for the things you value around you, right? ! ', 372], ['Ririka Momobami', 'Kakegurui', 'Light ☀️', 'https://i.ibb.co/TRpGPrB/b679f0ec25f7.png', 77, 67, 93, 80, 62, 3, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'Now, make your choice. ', 373], ['Ritsu', 'Assassination Classroom', 'Electric ⚡', 'https://i.ibb.co/t3GVVNm/c206ec15952b.png', 83, 91, 80, 71, 50, 8, '**Time Attack**: Deal __5__% of your base DEF as **Electric** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base DEF as **Electric** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base DEF as **Electric** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "The killing probability of the next shot is less than 0.001%. The killing probability of the shot after that is less than 0.003%. The probability that I'll be able to kill you by graduation is more than 90%. ", 374], ['Ritsu Kageyama', 'Mob Psycho 100', 'Water 💧', 'https://i.ibb.co/sP13hLn/83402ae6f9c0.png', 78, 93, 85, 70, 56, 2, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'Care to enlighten me? ', 375], ['Ritsu Tainaka', 'K-On!', 'Neutral ✨', 'https://i.ibb.co/qnW9fn3/2dffe767869a.png', 76, 88, 60, 96, 21, 3, "**Dexterity Drive**: Deal **Neutral** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Neutral** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Neutral** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'Thou art not good! Thou shalt not become a great actress at this rate ! ', 376], ['Riza Hawkeye', 'Fullmetal Alchemist', 'Fire 🔥', 'https://i.ibb.co/TPBNXCN/6f43cbbdaab1.png', 70, 85, 87, 86, 20, 5, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'War does not determine who is right. Only who is left! ', 377], ['Rize Tedeza', 'Gochuumon Wa Usagi Desu Ka', 'Dark 🌙', 'https://i.ibb.co/wZnypZH/b5db3ea9d04b.png', 93, 86, 76, 69, 41, 7, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "It's natural to hide from an unfamiliar presence! ", 378], ['Rock Lee', 'Naruto', 'Grass 🍃', 'https://i.ibb.co/NSGZC15/431cbfe0026e.png', 76, 87, 80, 76, 16, 11, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'I work hard and never give up! That is my gift; That is my ninja way! ', 379], ['Roronoa Zoro', 'One Piece', 'Ground ⛰️', 'https://i.ibb.co/2dcGcFZ/a958f9668d24.png', 81, 84, 71, 90, 10, 7, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'In a real fight there is no man or woman. ', 380], ['Rossweisse', 'High School DxD', 'Light ☀️', 'https://i.ibb.co/7ntLMsn/69e750800fdd.png', 74, 72, 90, 93, 26, 6, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'I will protect the bodies of the female students with my life! ', 381], ['Roy Mustang', 'Fullmetal Alchemist', 'Fire 🔥', 'https://i.ibb.co/0MBzPp2/2bc65ca7502e.png', 84, 87, 70, 83, 20, 6, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', "Nothing's perfect, the world's not perfect, but it's there for us, trying the best it can. That's what makes it so damn beautiful. ", 382], ['Rukia Kuchiki', 'Bleach', 'Water 💧', 'https://i.ibb.co/stw2pHJ/de737aae50c2.png', 97, 75, 65, 83, 11, 6, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Even if no one in the world believes you, stick out your chest and scream in defiance. ', 383], ['Ryohei Sasagawa', 'Katekyo Hitman Reborn', 'Fire 🔥', 'https://i.ibb.co/JrHQ964/fc2f2ac3e145.png', 93, 70, 96, 63, 30, 7, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'To the extreme! ', 384], ['Ryo Kurokiba', 'Shokugeki No Soma', 'Dark 🌙', 'https://i.ibb.co/R37s3vq/6da93c48cd2c.png', 78, 85, 92, 70, 57, 8, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'That looks sooo good! ', 385], ['Ryota Suzui', 'Kakegurui', 'Neutral ✨', 'https://i.ibb.co/6tMPZ2Q/bc1856a21d4c.png', 78, 87, 87, 78, 62, 4, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', 'This is my risk as well! [cain_art811] ', 386], ['Ryuji Suguro', 'Ao No Exorcist', 'Fire 🔥', 'https://i.ibb.co/CMSdbw5/7651e0c2441d.png', 88, 75, 62, 98, 44, 5, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "I'm not spineless like you! I'll become a real Exorcist and defeat Satan! ", 387], ['Ryuk', 'Death Note', 'Dark 🌙', 'https://i.ibb.co/1ZNKHyR/624e9a6fa29f.png', 83, 100, 82, 86, 49, 7, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', 'The human world is a boring place with boring people doing boring things. ', 388], ['Ryuko Matoi', 'Kill La Kill', 'Fire 🔥', 'https://i.ibb.co/6nbqk1Q/8aca5a628612.png', 81, 96, 77, 70, 45, 5, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'I won’t sacrifice the lives of others to achieve my goal. ', 389], ['Ryuu Lion', 'Danmachi', 'Grass 🍃', 'https://i.ibb.co/wyFqKNN/bc7213b7cff9.png', 84, 70, 82, 91, 19, 6, "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __3__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __30__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __6__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __60__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", '<:ULTIMATE_COMBO:822684576786546690>', 'Humility is a virtue, but do not insult yourself. ', 390], ['Saitama', 'One Punch Man', 'Neutral ✨', 'https://i.ibb.co/gmgHWzH/47cd861d1465.png', 66, 103, 80, 68, 36, 5, '**Double-edged Strike**: Deal **Neutral** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Neutral** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Neutral** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'If you really want to become strong, stop caring about what others think about you. Living your life has nothing to do with what others think. ', 391], ['Sakura Haruno', 'Naruto', 'Neutral ✨', 'https://i.ibb.co/6HHt8d5/3d34c5e32a44.png', 85, 71, 76, 90, 16, 12, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their SPD.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their SPD.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their SPD.', '<:VENGEANCE:761979331471736842>', "Now it's my turn to take the lead, and all of you can watch me from behind! ", 392], ['Sakura Matou', 'Fate', 'Dark 🌙', 'https://i.ibb.co/Fb5vrz4/ad71f21e21fa.png', 96, 68, 77, 79, 2, 6, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "It's not like I'm goofing off, just because it's the weekend! ", 393], ['Sango', 'Inuyasha', 'Ground ⛰️', 'https://i.ibb.co/cvR6hWr/ddc8b83319d8.png', 93, 81, 81, 70, 25, 6, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their DEF.', '<:VENGEANCE:761979331471736842>', 'Is it necessary to keep stroking my leg while you talk? ', 394], ['Sanji', 'One Piece', 'Fire 🔥', 'https://i.ibb.co/CBwdzTB/b1e147c13fb2.png', 76, 91, 77, 81, 10, 8, '**Double-edged Strike**: Deal **Fire** damage equal to __15__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __27__% of your ATK, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Fire** damage equal to __30__% of your ATK, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', "Don't start a fight if you can't end it. ", 395], ['Sans', 'Undertale', 'Water 💧', 'https://i.ibb.co/9prkyC0/456108998db4.png', 80, 83, 72, 97, 0, 1, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', "That's the expression of someone who's died twice in a row. ", 396], ['Sasuke Uchiha', 'Naruto', 'Dark 🌙', 'https://i.ibb.co/f9YRKKd/496504d21a05.png', 89, 80, 83, 75, 16, 13, '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '**Blaze**: Inflict a stack of **Burn** to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.', '<:BURN:761996186747142164>', "My dream doesn't exist in the future. It lies in the past. ", 397], ['Saten Ruiko', 'A Certain Scientific Railgun', 'Grass 🍃', 'https://i.ibb.co/cJv1FZg/535ae2cf3c34.png', 86, 90, 73, 75, 33, 5, '**Amplifier**: Increase the ATK of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the ATK of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', "I decided that giving up on everything doesn't help. From now on, I'll keep trying! ", 398], ['Satoru Gojo', 'Jujutsu Kaisen', 'Electric ⚡', 'https://i.ibb.co/qJFwrQ6/cba345d56c21.png', 86, 83, 78, 78, 65, 4, '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the ATK of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', "It'll be fine. I'm the strongest there is, after all.", 399], ['Satoshi Isshiki', 'Shokugeki No Soma', 'Neutral ✨', 'https://i.ibb.co/LSTG52j/c94d966f1b18.png', 82, 83, 70, 87, 57, 9, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', 'The clear message here is that, we should always strive to improve, or never stop experimenting in order to achieve the next level of success in any art. ', 400], ['Satsuki Kiryuin', 'Kill La Kill', 'Neutral ✨', 'https://i.ibb.co/FKWWVYC/a538387fae11.png', 93, 83, 81, 64, 45, 6, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'Fear is freedom! Subjugation is liberation! Contradiction is truth! These are the truths of this world! ', 401], ['Sayaka Maizono', 'Danganronpa', 'Light ☀️', 'https://i.ibb.co/Pxz5J3b/bfe6f956dd0e.png', 78, 68, 90, 92, 54, 8, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "I'm psychic. Kidding! I just have really good intuition. ", 402], ['Sayori', 'DDLC', 'Light ☀️', 'https://i.ibb.co/GvM6y2F/87c54c10ee41.png', 80, 72, 92, 81, 0, 3, '**Overload** [PSV]: When the battle starts, increase the DEF by __55__% of all allied familiars. Your DEF decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the DEF by __99__% of all allied familiars. Your DEF decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the DEF by __110__% of all allied familiars. Your DEF decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', "I'm supposed to be happy for you. Why does it feel like my heart is splitting in half?  | @Koppepan_009", 403], ['Scar', 'Fullmetal Alchemist', 'Electric ⚡', 'https://i.ibb.co/Rvs968P/fa6a74fbbea3.png', 88, 79, 68, 94, 20, 7, "**Dexterity Drive**: Deal **Electric** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Electric** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Electric** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'Our names are given to us by God. I have betrayed God, and so I no longer have a name. ', 404], ['Scathach', 'Fate', 'Ground ⛰️', 'https://i.ibb.co/BLSwV9M/7481768fc636.png', 76, 95, 71, 78, 2, 7, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "I'm amazed you had the nerve to come here alone. ", 405], ['Sebas Tian', 'Overlord', 'Dark 🌙', 'https://i.ibb.co/kyhsVcm/df3a75ef098d.png', 77, 82, 90, 74, 22, 4, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'It would please me for you to call me Sebas. ', 406], ['Senku Ishigami', 'Dr. Stone', 'Ground ⛰️', 'https://i.ibb.co/8x9tZGJ/db80c3f9bfac.png', 100, 83, 67, 76, 28, 4, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "I'm ten billion percent certain that we'll save everyone in the kingdom of science. ", 407], ['Sesshomaru', 'Inuyasha', 'Light ☀️', 'https://i.ibb.co/CQ3z9MY/ee99ede71c1f.png', 88, 71, 99, 62, 25, 7, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', 'I seek nothing more than to battle the most powerful beings alive, which excludes the lowly likes of you. ', 408], ['Shalltear Bloodfallen', 'Overlord', 'Dark 🌙', 'https://i.ibb.co/wyyNjtT/04dc6a826c09.png', 100, 67, 93, 63, 22, 5, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'Ah, my master, my beloved master, the only one whom I cannot rule over... ', 409], ['Sharo Kirima', 'Gochuumon Wa Usagi Desu Ka', 'Electric ⚡', 'https://i.ibb.co/pjxrQhx/3ab57b38313c.png', 67, 89, 78, 92, 41, 8, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'I pay a lot of attention to the teacups I drink fine teas from. ', 410], ['Shido Itsuka', 'Date A Live', 'Water 💧', 'https://i.ibb.co/4KP8t66/6a0a2d460067.png', 86, 64, 83, 92, 35, 6, '**Double-edged Strike**: Deal **Water** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Water** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', "If people refuse to accept you, I'll just accept you even more. ", 411], ['Shiemi Moriyama', 'Ao No Exorcist', 'Grass 🍃', 'https://i.ibb.co/0Jh7pDg/756610c5b1d0.png', 92, 63, 67, 102, 44, 6, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', "I mustn't cry. Instead of spending time crying, today I'll definitely make some friends! ", 412], ['Shigeo Kageyama', 'Mob Psycho 100', 'Neutral ✨', 'https://i.ibb.co/DC9DDVs/337627864a3f.png', 85, 81, 80, 70, 56, 3, '**Reversion** [PSV]: Once your health drops below __20__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __12__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __36__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __24__% after the reversion.', '<:REVERSION:822684998514901002>', 'I don’t want to see anyone else hurting people, or anyone else getting hurt. ', 413], ['Shikamaru Nara', 'Naruto', 'Ground ⛰️', 'https://i.ibb.co/nfsjRqQ/5d91ad6329b8.png', 76, 84, 89, 75, 16, 14, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'Laziness is the mother of all bad habits, but ultimately she is a mother and we should respect her. ', 414], ['Shimura Shinpachi', 'Gintama', 'Ground ⛰️', 'https://i.ibb.co/W6ztPHd/9f1d5b65cd58.png', 85, 70, 78, 93, 52, 6, "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __3__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __30__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", "**Ultimate Combo**: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __6__% of your SPD x the amount of Fighting Counters you have as **True** damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __60__% of your opponent's max HP as **True** damage instead, and your Fighting Counters are reset back to 0.", '<:ULTIMATE_COMBO:822684576786546690>', 'There’s no short-cut to becoming strong. Even if you try to look strong on the outside, that thin layer will soon fall off. ', 415], ['Shinoa Hiragi', 'Owari No Seraph', 'Neutral ✨', 'https://i.ibb.co/WvkTdPB/0ff4665a97d1.png', 85, 97, 74, 69, 39, 6, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'Beyond those walls lie blasted wastelands and crumbling ruins overrun with monsters. This world of ours… no longer welcomes humanity. ', 416], ['Shinobu Kocho', 'Kimetsu No Yaiba', 'Grass 🍃', 'https://i.ibb.co/fqprV5t/a36c80d79134.png', 93, 83, 80, 72, 23, 5, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', 'I may be the only swords-lady among the pillars who can’t cut a demon’s head off. But anyone who creates poison that can kill demons can be quite amazing. ', 417], ['Shinra Kusakabe', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/gWZ8jb1/da749cef8989.png', 83, 94, 78, 71, 55, 8, '**Elemental Strike**: Deal **Fire** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Fire** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'I smile whenever I feel tense. ', 418], ['Shinya Hiragi', 'Owari No Seraph', 'Fire 🔥', 'https://i.ibb.co/TKZPKdL/bf1661864be6.png', 75, 101, 73, 73, 39, 7, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', "I won't let you get away. Bang! ", 419], ['Shinya Kogami', 'Psycho Pass', 'Dark 🌙', 'https://i.ibb.co/mbv2jDY/5782a96881f7.png', 100, 67, 83, 80, 67, 3, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "Being a detective isn't about bringing someone down, but rather protecting someone.", 420], ['Shion', 'Tensei Shitara Slime Datta Ken', 'Grass 🍃', 'https://i.ibb.co/6NbdPJf/9a3817cacc86.png', 78, 101, 78, 67, 46, 5, '**Time Attack**: Deal __5__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base ATK as **Grass** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', "My name is Shion. I am Rimuru-sama's No.1 secretary. Now listen up you humans. ", 421], ['Shirai Kuroko', 'A Certain Scientific Railgun', 'Neutral ✨', 'https://i.ibb.co/W6jXhJL/1173ebaa0b8f.png', 73, 89, 72, 89, 33, 6, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'You must always follow your convictions and act in the way you feel is right at all times. ', 422], ['Shirley Fenette', 'Code Geass', 'Fire 🔥', 'https://i.ibb.co/qmz2H3w/6b7335852290.png', 88, 76, 63, 98, 43, 5, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "Don't break them up! Love is power! When you love someone, that has... incredible power. ", 423], ['Shiro', 'No Game No Life', 'Water 💧', 'https://i.ibb.co/dByPP11/e69f66dc81b4.png', 82, 96, 80, 66, 48, 6, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', 'Chess is no different than tic-tac-toe. ', 424], ['Shirou Emiya', 'Fate', 'Fire 🔥', 'https://i.ibb.co/Dg4TZfB/b88490be27f4.png', 72, 90, 85, 80, 2, 8, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', "I don't mind losing to someone, but I won't be beaten by myself. ", 425], ['Shizue Izawa', 'Tensei Shitara Slime Datta Ken', 'Fire 🔥', 'https://i.ibb.co/RHRNL5D/234da1630fc3.png', 85, 67, 90, 83, 46, 6, '**Time Attack**: Deal __5__% of your base DEF as **Fire** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __9__% of your base DEF as **Fire** damage. The damage increases by 40% for every turn passed.', '**Time Attack**: Deal __10__% of your base DEF as **Fire** damage. The damage increases by 40% for every turn passed.', '<:TIME_ATTACK:762150609741676585>', 'Your lax attitude is what will get you killed. ', 426], ['Shogo Makishima', 'Psycho Pass', 'Dark 🌙', 'https://i.ibb.co/pzHThfZ/dd27670928f8.png', 95, 76, 70, 88, 67, 4, '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __10__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __18__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __20__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '<:MIRACLE_INJECTION:853196724315357185>', 'People will gladly seek out any form of excitement, even pain.', 427], ['Shokuhou Misaki', 'A Certain Scientific Railgun', 'Neutral ✨', 'https://i.ibb.co/kXz0Cqz/90903b5ca21b.png', 78, 93, 81, 71, 33, 7, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'You are weak, from the moment you could only use your life as an excuse for committing crimes, you insulted that very life. ', 428], ['Sho Suzuki', 'Mob Psycho 100', 'Neutral ✨', 'https://i.ibb.co/1GZzxdf/7f057d488796.png', 68, 95, 68, 97, 56, 4, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', 'Attack is the best defense. ', 429], ['Shota Aizawa (Eraser Head)', 'My Hero Academia', 'Electric ⚡', 'https://i.ibb.co/WpvcHdv/d66f2bd2a395.png', 63, 87, 78, 97, 17, 13, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'They’ve been exposed to the outside world, up close and personal. They’ve had that fear planted in them. And they’ve endured it. ', 430], ['Shoto Todoroki', 'My Hero Academia', 'Water 💧', 'https://i.ibb.co/Mk490BG/1ebc2c0157d3.png', 96, 84, 75, 64, 17, 14, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'If you wanna stop this, then stand up, because I’ve got one thing to say to you. Never forget who you want to become! ', 431], ['Shoyo Hinata', 'Haikyuu!!', 'Light ☀️', 'https://i.ibb.co/dfMj11P/cb30cd77bf9d.png', 70, 89, 72, 102, 53, 4, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', "If you're the king that rules the court, I'll have to defeat you, and I'll be the last one standing! ", 432], ['Shrek', 'Shrek', 'Neutral ✨', 'https://i.ibb.co/TMyyrsN/db165e8684a3.png', 80, 88, 75, 95, 0, 1, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', "What are ya doin' in my swamp?! ", 433], ['Shusei Kagari', 'Psycho Pass', 'Electric ⚡', 'https://i.ibb.co/fSWjmS5/da10f6557409.png', 68, 78, 99, 81, 67, 5, '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __10__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __18__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '**Miracle Injection** [PSV]: Start off the battle by decreasing your HP and max HP by __20__%. Increase your SPD/ATK/DEF by the amount decreased x2.', '<:MIRACLE_INJECTION:853196724315357185>', 'Both you and I are trash who simply envy the happiness others have.', 434], ['Sinbad', 'Magi', 'Grass 🍃', 'https://i.ibb.co/hMW9bjP/dfd216f6a9e3.png', 80, 89, 71, 83, 34, 7, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'The world is still filled with too many unreasonable things. I accept all those who will stand against such inequalities. ', 435], ['Sinon', 'Sword Art Online', 'Light ☀️', 'https://i.ibb.co/Rjp8Hzf/1a135f8ccc32.png', 74, 87, 75, 90, 12, 8, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'One shot, one kill. ', 436], ['Skeleton', 'Halloween Event', 'Dark 🌙', 'https://i.ibb.co/Dpq8RXj/13847b39eb1a.png', 75, 75, 75, 75, 0, 2, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', 'Surprise! A spooky scary skeleton. Looks like it can be merged for a stronger card. ', 437], ['Soma Yukihira', 'Shokugeki No Soma', 'Fire 🔥', 'https://i.ibb.co/s1vHcc6/82ee420f7364.png', 86, 86, 70, 85, 57, 10, '**Mana Reaver**: Absorb up to __20__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __36__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '**Mana Reaver**: Absorb up to __40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 [damage is further multiplied by number of enemy familiars].', '<:MANA_REAVER:822730882497511425>', 'Do me a favour and stop deciding other people’s happiness for them. ', 438], ['Son Goku', 'Dragon Ball', 'Electric ⚡', 'https://i.ibb.co/NnMh2Yx/51f48a6e9a51.png', 80, 91, 70, 85, 29, 5, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'I could go one step farther if I wanted to! ', 439], ['Sora', 'No Game No Life', 'Fire 🔥', 'https://i.ibb.co/ftz4Mmg/08a93cab49cc.png', 92, 55, 76, 89, 48, 7, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'Life is not a game of luck. If you wanna win, work hard. ', 440], ['Sosuke Aizen', 'Bleach', 'Dark 🌙', 'https://i.ibb.co/cy0BJBp/3b8d359694ef.png', 81, 92, 73, 80, 11, 7, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'Fear is necessary for evolution. ', 441], ['Souei', 'Tensei Shitara Slime Datta Ken', 'Water 💧', 'https://i.ibb.co/M1fcXfr/1bb39b2c4f2e.png', 74, 80, 80, 90, 46, 7, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'Apologizing would be meaningless. I am the one who shall make the final judgment. ', 442], ['Soul Evans', 'Soul Eater', 'Light ☀️', 'https://i.ibb.co/R2rQCJv/3b9595d58336.png', 65, 85, 85, 91, 42, 9, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'The fear of interacting with people…even I understand that one. ', 443], ['Spike Spiegel', 'Cowboy Bebop', 'Neutral ✨', 'https://i.ibb.co/gyvfc56/5016dcbe4f4d.png', 81, 98, 71, 80, 60, 4, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'I’ve bled all of that blood away. [清风澈] ', 444], ['Squalo', 'Katekyo Hitman Reborn', 'Water 💧', 'https://i.ibb.co/2WBpLwP/073c6a183d90.png', 86, 82, 86, 76, 30, 8, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', 'Don’t think. Feel. ', 445], ['Staz C Blood', 'Blood Lad', 'Dark 🌙', 'https://i.ibb.co/p0fKfSS/23b204b644a5.png', 90, 87, 80, 64, 40, 6, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', 'The ones who do what they want and enjoy the most of their lives are the ones who win in the end. ', 446], ['Stephanie Dola', 'No Game No Life', 'Light ☀️', 'https://i.ibb.co/fXw5FPv/bea2a8522c1b.png', 86, 72, 96, 70, 48, 8, '**Amplifier**: Increase the DEF of all allied familiars by __13__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __23__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '**Amplifier**: Increase the DEF of all allied familiars by __26__% for each allied familiar of the same type as the wielder. [This effect is doubled if your team only consists of 1 familiar]', '<:AMPLIFIER:761984740353638410>', 'A temporary defeat is nothing if it leads to ultimate victory! ', 447], ['Subaru Natsuki', 'Re:Zero', 'Dark 🌙', 'https://i.ibb.co/0fPLf7N/231c381c59de.png', 82, 80, 80, 80, 13, 8, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', 'As long as I have life, all I can do is fight with all my might. ', 448], ['Suika', 'Dr. Stone', 'Grass 🍃', 'https://i.ibb.co/dJnwBbp/fd9258c5eaaa.png', 88, 82, 78, 78, 28, 5, '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __40__%. Their ATK increases by __5__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __72__%. Their ATK increases by __9__% every turn after that.', '**Grievous Limiter** [PSV]: When the battle starts, decrease the ATK of enemy familiars by __80__%. Their ATK increases by __10__% every turn after that.', '<:GRIEVOUS_LIMITER:761987435072061493>', "Suika just wants to be helpful! And Suika's a pro at scouting! ", 449], ['Suou Pavlichenko', 'Darker Than Black', 'Neutral ✨', 'https://i.ibb.co/jD60VbX/b57943a179c3.png', 76, 97, 75, 83, 8, 5, '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __20__% and raise their DEF by __35__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __36__% and raise their DEF by __63__%.', '**Protector** [PSV]: When your health drops below 25%, restore the HP of all allied familiars by __40__% and raise their DEF by __70__%.', '<:PROTECTOR:761986497959690261>', "Not like you're gonna die, right? ", 450], ['Suzaku Kururugi', 'Code Geass', 'Neutral ✨', 'https://i.ibb.co/fGQH9hV/b1d801093d7a.png', 83, 79, 71, 87, 43, 6, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'To desire some results, one must take actions. ', 451], ['Suzuha Amane', 'Steins Gate', 'Neutral ✨', 'https://i.ibb.co/64whRxz/0fced7cb5aaa.png', 76, 92, 70, 88, 1, 5, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their DEF.', '<:VENGEANCE:761979331471736842>', 'Everyone gets help from someone else at some point in their lives. So someday, you should help someone too. ', 452], ['Suzuya Juuzou', 'Tokyo Ghoul', 'Light ☀️', 'https://i.ibb.co/3fYyQHx/0b34d1102a23.png', 72, 66, 94, 90, 6, 7, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', 'Why should I apologize for being a monster? ', 453], ['Sword Maiden', 'Goblin Slayer', 'Light ☀️', 'https://i.ibb.co/5sqFCqR/55d6184f4bc2.png', 75, 84, 70, 96, 58, 6, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', "People are … women are weak creatures. I'm the woman who defeated the demon lord, and yet I'm scared of some goblins. ", 454], ['Takasugi Shinsuke', 'Gintama', 'Neutral ✨', 'https://i.ibb.co/CWYTkHr/15603713f9a6.png', 80, 84, 75, 88, 52, 7, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'I simply destroy. I will destroy this rotten world he created. ', 455], ['Takehisa Hinawa', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/qj9pTT1/57a7c7a123c1.png', 88, 77, 58, 90, 55, 9, "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __60__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", "**Trickroom**: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'Fire soldiers do not play with fire. ', 456], ['Takeshi Yamamoto', 'Katekyo Hitman Reborn', 'Water 💧', 'https://i.ibb.co/hLsgSx1/4efac2904ff4.png', 78, 101, 76, 65, 30, 9, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'It’s not about what you should do, it’s about what you want to do. ', 457], ['Takumi Aldini', 'Shokugeki No Soma', 'Light ☀️', 'https://i.ibb.co/6b5pnHn/a9f74e1d4b54.png', 78, 84, 70, 92, 57, 11, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "You said you were a pro. Then, as another pro, I can't lose to you!!!  ", 458], ['Tamaki Kotatsu', 'Fire Force', 'Fire 🔥', 'https://i.ibb.co/yFcxFDf/2d1d17a01dab.png', 87, 93, 70, 76, 55, 10, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'Huh? What are you looking at? [hybridmink] ', 459], ['Tanjiro Kamado', 'Kimetsu No Yaiba', 'Water 💧', 'https://i.ibb.co/6wbpMkX/85bbed126ea0.png', 80, 82, 77, 89, 23, 6, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', 'I swear your big brother will save you no matter what! ', 460], ['Tatsumaki', 'One Punch Man', 'Grass 🍃', 'https://i.ibb.co/TmPXRNC/78f58792bbd1.png', 74, 78, 69, 98, 36, 6, "**Dexterity Drive**: Deal **Grass** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Grass** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Grass** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'Living your life has nothing to do with what others think. ', 461], ['Tatsumi', 'Akame Ga Kill!', 'Dark 🌙', 'https://i.ibb.co/QbR5pxZ/b5a3e70d3c0f.png', 87, 78, 78, 87, 24, 5, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', 'The reason doesn’t matter. As long as a tiny bit of hope exists, that’s all that matters. ', 462], ['Teruki Hanazawa', 'Mob Psycho 100', 'Light ☀️', 'https://i.ibb.co/vq2nfVP/462d05640a94.png', 77, 87, 80, 83, 56, 5, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "A star is shining not because it's being showered in light, but because he who emits light is a star. ", 463], ['Tet', 'No Game No Life', 'Dark 🌙', 'https://i.ibb.co/hXn9CC4/000dded68bba.png', 82, 84, 83, 78, 48, 9, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'In reality, the least interesting answer is usually the correct one. ', 464], ['Tetsuro Kuroo', 'Haikyuu!!', 'Neutral ✨', 'https://i.ibb.co/TWDRG6W/a7f638b836f2.png', 90, 79, 81, 74, 53, 5, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', "Isn't it more fun having enemies you can't seem to beat? ", 465], ['Tobio Kageyama', 'Haikyuu!!', 'Fire 🔥', 'https://i.ibb.co/jWNRVnp/a1cc09b21772.png', 70, 91, 92, 72, 53, 6, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'The last ones standing are the victors, only the strongest. If you want to be the last one standing, become strong. ', 466], ['Toge Inumaki', 'Jujutsu Kaisen', 'Neutral ✨', 'https://i.ibb.co/92ZXHR2/b1ce08951c48.png', 86, 89, 73, 81, 65, 5, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', "Don't move!", 467], ['Tohka Yatogami', 'Date A Live', 'Water 💧', 'https://i.ibb.co/G0NGKvQ/3b9812f06da2.png', 65, 92, 99, 62, 35, 7, "**Executioner** [PSV]: When the enemy's health is below __27__%, increase your ATK by __50__%.", "**Executioner** [PSV]: When the enemy's health is below __48__%, increase your ATK by __90__%.", "**Executioner** [PSV]: When the enemy's health is below __54__%, increase your ATK by __100__%.", '<:EXECUTIONER:822346953131032627>', 'You were there for me, you saved me, much like how today, you asked me out on a date and showed me how nice this world is. ', 468], ['Tohru', "Ms. Kobayashi's Dragon Maid", 'Fire 🔥', 'https://i.ibb.co/P6DCbwS/863f1ddc6e6f.png', 80, 75, 88, 84, 7, 7, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', "Now then, Kanna, we're going to have you learn the commonsense of this society. ", 469], ['Toko Fukawa', 'Danganronpa', 'Dark 🌙', 'https://i.ibb.co/rp9XjDS/9be8f3cdb613.png', 78, 77, 80, 94, 54, 9, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', "If you want to live, you can't always take. ", 470], ['Tony Tony Chopper', 'One Piece', 'Ground ⛰️', 'https://i.ibb.co/P9ZQvXp/36dcf2c261eb.png', 90, 72, 97, 64, 10, 9, '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __15__%, and simultaneously increasing their base HP and ATK by __30__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __27__%, and simultaneously increasing their base HP and ATK by __54__%.', '**Transformation** [PSV]: When the battle starts, decrease the SPD of all allied familiars by __30__%, and simultaneously increasing their base HP and ATK by __60__%.', '<:TRANSFORMATION:761987074194145330>', "I'll become a doctor that can cure anything! ", 471], ['Toshiro Hitsugaya', 'Bleach', 'Water 💧', 'https://i.ibb.co/4T7gfpL/aaefc82c23be.png', 91, 80, 89, 60, 11, 8, '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __10__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18__%.', '**Freeze**: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __20__%.', '<:FROZEN:762161134618148945>', 'We are all like fireworks, rising, shining, scattering, and finally fading. ', 472], ['Touka Kirishima', 'Tokyo Ghoul', 'Dark 🌙', 'https://i.ibb.co/yFKtpbN/c01c8e4d4238.png', 75, 83, 84, 86, 6, 8, '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '**Poison**: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.', '<:POISON:762020787560513576>', "You're just afraid of being alone, aren't you? ", 473], ['Trafalgar D Law', 'One Piece', 'Water 💧', 'https://i.ibb.co/Tv1mwrh/c08fb7110816.png', 87, 74, 81, 80, 10, 10, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', "You can't see the whole picture until you look at it from the outside ! ", 474], ['Trunks', 'Dragon Ball', 'Electric ⚡', 'https://i.ibb.co/K7zPHTw/cf5469cff58c.png', 88, 80, 82, 77, 29, 6, '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '**Time Bomb**: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.', '<:TIME_BOMB:762205873459298324>', "You should know that a weapon doesn't make a man. ", 475], ['Tsubaki Kasugano', 'Mirai Nikki', 'Dark 🌙', 'https://i.ibb.co/TW3ZLR5/769b61f847a4.png', 67, 88, 77, 89, 31, 4, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'Sources of suffering always come from the unseen world. ', 476], ['Tsukasa Shishio', 'Dr. Stone', 'Ground ⛰️', 'https://i.ibb.co/yfsxsmx/0c02c6362ccb.png', 90, 91, 71, 75, 28, 6, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', 'This is a stone world. An untainted paradise. ', 477], ['Tsukuyo', 'Gintama', 'Ground ⛰️', 'https://i.ibb.co/JvQz47B/02dfdd71c813.png', 83, 89, 73, 81, 52, 8, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', "If you don't hold a rose carefully, you'll get pierced by its thorns. ", 478], ['Tsumugi Kotobuki', 'K-On!', 'Light ☀️', 'https://i.ibb.co/fFRFGVC/164e68457b8e.png', 72, 77, 85, 91, 21, 4, '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '**Regeneration**: Buffs ally familiars with a stack of **Regeneration**,  healing them for a small amount every turn.', '<:REGENERATION:761980753026088961>', "You and Mio-chan...you're hitting on each other and bonding through bodily contact right? ", 479], ['Tsunayoshi Sawada (Tsuna)', 'Katekyo Hitman Reborn', 'Fire 🔥', 'https://i.ibb.co/5RzVhqD/633c7576d343.png', 70, 95, 87, 67, 30, 10, "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __15__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27__%.", "**Underdog** [PSV]: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __30__%.", '<:UNDERDOG:822681928796602408>', 'Be more confident despite your weaknesses and failures. ', 480], ['Ukyo Saionji', 'Dr. Stone', 'Grass 🍃', 'https://i.ibb.co/wBQqN84/3c6d970be0f7.png', 70, 90, 78, 83, 28, 7, '**Breaker**: Decrease the ATK of all enemy familiars by __20__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __36__%.', '**Breaker**: Decrease the ATK of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', "Gods and devils don't make tools. Humans are the ones who decide how to use them. ", 481], ['Ulquiorra Schiffer', 'Bleach', 'Dark 🌙', 'https://i.ibb.co/8c1bfgL/913714e2438e.png', 82, 92, 79, 65, 11, 9, '**Overload** [PSV]: When the battle starts, increase the ATK by __55__% of all allied familiars. Your ATK decreases by __8__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __99__% of all allied familiars. Your ATK decreases by __14__% every turn after that.', '**Overload** [PSV]: When the battle starts, increase the ATK by __110__% of all allied familiars. Your ATK decreases by __16__% every turn after that.', '<:OVERLOAD:761996083425443840>', 'Those who know despair, once knew hope. Those who know loss, once knew love. ', 482], ['Usagi Tsukino (Sailor Moon)', 'Sailor Moon', 'Light ☀️', 'https://i.ibb.co/VYp8hYy/4b902712aeef.png', 94, 79, 61, 91, 37, 8, "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __60__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", "**Trickroom**: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.", '<:TRICK_ROOM:761996115410944013>', 'I am Sailor Moon! I stand for love. And I also stand for justice. And in the name of the Moon, I will punish you! ', 483], ['Usopp', 'One Piece', 'Neutral ✨', 'https://i.ibb.co/2y4wFdb/c0cfb88bc5e9.png', 70, 74, 86, 93, 10, 11, "**Dexterity Drive**: Deal **Neutral** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Neutral** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Neutral** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', 'There comes a time when a man has to stand and fight! ', 484], ['Uzu Sanageyama', 'Kill La Kill', 'Grass 🍃', 'https://i.ibb.co/122y1P8/81bf0a6ecc1c.png', 82, 73, 78, 90, 45, 7, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'I’m gonna show you what happens when you force a man to change. ', 485], ['Vegeta', 'Dragon Ball', 'Electric ⚡', 'https://i.ibb.co/8PdmL5L/8f8d48553f77.png', 80, 92, 73, 75, 29, 7, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their DEF.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their DEF.', '<:VENGEANCE:761979331471736842>', "It's over 9000! ", 486], ['Vicious', 'Cowboy Bebop', 'Dark 🌙', 'https://i.ibb.co/N22bPxn/12c41ca03d7d.png', 90, 90, 70, 75, 60, 5, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'When angels are forced out of heaven, they become devils. ', 487], ['Violet Evergarden', 'Violet Evergarden', 'Grass 🍃', 'https://i.ibb.co/TLxvwNn/7ec335985eee.png', 74, 93, 80, 90, 0, 3, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'I finally know what ‘I love you’ means.', 488], ['Wave', 'Akame Ga Kill!', 'Water 💧', 'https://i.ibb.co/RSys4P7/701d7ff972f2.png', 75, 92, 71, 88, 24, 6, '**Evasion**: Increase your EVASION by __16__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __28__%, allowing you to dodge enemy attacks.', '**Evasion**: Increase your EVASION by __32__%, allowing you to dodge enemy attacks.', '<:EVASION:761980728120049684>', 'Protecting the powerless is simply a soldier’s duty! ', 489], ['Wendy Marvell', 'Fairy Tail', 'Light ☀️', 'https://i.ibb.co/Jsdpprf/7c232c7c9ea5.png', 61, 92, 80, 89, 27, 12, '**Elemental Strike**: Deal **Light** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Light** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'The fact that I’m standing here means that I’m also prepared to fight on behalf of my guild. I don’t need your pity. ', 490], ['Wiz', 'Konosuba', 'Water 💧', 'https://i.ibb.co/TcjyN5L/3cbc80f774fc.png', 85, 72, 85, 88, 18, 7, '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __30__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __54__%.', '**Berserker** [PSV]: While your health is *low*, increase the DEF of all allied familiars by __60__%.', '<:BERSERKER:762221455345451019>', "Aren't you supposed to face the other way when using my lap as a pillow? ", 491], ['Wolf', 'Blood Lad', 'Neutral ✨', 'https://i.ibb.co/LxbmF28/3e47676cb00d.png', 70, 89, 81, 86, 40, 7, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', 'From the day I was born, I was never satisfied with any result. ', 492], ['Yami Sukehiro', 'Black Clover', 'Dark 🌙', 'https://i.ibb.co/rtMY0G6/1d12243af4c8.png', 98, 105, 71, 82, 3, 6, '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '**Recoil** [PSV]: Inflict a stack of **Recoil** to both you and your opponent [this status cannot be resisted], dealing 3% of your HP as **True** damage per turn.', '<:RECOIL:761978373693112380>', 'Protect whatever is precious to you. One day it’ll lead you to protect something else. ', 493], ['Yato', 'Noragami', 'Neutral ✨', 'https://i.ibb.co/Ss4Cg0T/2389136202d4.png', 76, 85, 82, 80, 47, 6, '**Breaker**: Decrease the DEF of all enemy familiars by __20__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __36__%.', '**Breaker**: Decrease the DEF of all enemy familiars by __40__%.', '<:BREAKER:761981342245191700>', 'Even if things are painful and tough, people should appreciate what it means to be alive. ', 494], ['Yin', 'Darker Than Black', 'Water 💧', 'https://i.ibb.co/rQGzY7w/50b78fe983ac.png', 86, 88, 68, 77, 8, 6, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'I thought my soul would be able to move foward. ', 495], ['Yoichi Saotome', 'Owari No Seraph', 'Grass 🍃', 'https://i.ibb.co/bzNNwVV/693de3f85211.png', 94, 80, 82, 65, 39, 8, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'I haven’t forgotten my sister. I’ll never forget. ', 496], ['Yoko Kurama', 'Yu Yu Hakusho', 'Grass 🍃', 'https://i.ibb.co/QXzs7rN/f041282073da.png', 71, 95, 81, 81, 66, 5, "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __17__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30__%.", "**Dominance** [PSV]: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __34__%.", '<:DOMINANCE:822706719137464320>', 'Underestimating an opponent is the first step towards defeat.', 497], ['Yoshino', 'Date A Live', 'Water 💧', 'https://i.ibb.co/GtdrZ9v/55156fef6d67.png', 83, 82, 81, 80, 35, 8, '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '**Temporal Rewind** [PSV]: Buff your allies with a stack of **Temporal Rewind** [this does not stack, and refreshes the ability instead]. After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the same amount to your opponent.', '<:TEMPORAL_REWIND:761996063971475467>', "Y-you said I'm cute? ", 498], ['Yotsuba Nakano', 'The Quintessential Quintuplets', 'Grass 🍃', 'https://i.imgur.com/HBeoXM5.png', 80, 80, 85, 80, 63, 6, '**Reversion** [PSV]: Once your health drops below __20__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __12__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __36__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21__% after the reversion.', '**Reversion** [PSV]: Once your health drops below __40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __24__% after the reversion.', '<:REVERSION:822684998514901002>', "I'll support you with everything I've got!", 499], ['Yui', 'Angel Beats', 'Neutral ✨', 'https://i.ibb.co/jyWMw04/fe31d44e47f3.png', 84, 72, 76, 100, 14, 4, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'For all our sake I will sing and pee my heart out in the name of spirit! ', 500], ['Yuichiro Hyakuya', 'Owari No Seraph', 'Fire 🔥', 'https://i.ibb.co/3BJNv6C/3eeaea78c111.png', 80, 80, 75, 87, 39, 9, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'I live only for revenge against those blood-sucking bastards. If I can’t kill monsters of this level, what use am I going to be? ', 501], ['Yui Hirasawa', 'K-On!', 'Light ☀️', 'https://i.ibb.co/8zfhRHr/1aa314975f9f.png', 67, 94, 71, 86, 21, 5, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'I have one last request. Please slap me in the face with that wad of cash. ', 502], ['Yu Ishigami', 'Love Is War', 'Neutral ✨', 'https://i.ibb.co/64s13Yb/28fdf84aacdd.png', 72, 92, 80, 83, 61, 7, '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __18__% attack damage your allies deal, as well as increasing all healing effects by __15__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __32__% attack damage your allies deal, as well as increasing all healing effects by __27__% [up to a maximum of 50%].', '**Bloodthirster** [PSV]: Increases your LIFESTEAL, restoring HP equal to __36__% attack damage your allies deal, as well as increasing all healing effects by __30__% [up to a maximum of 50%].', '<:BLOODTHIRSTER:761986478564966400>', "I think I'm coming down with Stockholm syndrome, so I'm heading home for today. [N/A] ", 503], ['Yuji Itadori', 'Jujutsu Kaisen', 'Ground ⛰️', 'https://i.ibb.co/WxtMDXB/8ec7348d6443.png', 80, 90, 75, 85, 65, 6, '**Unlucky Coin**: Roll a __20__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '**Unlucky Coin**: Roll a __36__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '**Unlucky Coin**: Roll a __40__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.', '<:UNLUCKY_COIN:853202656116604938>', "I don't know how I'll feel when I'm dead, But I don't want to regret the way I lived.", 504], ['Yukichi Fukuzawa', 'Bungou Stray Dogs', 'Water 💧', 'https://i.ibb.co/kMtg94W/c564ee9b5500.png', 89, 94, 65, 77, 64, 8, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'One of our own is in danger. We must help him. What greater rationale do we need in this world?', 505], ['Yukina', 'Yu Yu Hakusho', 'Water 💧', 'https://i.ibb.co/gts5hfB/a90e2b972bf1.png', 83, 92, 77, 80, 66, 6, '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __20__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __36__%, and heal allied familiars equal to 2.5x your max Mana.', '**Celestial Blessing** : Increase your max Mana [up to 600 total] and Mana Regeneration by __40__%, and heal allied familiars equal to 2.5x your max Mana.', '<:CELESTIAL_BLESSING:853196185250299955>', 'Stay still, I can use some of my powers to heal your wounds.', 506], ['Yukine', 'Noragami', 'Water 💧', 'https://i.ibb.co/rbSHdM5/359c5d60782f.png', 74, 83, 90, 76, 47, 7, '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '**Divine Blessing** [PSV]: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.', '<:DIVINE_BLESSING:822684110312439820>', "Why can I still feel physical things? Even though I'm already dead... ", 507], ['Yuki Nonaka', 'Shinmai Maou No Testament', 'Light ☀️', 'https://i.ibb.co/NTtjqVH/0e31c1dd5fed.png', 83, 84, 76, 83, 38, 7, "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __15__% of your base HP as **True** damage. Otherwise, this skill deals __5__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __27__% of your base HP as **True** damage. Otherwise, this skill deals __9__% of your base HP as **True** damage.", "**Balancing Strike**: If your HP % is lower than the enemy's HP %, deal __30__% of your base HP as **True** damage. Otherwise, this skill deals __10__% of your base HP as **True** damage.", '<:BALANCING_STRIKE:762151963432321075>', 'Whatever other people may say, Basara was the one who came to rescue me. ', 508], ['Yukio Okumura', 'Ao No Exorcist', 'Neutral ✨', 'https://i.ibb.co/q9qdr28/4c890ffa1c7e.png', 71, 95, 74, 85, 44, 7, "**Celestial Influence** [PSV]: Start off the battle with __40__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __10__%.", "**Celestial Influence** [PSV]: Start off the battle with __72__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18__%.", "**Celestial Influence** [PSV]: Start off the battle with __80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __20__%.", '<:CELESTIAL_INFLUENCE:762515675138228274>', 'We just want to protect our friends and our world no matter what! ', 509], ['Yukiteru Amano', 'Mirai Nikki', 'Neutral ✨', 'https://i.ibb.co/Snq8sLr/d2d7e4734db6.png', 98, 66, 100, 64, 31, 5, '**Offensive Stance**: Increase the ATK of all allied familiars by __40__%, and simultaneously decrease their DEF by __10__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __72__%, and simultaneously decrease their DEF by __18__%.', '**Offensive Stance**: Increase the ATK of all allied familiars by __80__%, and simultaneously decrease their DEF by __20__%.', '<:OFFENSIVE_STANCE:762020854115598395>', 'If there’s a miracle that can be reached by fighting to the end, then I want to see it. ', 510], ['Yumeko Jabami', 'Kakegurui', 'Dark 🌙', 'https://i.ibb.co/Tv6fY9C/7818fc337ed8.png', 60, 90, 90, 90, 62, 5, '**Lucky Coin**: Roll a __20__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __36__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '**Lucky Coin**: Roll a __40__ sided dice. Your allied familiars gain the amount rolled x 3 HP/ATK/DEF/SPD at random.', '<:LUCKY_COIN:762151933720920094>', 'I dislike situations where I know for sure If I’m going to win or lose. Because it’s not really gambling. ', 511], ['Yu Nishinoya', 'Haikyuu!!', 'Electric ⚡', 'https://i.ibb.co/Vvfth6j/ebd6a8253236.png', 92, 71, 82, 82, 53, 7, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "Life's a bore if you don't challenge yourself. ", 512], ['Yuno', 'Black Clover', 'Grass 🍃', 'https://i.ibb.co/HFzZgYy/05d6b75ee2a6.png', 68, 84, 84, 87, 3, 7, '**Elemental Strike**: Deal **Grass** damage based on __10__% of your DEF.', '**Elemental Strike**: Deal **Grass** damage based on __18__% of your DEF.', '**Elemental Strike**: Deal **Grass** damage based on __20__% of your DEF.', '<:METEOR:761978476856082494>', "I don't know any other people's dreams, the only dreams I know are my own. ", 513], ['Yuno Gasai', 'Mirai Nikki', 'Dark 🌙', 'https://i.ibb.co/7vHTYKy/11a3d94ff547.png', 75, 90, 83, 70, 31, 6, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', "I'm crazy?? What's crazy is this world that refuses to let me be with you! ", 514], ['Yunyun', 'Konosuba', 'Water 💧', 'https://i.ibb.co/x2DJcCx/e0b44bc3a040.png', 72, 93, 91, 69, 18, 8, '**Vengeance**: Deal **True** damage to all enemy familiars equal to __11__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __19__% of their ATK.', '**Vengeance**: Deal **True** damage to all enemy familiars equal to __22__% of their ATK.', '<:VENGEANCE:761979331471736842>', "Now, Megumin, today we'll have our duel! ", 515], ['Yuri', 'DDLC', 'Dark 🌙', 'https://i.ibb.co/YpWVst2/16690ec1eb4e.png', 78, 87, 85, 75, 0, 4, '**Pain For Power**: Sacrifice __7__% of your allies current HP to increase the ATK and SPD of all allied familiars by __30__%.', '**Pain For Power**: Sacrifice __12__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54__%.', '**Pain For Power**: Sacrifice __14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __60__%.', '<:PAIN_FOR_POWER:822680746342219816>', 'Every time I talk to you... I just feel really happy. ', 516], ['Yuriko Nishinotouin', 'Kakegurui', 'Grass 🍃', 'https://i.ibb.co/wRwRvPx/d00ead942bd1.png', 76, 85, 75, 89, 62, 6, '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '**Restricted Instinct**: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.', '<:SILENCE:761973325369966612>', 'Stess is the greatest enemy of beauty. ', 517], ['Yuri Nakamura', 'Angel Beats', 'Neutral ✨', 'https://i.ibb.co/98mWBzB/ca8ac2e35fd8.png', 73, 85, 82, 87, 14, 5, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'We have no choice but to accept the one and only life we’re given, no matter how cruel and heartless it might be. ', 518], ['Yusuke Urameshi', 'Yu Yu Hakusho', 'Electric ⚡', 'https://i.ibb.co/Yfc63qJ/f8fb861cea53.png', 98, 73, 72, 78, 66, 7, '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '**Endurance**: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.', '<:ENDURANCE:762515664878960650>', "You shouldn't talk. It makes you sound stupid.", 519], ['Yuta Okkotsu', 'Jujutsu Kaisen', 'Dark 🌙', 'https://i.ibb.co/Q965nPv/2dcecbd614c6.png', 85, 93, 73, 76, 65, 7, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Sorry, did I scare you?', 520], ['Yuzuru Otonashi', 'Angel Beats', 'Neutral ✨', 'https://i.ibb.co/tpy15BZ/ef10ed24e5a8.png', 85, 87, 70, 87, 14, 6, '**Precision**: Increase the CRIT of ally familiars by __16__%, and increase CRIT DMG by __20__%.', '**Precision**: Increase the CRIT of ally familiars by __28__%, and increase CRIT DMG by __36__%.', '**Precision**: Increase the CRIT of ally familiars by __32__%, and increase CRIT DMG by __40__%.', '<:PRECISION:761983520041467985>', 'Even if we forget the faces of our friends, we will never forget the bonds that were carved into our souls. ', 521], ['Zenitsu Agatsuma', 'Kimetsu No Yaiba', 'Electric ⚡', 'https://i.ibb.co/XLvN6ZX/3e298e0db95e.png', 80, 73, 87, 88, 23, 7, '**Paralysis**: Gain a __40__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __10__%.', '**Paralysis**: Gain a __72__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18__%.', '**Paralysis**: Gain a __80__% chance to inflict a stack of **Stun** to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __20__%.', '<:PARALYSIS:762161115840643092>', 'Don’t ever give up. Even if it’s painful, even if it’s agonizing, don’t try to take the easy way out. ', 522], ['Zero Two', 'Darling In The Franxx', 'Light ☀️', 'https://i.ibb.co/qxqzw8r/4f5d6cd512e6.png', 87, 84, 76, 79, 32, 6, '**Double-edged Strike**: Deal **Light** damage equal to __15__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Light** damage equal to __27__% of your DEF, and take 1/4 of the damage dealt to yourself.', '**Double-edged Strike**: Deal **Light** damage equal to __30__% of your DEF, and take 1/4 of the damage dealt to yourself.', '<:DOUBLE_EDGED_STRIKE:762205908628930590>', 'Don’t worry, we’ll always be together, Until the day we die. ', 523], ['Zest', 'Shinmai Maou No Testament', 'Dark 🌙', 'https://i.ibb.co/LRGZNvq/9002a3c9a925.png', 80, 71, 83, 95, 38, 8, "**Dexterity Drive**: Deal **Dark** damage equal to __5__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __9__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", "**Dexterity Drive**: Deal **Dark** damage equal to __10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.", '<:DEXTERITY_DRIVE:762020812281610250>', "You're no match for me! ", 524], ['Zombieman', 'One Punch Man', 'Dark 🌙', 'https://i.ibb.co/cwvtLSq/c5470847a8b3.png', 70, 97, 69, 83, 36, 7, '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __45__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __81__%.', '**Blood Surge** [PSV]: When your health becomes *low*, increase the LIFESTEAL of all allies by __90__%.', '<:BLOOD_SURGE:822703762660392961>', 'Man, this is back-breaking work. Literally. ', 525], ['Zora Ideale', 'Black Clover', 'Dark 🌙', 'https://i.ibb.co/M94bfc7/eab1e173040e.png', 91, 95, 71, 66, 3, 8, '**Elemental Strike**: Deal **Dark** damage based on __10__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __18__% of your ATK.', '**Elemental Strike**: Deal **Dark** damage based on __20__% of your ATK.', '<:METEOR:761978476856082494>', 'My father was my pride. ', 526]
        ]
        // for (eachcard of cardList) {
        // if (eachcard[15]<31) {
        //     console.log(`['${eachcard[0]}', '${eachcard[3]}', '${eachcard[8]}', '${eachcard[15]}'],\n`)
        // }}
        var rdHelpChannel = client.channels.cache.get(`868557742783221761`)
        var getEmoji = emojiName => client.emojis.cache.find(emoji => emoji.name === emojiName)
        var emojis = {
            //0
            UNDERDOG: `Underdog: While your HP % is lower than the enemy's HP %, increase the ATK/DEF of all allies by __27/30__%.`,
            //1
            ULTIMATE_COMBO: `Ultimate Combo: Every time this ability is casted, increase your Fighting Counter by 1. This skill deals __5/6__% of your SPD x the amount of Fighting Counters you have as True damage. If your allied familiars have a total of 3 Fighting Counters, this skill deals __54/60__% of your opponent's max HP as True damage instead, and your Fighting Counters are reset back to 0.`,
            //2
            TRICK_ROOM: `Trickroom: If the enemy familiars' ATK/DEF is higher than yours, your allies gain ATK/DEF equal to __108/120__% of the difference between the two ATK/DEF's, and simultaneously reduce their ATK/DEF by the same amount.`,
            //3
            TRANSFORMATION: `Transformation: When the battle starts, decrease the SPD of all allied familiars by __27/30__%, and simultaneously increasing their base HP and ATK by __54/60__%.`,
            //4
            TIME_BOMB: `Time Bomb: Inflict a stack of **Time Bomb** to enemy familiars, dealing 30% of your ATK as **True** damage after 1 turn.`,
            //5
            TIME_ATTACK: `Time Attack: Deal __9/10__% of your base ATK/DEF as **?Element** damage. The damage increases by __40/40__% for every turn passed.`,
            //6
            TEMPORAL_REWIND: `Temporal Rewind: Start off the battle buffing your allies with a stack of **Temporal Rewind** (this does not stack, and refreshes the ability instead). After 3 turns, restore your HP to half the difference between your original HP and your current HP, and deal the healed amount to your opponent.`,
            //7
            SOUL_STEALER: `Soul Stealer: Absorb __5/6__% of the enemy familiars' DEF every turn.`,
            //8
            SILENCE: `Restricted Instinct: Inflicts a stack of **Silence** on enemy familiars for up to 3 turns, restricting any of their abilities to be used.`,
            //9
            REVERSION: `Reversion: Once your health drops below __36/40__%, revert the stats and HP of all allied and enemy familiars back to their base stats. Your allied familiars also increase their DEF/SPD by __21/24__% after the reversion.`,
            //10
            REJUVENATION: `Rejuvenation: Restore the HP of all allied familiars by __21/24__%, as well as increasing healing effects on allied familiars by __18/20__%, up to a maximum of 50% heal increase.`,
            //11
            REGENERATION: `Regeneration: Buffs ally familiars with a stack of **Regeneration**, healing them for a small amount every turn.`,
            //12
            RECOIL: `Recoil: Inflict a stack of **Recoil** to both you and your opponent (this status cannot be resisted), dealing 3% of your HP as True damage per turn.`,
            //13
            PROTECTOR: `Protector: When your HP drops below 25%, all allied familiars restore __36/40__% HP as well as increasing their DEF by __63/70__%.`,
            //14
            PRECISION: `Precision: Increase the CRIT of ally familiars by __28/32__%, and increase CRIT DMG by __36/40__%.`,
            //15
            POISON: `Poison: Inflict a stack of **Poison** to enemy familiars, dealing 5 + 5% true damage every turn it persists.`,
            //16
            PARALYSIS: `Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
            //17
            PAIN_FOR_POWER: `Pain For Power: Sacrifice __12/14__% of your allies current HP to increase the ATK and SPD of all allied familiars by __54/60__%.`,
            //18
            OVERLOAD: `Overload: When the battle starts, increase the ATK by __99/110__% of all allied familiars. Your ATK decreases by __14/16__% every turn after that.`,
            //19
            OFFENSIVE_STANCE: `Offensive Stance: Increase the ATK of all allied familiars by __72/80__%, and simultaneously decrease their DEF by __18/20__%.`,
            //20
            METEOR: `Elemental Strike: Deals **Elemental** damage based on __18/20__% of your HP/ATK/DEF.`,
            //21
            MANA_REAVER: `Mana Reaver: Absorb up to __36/40__% Mana from enemy familiars, and deal **True** damage equal to the Mana absorbed x10 (damage is further multiplied by number of enemy familiars).`,
            //22
            LUCKY_COIN: `Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
            //23
            LIFE_SAP: `Life Sap: Every round, deal __3/4__% of the enemy familiars' max HP as damage, and heal for 150% of the damage dealt.`,
            //24
            GRIEVOUS_LIMITER: `Grievous Limiter: When the battle starts, decrease the ATK of enemy familiars by __72/80__%. Their ATK increases by __9/10__% every turn after that.`,
            //25
            FROZEN: `Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
            //26
            EXECUTIONER: `Executioner: When the enemy's health is below __48/54__% increase your ATK by __90/100__%.`,
            //27
            EVASION: `Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
            //28
            ENDURANCE: `Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
            //29
            DOUBLE_EDGED_STRIKE: `Double-edged Strike: Deals **Elemental** damage equal to __27/30__% of your ATK/DEF/SPD, and take ¼ of the damage dealt to yourself.`,
            //30
            DOMINANCE: `Dominance: While your HP % is greater than or equal to the enemy's HP %, increase the ATK of allies by __30/34__%.`,
            //31
            DIVINE_BLESSING: `Divine Blessing: Start off the battle with a stack of **Divine Blessing**, increasing your ATK/DEF by 45%.`,
            //32
            DEXTERITY_DRIVE: `Dexterity Drive: Deal **Elemental** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
            //33
            CELESTIAL_INFLUENCE: `Celestial Influence: Start off the battle with __72/80__% increased Mana Regen, while decreasing enemy familiars' Mana Regen by __18/20__%.`,
            //34
            BURN: `Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
            //35
            BREAKER: `Breaker: Decrease the ATK/DEF of all enemy familiars by __36/40__%.`,
            //36
            BLOODTHIRSTER: `Bloodthirster: Increases your LIFESTEAL, restoring HP equal to __32/36__% of the normal attack damage your allies deal, as well as increasing all healing effects by __27/30__% (up to a maximum of 50%).`,
            //37
            BLOOD_SURGE: `Blood Surge: When your health becomes low, increase the LIFESTEAL of all allies by __81/90__%.`,
            //38
            BERSERKER: `Berserker: While your health is low, increase the ATK/DEF of all allied familiars by 54/60%.`,
            //39
            BALANCING_STRIKE: `Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
            //40
            AMPLIFIER: `Amplifier: Increase the ATK/DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
            //41
            UNLUCKY_COIN: `Unlucky Coin: Roll a __36/40__ sided dice. Enemy familiars have their HP/ATK/DEF/SPD reduced by the amount rolled x 2 at random.`,
            //42
            CELESTIAL_BLESSING: `Celestial Blessing: Increase your max Mana (up to 600 total) and Mana Regeneration by __36/40__%, and heal allied familiars equal to 2.5x your max Mana.`,
            //43
            MIRACLE_INJECTION: `Miracle Injection: Start off the battle by decreasing your HP and max HP by __18/20__%. Increase your SPD/ATK/DEF by the amount decreased x2.`,
            //44
            VENGEANCE: `Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK/DEF/SPD.`
        }

        let diffEmojis = []
        for (let keys in emojis) {
            let emoji = getEmoji(keys)
            diffEmojis.push(emoji)
        }
        let eachEmoji = diffEmojis.filter(emoji => !emoji.animated).map(emoji => `<:${emoji.name}:${emoji.id}>`);
        var myDatabase = [
            // {
            //     name1: `test`,
            //     name2: `anigame`,
            //
            //
            //
            //     cardName: `Anigame`,
            //     basicComposition: `No Composition`,
            //     cardImage: '',
            //     cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
            //     cardTalent : `No Talent :sparkles:`,
            //     cardType: `Neutral :sparkles:`,
            //     cardColor: '#A9A6A5'
            // },
            {
                name1: `2b`,
                name2: `2b`,
                rareInfo: `**HP**:1414\n**ATK**:1714\n**DEF**:1166\n**SPD**:1449\n\n**PL**:5743`,
                srInfo: `**HP**:1450\n**ATK**:1759\n**DEF**:1196\n**SPD**:1487\n\n**PL**:5829`,
                urInfo: `**HP**:1508\n**ATK**:1828\n**DEF**:1244\n**SPD**:1545\n\n**PL**:6125`,
                cardName: `2B`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/rodnYcpZ8RpoPrk5www8S_gQwq2mGLXoEmQpfcm5HxQ/https/i.ibb.co/0XgcjLp/c3cae03eae5b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Mio Naruse, Sr/Ur Garou\n\n**Note: You May Need Some RNG To Cap 2B Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `9s`,
                name2: `9s`,
                rareInfo: `**HP**:1661\n**ATK**:1184\n**DEF**:1591\n**SPD**:1343\n\n**PL**:5779`,
                srInfo: `**HP**:1704\n**ATK**:1215\n**DEF**:1632\n**SPD**:1378\n\n**PL**:5929`,
                urInfo: `**HP**:1771\n**ATK**:1262\n**DEF**:1696\n**SPD**:1432\n\n**PL**:6161`,
                cardName: `9S`,
                basicComposition: `Offensive Strike, (DEF) Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/8esMmiZx_EX7N4ODz4Yo-GAZZpvBHeDVhvx1agwqeBE/https/i.ibb.co/19Z7BdB/1d07c0121215.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Erwin, Sr/Ur Kenma, Sr/Ur Zomieman\n\n**Note: You May Need Some RNG To Cap 9S Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `accelerator`,
                name2: `accelerator`,
                rareInfo: `**HP**:1290\n**ATK**:1573\n**DEF**:1237\n**SPD**:1573\n\n**PL**:5673`,
                srInfo: `**HP**:1323\n**ATK**:1614\n**DEF**:1269\n**SPD**:1614\n\n**PL**:5820`,
                urInfo: `**HP**:1376\n**ATK**:1677\n**DEF**:1319\n**SPD**:1677\n\n**PL**:6049`,
                cardName: `Accelerator`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/_bQGfkXDBeCZecQmofHsIKRDlHtizOJAZa2hVyDCUXo/https/i.ibb.co/Wx9mR3K/5e1ce88ba2b5.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Artoria, Sr/Ur Garou/Byakuya\n\n**Note: You May Need Some RNG To Cap Accelerator Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `Ai`,
                name2: `Hayasaki`,
                rareInfo: `**HP**:1555\n**ATK**:1555\n**DEF**:1007\n**SPD**:1644\n\n**PL**:5761`,
                srInfo: `**HP**:1595\n**ATK**:1595\n**DEF**:1033\n**SPD**:1686\n\n**PL**:5909`,
                urInfo: `**HP**:1658\n**ATK**:1658\n**DEF**:1074\n**SPD**:1753\n\n**PL**:6143`,
                cardName: `Ai Hayasaka`,
                basicComposition: `Overload, Limiter, Bloodthirster`,
                cardImage: 'https://images-ext-2.discordapp.net/external/bkaUbS_lYIlrB9b3DdmGaAXiGBvxXm1IAhVt_wzD6Xk/https/i.ibb.co/XbcYYzG/d7e9bd181d2d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rock Lee, Sr/Ur Suika, Sr/Ur Tsukasa\n\n**Note: You May Need Some RNG To Cap Ai Hayaksa Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            }, // Completed
            {
                name1: `ainz`,
                name2: `gown`,
                rareInfo: `**HP**:1449\n**ATK**:1750\n**DEF**:1166\n**SPD**:1379\n\n**PL**:5744`,
                srInfo: `**HP**:1487\n**ATK**:1795\n**DEF**:1196\n**SPD**:1414\n\n**PL**:5892`,
                urInfo: `**HP**:1545\n**ATK**:1866\n**DEF**:1244\n**SPD**:1470\n\n**PL**:6125`,
                cardName: `Ainz Ooal Gown`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/PvRLc7aLmg3w2KgnyS5IwQxUMe6amM46HhtPAvxb6MY/https/i.ibb.co/dPGckHS/090e479781ab.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Mio Naruse, Sr/Ur Garou/Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Ainz Ooal Gown Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Dark** damage based on __18/20__% of your ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            }, // Completed
            {
                name1: `ais`,
                name2: `wallenstein`,
                rareInfo: `**HP**:1202\n**ATK**:1644\n**DEF**:1661\n**SPD**:1166\n\n**PL**:5673`,
                srInfo: `**HP**:1233\n**ATK**:1686\n**DEF**:1704\n**SPD**:1196\n\n**PL**:5819`,
                urInfo: `**HP**:1281\n**ATK**:1753\n**DEF**:1771\n**SPD**:1244\n\n**PL**:6049`,
                cardName: `Ais Wallenstein`,
                basicComposition: `Double Trickroom, Surge\nCelestial Blessing, Endurance, Time Attack (DEF)`,
                cardImage: 'https://images-ext-2.discordapp.net/external/fPk5cBUtpt1e_a_gSrEYL83teeYFmDg7-8OzhNA_g1k/https/i.ibb.co/bF3bHyh/dac718938fe3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Doppo/Yukina, Sr/Ur Mayu/Fushiguro, Sr/Ur Mine\n\n**Note: You May Need Some RNG To Cap Ais Wallenstein Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `akame`,
                name2: `akame`,
                rareInfo: `**HP**:1502\n**ATK**:1414\n**DEF**:1219\n**SPD**:1520\n\n**PL**:5655`,
                srInfo: `**HP**:1541\n**ATK**:1450\n**DEF**:1251\n**SPD**:1559\n\n**PL**:5801`,
                urInfo: `**HP**:1602\n**ATK**:1508\n**DEF**:1300\n**SPD**:1621\n\n**PL**:6031`,
                cardName: `Akame`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\nEndurance, Underdog (DEF)/Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/xr-AKuMrGdkX8MgvZcq1BZs3Wq8AAV0nni7cocYg_Vc/https/i.ibb.co/dMn2RKM/ccf00bbfeda5.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Mio Naruse, Sr/Ur Garou/Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Maria/Wiz, Sr/Ur No Face/Iris \n\n**Note: You May Need Some RNG To Cap Akame Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            }, // Completed
            {
                name1: `akane`,
                name2: `tsunemori`,
                rareInfo: `**HP**:1361\n**ATK**:1573\n**DEF**:1644\n**SPD**:1096\n\n**PL**:5674`,
                srInfo: `**HP**:1396\n**ATK**:1614\n**DEF**:1686\n**SPD**:1124\n\n**PL**:5820`,
                urInfo: `**HP**:1451\n**ATK**:1677\n**DEF**:1753\n**SPD**:1168\n\n**PL**:6049`,
                cardName: `Akane Tsunemori`,
                basicComposition: `Double Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/e6mF6FEYoXrrIsun1T1C-8xeADHud46IrhyChJqTAXg/https/i.ibb.co/R0jMfzh/326784a64f59.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Hinawa, Sr/Ur Wolf/Byakuya\n\n**Note: You May Need Some RNG To Cap Akane Tsunemori Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `akeno`,
                name2: `himejima`,
                rareInfo: `**HP**:1096\n**ATK**:1750\n**DEF**:1255\n**SPD**:1608\n\n**PL**:5709`,
                srInfo: `**HP**:1124\n**ATK**:1795\n**DEF**:1287\n**SPD**:1650\n\n**PL**:5856`,
                urInfo: `**HP**:1168\n**ATK**:1866\n**DEF**:1338\n**SPD**:1715\n\n**PL**:6087`,
                cardName: `Akeno Himejima`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge/ BloodThirst\nPain For Power, Breaker (DEF), Surge/ BloodThirst`,
                cardImage: 'https://images-ext-2.discordapp.net/external/kQs9IoR_NjyZbbxXWQvkUVubJordTRkbf1kN6e7eklQ/https/i.ibb.co/wyPbwyQ/71e012356ab9.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka/Ranpo, Sr/Ur Senku, Sr/Ur Garou/Tsukasa\n\n**__2nd Composition__** : Sr/Ur Erza, Sr/Ur Senku, Sr/Ur Garou/Tsukasa\n\n**Note: You May Need Some RNG To Cap Akeno Himejima Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            }, // Completed
            {
                name1: `akiko`,
                name2: `yosano`,
                rareInfo: `**HP**:1502\n**ATK**:1326\n**DEF**:1502\n**SPD**:1414\n\n**PL**:5744`,
                srInfo: `**HP**:1541\n**ATK**:1360\n**DEF**:1541\n**SPD**:1450\n\n**PL**:5892`,
                urInfo: `**HP**:1602\n**ATK**:1413\n**DEF**:1602\n**SPD**:1508\n\n**PL**:6125`,
                cardName: `Akiko Yosano`,
                basicComposition: `Celestial Blessing, Endurance, Time Attack\nPain For Power, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/4bw8UuBERIf1XTtt4ThTrhneodFOnYzBpshyDV4Gc9Y/https/i.ibb.co/GdvpdRK/3ee8420b2b54.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Doppo/Yukina , Sr/Ur Fushiguro, Sr/Ur Mine\n\n**__2nd Composition__** : Sr/Ur Misa, Sr/Ur Artoria, Ur Gasai\n\n**Note: You May Need Some RNG To Cap Akiko Yosano Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            //
            {
                name1: `akira`,
                name2: `hayama`,
                rareInfo: `**HP**:1290\n**ATK**:1467\n**DEF**:1255\n**SPD**:1768\n\n**PL**:5780`,
                srInfo: `**HP**:1323\n**ATK**:1505\n**DEF**:1287\n**SPD**:1813\n\n**PL**:5928`,
                urInfo: `**HP**:1376\n**ATK**:1564\n**DEF**:1338\n**SPD**:1885\n\n**PL**:6163`,
                cardName: `Akira Hayama`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Berserker (DEF), Surge\n`,
                cardImage: 'https://images-ext-1.discordapp.net/external/7Oglr3j84AVPGyK0rfkljoxXK7UmFL_megS3cqBOwA4/https/i.ibb.co/Bqg3Wxp/d970e52bf14b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Mio Naruse, Sr/Ur Garou/Tokisaki\n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Garou/Tokisaki\n\n**Note: You May Need Some RNG To Cap Akira Hayama Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            }, // Completed
            {
                name1: `akitaru`,
                name2: `obi`,
                rareInfo: `**HP**:1661\n**ATK**:1237\n**DEF**:1343\n**SPD**:1467\n\n**PL**:5708`,
                srInfo: `**HP**:1704\n**ATK**:1269\n**DEF**:1378\n**SPD**:1505\n\n**PL**:5856`,
                urInfo: `**HP**:1771\n**ATK**:1319\n**DEF**:1432\n**SPD**:1564\n\n**PL**:6086`,
                cardName: `Akitaru Obi`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack\nCelestial Blessing, Endurance/Rejuvenation, Time Attack/Elemental Strike`,
                cardImage: 'https://images-ext-1.discordapp.net/external/2Zne1S3lcNIem1C_y30T767FnZldbhArk7U0jU7yvd8/https/i.ibb.co/mtkSVNp/d5417b123afd.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion/Piccolo\n\n**__4th Composition__** : Sr/Ur Doppo Kunikida, Sr/Ur Josuke/Koshi, Sr/Ur Shion/Piccolo\n\n**Note: You May Need Some RNG To Cap Akitaru Obi Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            }, // Completed
            //
            {
                name1: `aladdin`,
                name2: `aladdin`,
                rareInfo: `**HP**:1131\n**ATK**:1343\n**DEF**:1485\n**SPD**:1714\n\n**PL**:5673`,
                srInfo: `**HP**:1160\n**ATK**:1378\n**DEF**:1523\n**SPD**:1759\n\n**PL**:5820`,
                urInfo: `**HP**:1206\n**ATK**:1432\n**DEF**:1583\n**SPD**:1828\n\n**PL**:6049`,
                cardName: `Aladdin`,
                basicComposition: `Double Trick, Surge\n(ATK) Trickroom, Underdog (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/HuZ6CAyFcEOaX2OE3TrD0hD1FeZZz0gF1ZocKRv5YhM/https/i.ibb.co/KLw6w5g/489faa99f17f.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Hinawa, Sr/Ur Ririka, Sr/Ur Byakuya/Wolf\n\n**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Ririka, Sr/Ur Byakuya/Wolf\n\n**Note: You May Need Some RNG To Cap Alladin Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `albedo`,
                name2: `albedo`,
                rareInfo: `**HP**:1697\n**ATK**:1661\n**DEF**:1184\n**SPD**:1184\n\n**PL**:5726`,
                srInfo: `**HP**:1740\n**ATK**:1704\n**DEF**:1215\n**SPD**:1215\n\n**PL**:5874`,
                urInfo: `**HP**:1809\n**ATK**:1771\n**DEF**:1262\n**SPD**:1262\n\n**PL**:6104`,
                cardName: `Albedo`,
                basicComposition: `(ATK) Trickroom, Recoil, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/tuj-v55P-O9FjojZCnRpdSpxYmQdLNDnQ2x-5a1Ssl0/https/i.ibb.co/pR81qFn/5b0137e2e666.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Alex, Sr/Ur Garou/Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Albedo Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            }, // Completed
            {
                name1: `alex`,
                name2: `louis`,
                rareInfo: `**HP**:1573\n**ATK**:1538\n**DEF**:1626\n**SPD**:1520\n\n**PL**:6257`,
                srInfo: `**HP**:1614\n**ATK**:1577\n**DEF**:1668\n**SPD**:1559\n\n**PL**:6418`,
                urInfo: `**HP**:1677\n**ATK**:1639\n**DEF**:1734n**SPD**:1734\n\n**PL**:6671`,
                cardName: `Alex Louis Armstrong`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nCelestial Blessing, Endurance, Time Attack`,
                cardImage: 'https://images-ext-2.discordapp.net/external/eNNog5nEWeU4C3HMr9hix4mEfeQIxVM2LWDpRTnn3eM/https/i.ibb.co/MRvf1Xm/3fdd81769d02.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sayaka, Sr/Ur Kurapika, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Doppo/Yukina, Sr/Ur Fushiguro, Sr/Ur Mine/Megumi Natsu\n\n**Note: You May Need Some RNG To Cap Alex Louis Armstrong Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `alibaba`,
                name2: `saluja`,
                rareInfo: `**HP**:1414\n**ATK**:1343\n**DEF**:1697\n**SPD**:1255\n\n**PL**:5709`,
                srInfo: `**HP**:1450\n**ATK**:1378\n**DEF**:1740\n**SPD**:1287\n\n**PL**:5855`,
                urInfo: `**HP**:1508\n**ATK**:1432\n**DEF**:1809\n**SPD**:1338\n\n**PL**6087`,
                cardName: `Alibaba Saluja`,
                basicComposition: `(DEF) Trickroom, Precision, Surge\nDouble Trickroom, Surge/Bloodthirster`,
                cardImage: 'https://images-ext-1.discordapp.net/external/q44pgqXvh6JDH-tfkchOvYC46uJLrHamyxlHKflbkKU/https/i.ibb.co/G38bQ6D/66a1974c227b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Sr/Ur Zombieman/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Sr/Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Alibaba Saluja Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            }, // Completed
            {
                name1: `alicenakiri`,
                name2: `nakiri`,
                rareInfo: `**HP**:1432\n**ATK**:1290\n**DEF**:1343\n**SPD**:1679\n\n**PL**:5744`,
                srInfo: `**HP**:1468\n**ATK**:1323\n**DEF**:1378\n**SPD**:1722\n\n**PL**:5891`,
                urInfo: `**HP**:1526\n**ATK**:1376\n**DEF**:1432\n**SPD**:1790\n\n**PL**:6124`,
                cardName: `Alice Nakiri`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\nEndurance/Amplifier (DEF), Double Life Saps\nCelestial Blessing, Endurance/Rejuvenation, Time Attack/Elemental Strike `,
                cardImage: 'https://images-ext-1.discordapp.net/external/2e6wnAEoqJIIXuJSzmzU9Or6f35hu_vetGKl67uE8gI/https/i.ibb.co/6ZxWtyP/ebd39b212ba0.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Riko, Sr/Ur Garou/Byakuya/Tsukasa \n\n**__2nd Composition__** : Sr/Ur Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito \n\n**__3rd Composition__** : Sr/Ur Josuke/Kagura/Obi, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito \n\n**__4th Composition__** : Sr/Ur Doppo Kunikida, Sr/Ur Josuke/Koshi, Sr/Ur Shion/Piccolo\n\n**Note: You May Need Some RNG To Cap Alice Nakiri Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            }, // Completed 
            {
                name1: `alicezuberg`,
                name2: `zuberg`,
                rareInfo: `**HP**:1326\n**ATK**:1520\n**DEF**:1732\n**SPD**:1149\n\n**PL**:5727`,
                srInfo: `**HP**:1360\n**ATK**:1559\n**DEF**:1777\n**SPD**:1178\n\n**PL**:5874`,
                urInfo: `**HP**:1413\n**ATK**:1621\n**DEF**:1847\n**SPD**:1225\n\n**PL**:6106`,
                cardName: `Alice Zuberg`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge\nOffensive Stance, (DEF) Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/1Rj3ddHtixAb9enp8F3ccADhRdXJosqyX1Fw4IMJmOE/https/i.ibb.co/68jxJxG/b1b3bc0bb719.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya\n\n**__4th Composition__** : Sr/Ur Accelerator, Sr/Ur Kenma, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Alice Zuberg Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `all`,
                name2: `might`,
                rareInfo: `**HP**:1502\n**ATK**:1661\n**DEF**:1343\n**SPD**:1184\n\n**PL**:5690`,
                srInfo: `**HP**:1541\n**ATK**:1704\n**DEF**:1378\n**SPD**:1215\n\n**PL**:5838`,
                urInfo: `**HP**:1602\n**ATK**:1771\n**DEF**:1432\n**SPD**:1262\n\n**PL**:6067`,
                cardName: `All Might`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Berserker (DEF), Surge\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/7lbUrOKtQatuuglN2d9gH0NRhWADxgs20SLbTCPASrE/https/i.ibb.co/Cw423rt/3cc9fe1001f7.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Mio Naruse, Sr/Ur Garou/Byakuya\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Wiz, Sr/Ur Garou/Byakuya\n\n**__3rd Composition__** : Sr/Ur Mayu, Sr/Ur Wiz, Sr/Ur Iris\n\n**Note: You May Need Some RNG To Cap All Might Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27/30__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `amber`,
                name2: `amber`,
                rareInfo: `**HP**:1396\n**ATK**:1750\n**DEF**:1467\n**SPD**:1166\n\n**PL**:5779`,
                srInfo: `**HP**:1432\n**ATK**:1795\n**DEF**:1505\n**SPD**:1196\n\n**PL**:5928`,
                urInfo: `**HP**:1489\n**ATK**:1866\n**DEF**:1564\n**SPD**:1244\n\n**PL**:6163`,
                cardName: `Amber`,
                basicComposition: `(ATK) Trickroom, Endurance, Surge\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/gQVAPR7yxGt5mlqUq7-Zl078U3k_YVsJ3YYyWt8d2OI/https/i.ibb.co/12S48r7/308ffeb9605a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Mayu, Sr/Ur Garou/Byakuya\n\n**__2nd Composition__** : Sr/Ur Mayu, Sr/Ur Wiz, Sr/Ur Iris\n\n**Note: Round 2 Must Be Non-Crit. You May Need Some RNG To Cap Amber Raids**.\n\n||Just .rd leave My Friend||`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            //
            {
                name1: `ami`,
                name2: `mizuno`,
                rareInfo: `**HP**:1272\n**ATK**:1485\n**DEF**:1237\n**SPD**:1732\n\n**PL**:5726`,
                srInfo: `**HP**:1305\n**ATK**:1523\n**DEF**:1269\n**SPD**:1777\n\n**PL**:5874`,
                urInfo: `**HP**:1357\n**ATK**:1583\n**DEF**:1319\n**SPD**:1847\n\n**PL**:6106`,
                cardName: `Ami Mizuno (Sailor Mercury)`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/xfRpzkn8MUHDziI9Gk4oG9oTw8IzXe-ZfecUumgDyno/https/i.ibb.co/L0Kg5Xp/e4516e84477d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck\n\n**Note: You May Need Some RNG To Cap Ami Mizuno (Sailor Mercury) Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            }, // Completed
            {
                name1: `android`,
                name2: `18`,
                cardName: `Android 18`,
                basicComposition: `(ATK) Trickroom, Protector, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/-vzhFpbwy5tsWoj-_iB7l7ljJXSQxoG1P-uXQIhBrR0/https/i.ibb.co/bRT5ZMc/fc18e323b685.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Elaine, Sr/Ur Garou/Byakuya\n\n**Note: You May Need Some RNG To Cap Android 18 Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            }, // Not Completed
            {
                name1: `annie`,
                name2: `leonhart`,
                rareInfo: `**HP**:1697\n**ATK**:1697\n**DEF**:1149\n**SPD**:1237\n\n**PL**:5780`,
                srInfo: `**HP**:1740\n**ATK**:1740\n**DEF**:1178\n**SPD**:1269\n\n**PL**:5927`,
                urInfo: `**HP**:1809\n**ATK**:1809\n**DEF**:1225\n**SPD**:1319\n\n**PL**:6162`,
                cardName: `Annie Leonhart`,
                basicComposition: `(ATK) Trickroom, Endurance/Berkserker (DEF) , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/gfH3iDEutxS3zQ2asLH6JzXAMUo8mNo2nBJ-1GzO5Mo/https/i.ibb.co/rxRGNSS/b47b938dffc3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Yu Nishinoya, Sr/Ur Dio Brando \n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Tanjiro/Wiz, Sr/Ur Dio Brando\n\n**Note: You May Need Some RNG To Cap Annie Leonhart Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            }, // Completed
            {
                name1: `aoi`,
                name2: `asahina`,
                rareInfo: `**HP**:1272\n**ATK**:1361\n**DEF**:1608\n**SPD**:1538\n\n**PL**:5779`,
                srInfo: `**HP**:1305\n**ATK**:1396\n**DEF**:1650\n**SPD**:1577\n\n**PL**:5928`,
                urInfo: `**HP**:1357\n**ATK**:1451\n**DEF**:1715\n**SPD**:1639\n\n**PL**:6162`,
                cardName: `Aoi Asahina`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge\nRegeneration, Berserker (DEF), Time Attack/ Elemetal Strike/Veangence\Celestial Blessing, Endurance, Time Attack/ Elemetal Strike/Veangence`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Q1QEdjdIjYg-ty-GB6c-r2A3ZwRuOp9LuCMq_ECdStk/https/i.ibb.co/M1vqrbd/d960dd5072a6.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Dio Brando/Luck Voltia \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Dio Brando/Luck Voltia \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Dio Brando/Luck Voltia\n\n**__4th Composition__** : Sr/Ur Edward, Sr/Ur Wiz, Sr/Ur Ritsu/Vegeta\n\n**__5th Composition__** : Sr/Ur Yukina, Sr/Ur Yu Nishinoya/Gintoki, Sr/Ur Ritsu/Vegeta\n\n**Note: You May Need Some RNG To Cap Aoi Asahina Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            }, // Completed
            {
                name1: `aqua`,
                name2: `aqua`,
                rareInfo: `**HP**:1414\n**ATK**:1644\n**DEF**:1502\n**SPD**:1202\n\n**PL**:5762`,
                srInfo: `**HP**:1450\n**ATK**:1686\n**DEF**:1541\n**SPD**:1233\n\n**PL**:5910`,
                urInfo: `**HP**:1508\n**ATK**:1753\n**DEF**:1602\n**SPD**:1281\n\n**PL**:6144`,
                cardName: `Aqua`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\nDouble Trickroom, Surge\nCelestial Blessing, Endurance, Time Attack/Elemental Strike/Veangence`,
                cardImage: 'https://images-ext-1.discordapp.net/external/xmpbmasnev30K2Lfs-xo8NUDIqtoidyI_P4fU9rJ8rE/https/i.ibb.co/RYC3qmn/d7fb450453b2.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck\n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Kenma, Sr/Ur Dio Brando/Luck\n\n**__3rd Composition__** : Sr/Ur Yukina, Sr/Ur Yu Nishinoya/Gintoki, Sr/Ur Ritsu/Vegeta\n\n**Note: You May Need Some RNG To Cap Aqua Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            }, // Completed
            {
                name1: `arataka`,
                name2: `reigen`,
                rareInfo: `**HP**:1502\n**ATK**:1237\n**DEF**:1538\n**SPD**:1326\n\n**PL**:5603`,
                srInfo: `**HP**:1541\n**ATK**:1269\n**DEF**:1577\n**SPD**:1360\n\n**PL**:5747`,
                urInfo: `**HP**:1602\n**ATK**:1319\n**DEF**:1639\n**SPD**:1413\n\n**PL**:5973`,
                cardName: `Arataka Reigen`,
                basicComposition: `(DEF) Trickroom, Precision, Surge\nUnderdog (DEF)/Berserker (DEF), Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/60Lo_oY2Qj6Fn21c7NPlRrtGYJeizYt-TT6c9lmFh8Q/https/i.ibb.co/XX11txN/908aa181e6d2.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Sr/Ur Zombieman\n\n**__2nd Composition__** : Sr/Ur Wiz, Sr/Ur Artoria, Sr/Ur Yuno Gasai\n\n**__3rd Composition__** : Sr/Ur Maria Naruse, Sr/Ur Artoria, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Arataka Reigen Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `armin`,
                name2: `arlert`,
                rareInfo: `**HP**:1237\n**ATK**:1697\n**DEF**:1255\n**SPD**:1520\n\n**PL**:5709`,
                srInfo: `**HP**:1269\n**ATK**:1740\n**DEF**:1287\n**SPD**:1559\n\n**PL**:5855`,
                urInfo: `**HP**:1319\n**ATK**:1809\n**DEF**:1338\n**SPD**:1621\n\n**PL**:6087`,
                cardName: `Armin Arlert`,
                basicComposition: `(ATK) Trickroom, Double Sap\nEndurance/Berserker (DEF)/Amplifier (DEF), Double Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/2MLy7Jk0SXGll1gutPj7VRx00flGUTieKyX69h8t9jc/https/i.ibb.co/KFGdKQS/02c9e1ec970d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Josuke/Obi/Kagura, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Loke/Jiraiya/Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**Note: You May Need Some RNG To Cap Armin Arlert Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `arthur`,
                name2: `boyle`,
                cardName: `Arthur Boyle`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge/Bloodthirster\nAmplifier (DEF), Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/ibecYZ2izbRHJcSWc0o2DYiWyd0q4sUwpEjIuzrKAts/https/i.ibb.co/vcTJfs6/99d0f4cc7d34.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Mio Naruse, Sr/Ur Garou/Byakuya/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Jonathan Joestar/Noelle, Sr/Ur Natsuki, Sr/Ur Natsuki\nYou Can USe Sr/Ur Iris Instead Of Sr//Ur Natsuki\n\n**Note: You May Need Some RNG To Cap Arthur Boyle Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `artoria`,
                name2: `pendragon`,
                rareInfo: `**HP**:1520\n**ATK**:1644\n**DEF**:1326\n**SPD**:1149\n\n**PL**:5639`,
                srInfo: `**HP**:1559\n**ATK**:1686\n**DEF**:1360\n**SPD**:1178\n\n**PL**:5783`,
                urInfo: `**HP**:1621\n**ATK**:1753\n**DEF**:1413\n**SPD**:1225\n\n**PL**:6012`,
                cardName: `Artoria Pendragon`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nGrevious Limiter, (DEF) Trickroom, Surge\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/9Q1SagahkCh-Sqmt7ScrhM88ieA597qBeHwUmQFy0NQ/https/i.ibb.co/7WMFBfb/66e36f8f67fd.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sayaka, Sr/Ur Kurapika, Ur Kirari Momobami \n\n**__2nd Composition__** : Sr/Ur L, Sr/Ur Kenma, Sr/Ur Byakuya \n\n**__3rd Composition__** : Ur Hinawa/Kenma, Sr/Ur Ririka, Sr/Ur Byakuya\n\n**__4th Composition__** : Ur Ririka, Sr/Ur Kurapika, Sr/Ur Byakuya\n\n**Note: You May Need Some RNG To Cap Artoria Pendragon Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `aru`,
                name2: `akise`,
                cardName: `Aru Akise`,
                basicComposition: `Double Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/k3ZgQr__IUNzCuKV1mhmXAmKmpLOXJduZl0XyFG1R8Q/https/i.ibb.co/gFH6Bhg/748861de61c0.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Kenma, Sr/Ur Byakuya/Wolf\n\n**Note: You May Need Some RNG To Cap Aru Akise Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `asia`,
                name2: `argento`,
                cardName: `Asia Argento`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/kwEC5gxmMxPt9m9j3q5YDWH30M7E_N9vN_z6mEO3FXk/https/i.ibb.co/smJZXj0/6cf7ae9c080f.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka Momobami, Sr/Ur Artoria, Sr/Ur Byakuya\n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Asia Argento Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `asta`,
                name2: `asta`,
                cardName: `Asta`,
                basicComposition: `Overload, Limiter, Bloodthirster`,
                cardImage: 'https://images-ext-1.discordapp.net/external/wTiQc4LM82Pt0y8zGw8MLy4ckof9LVsRoqoD0-JaQ50/https/i.ibb.co/ykd3FLf/bfcce5983ce6.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ulquiorra Schiffer, Sr/Ur Mephisto, Sr/Ur Staz C Blood\n\n**__2nd Composition__** : Sr/Ur Liz, Sr/Ur Diablo, Sr/Ur Krul\n\n**Note: You May Need Some RNG To Cap Asta Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },

            {
                name1: `asuna`,
                name2: `yuuki`,
                cardName: `Asuna Yuuki`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/ENaf9nTexTheKa6oQFiKDxilhcVD-rHDnQCqYFlsoO8/https/i.ibb.co/G3k12mm/f79031e146fa.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck\n\n**__2nd Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Shoto, Sr/Ur Dio Brando/Luck\n\n**Note: You May Need Some RNG To Cap Asuna Yuuki Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `atsushi`,
                name2: `nakajima`,
                cardName: `Atsushi Nakajima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `ayano`,
                name2: `keiko`,
                cardName: `Ayano Keiko (Silica)`,
                basicComposition: `Overload, Limiter, BloodThirster`,
                cardImage: 'https://images-ext-1.discordapp.net/external/vxKOMjRQqLJR9KKLsWD5Lk_4PUZh3B2K9_rSNPx5oB8/https/i.ibb.co/T26bJw7/24351488a946.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Escanor, Sr/Ur Renzo, Sr/Ur Tokisaki\n\n**Note: You May Need Some RNG To Cap Ayano Keiko (Silica) Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kirishima`,
                name2: `kirishima`,
                cardName: `Ayato Kirishima`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/DOS-3il4LsATwHjQ9IaBTNZQX5bghUwlopWNHBj5pW0/https/i.ibb.co/VCBvY4L/27b33ccf6c8f.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Mio Naruse, Sr/Ur Yuno Gasai/Garou\n\n**Note: You May Need Some RNG To Cap Ayato Kirishima Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Dark** damage based on __18/20__% of your ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `naoi`,
                name2: `naoi`,
                cardName: `Ayato Naoi`,
                basicComposition: `Berserker (ATK), Breaker (DEF), Surge\n(DEF) Trickroom, Recoil, Surge/Life Sap\nOffensive Stance, (DEF) Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/GCuLag1rLPSjq6OSwiLjhg_iuyhr9-AJWfhJLMFqX0k/https/i.ibb.co/DgDZm2g/ce2e4766a8b4.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kurosaki, Sr/Ur Artoria, Sr/Ur Garou\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Yami, Sr/Ur Zombieman\n\n**__3rd Composition__** : Sr/Ur Erwin Smith, Sr/Ur Kenma, Sr/Ur Zombieman\n\n**Note: You May Need Some RNG To Cap Ayato Kirishima Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `azusa`,
                name2: `nakano`,
                cardName: `Azusa Nakano`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/QQqFh3Caasa8ZobexaSmTv79G8X3rpggd9M3D80l4xA/https/i.ibb.co/rfDX4HN/b2f244ce0ca2.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Artoria, Sr/Ur Byakuya\n\n**Note: You May Need Some RNG To Cap Azusa Nakano Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `bad`,
                name2: `metal`,
                cardName: `Bad (Metal Bat)`,
                basicComposition: `(ATK) Trickroom, Protector, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Elaine, Sr/Ur Garou/Byakuya\n\n**Note: You May Need Some RNG To Cap Bad (Metal Bat) Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `ban`,
                name2: `ban`,
                cardName: `Ban`,
                basicComposition: `(DEF) Trickroom, Precision, Surge\nOffensive Stance, (DEF) Trickroom, Surge\nBreaker (DEF), Berserker (ATK), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/525L_r1JlRe30EaerWyq5LevLAsyKzgOKfBSMmphYhM/https/i.ibb.co/fNR2cvF/b6092780224b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Minene/Prince, Sr/Ur Nico Robin, Ur Yuno Gasai\n\n**__3rd Composition__** : Sr/Ur Yato, Sr/Ur Kurosaki, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Ban Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `basara`,
                name2: `toujou`,
                cardName: `Basara Toujou`,
                basicComposition: `(ATK) Trickroom, Protector, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/oKu5kefvtJR9AcWdAjE0W_iReiFmVJL1CYe7IuSH_ak/https/i.ibb.co/ThC6V5B/687fc61c88cc.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Priestess, Sr/Ur Garou/Byakuya\n\n**Note: You May Need Some RNG To Cap Basara Toujou Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `bell`,
                name2: `cranel`,
                cardName: `Bell Cranel`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/k8N-QWwCc3Ehske19uB63s5RhFYQP-StAxiwXmlutjI/https/i.ibb.co/v4HBH2j/002195ea0310.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Bell Cranel Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `hydra`,
                name2: `hydra`,
                rareInfo: `**HP**:1485\n**ATK**:1573\n**DEF**:1166\n**SPD**:1449\n\n**PL**:5673`,
                srInfo: `**HP**:1523\n**ATK**:1614\n**DEF**:1196\n**SPD**:1487\n\n**PL**:5820`,
                urInfo: `**HP**:1583\n**ATK**:1677\n**DEF**:1244\n**SPD**:1545\n\n**PL**:6049`,
                cardName: `Bell Hydra`,
                basicComposition: `(ATK) Trickroom, Precision, Surge\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/GJRfcmldolvMNEQH6fMBfem4ZLEaV5iK_SyIZIR1HcM/https/i.ibb.co/58w32Sw/a8ec417ae317.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Shoto, Sr/Ur Garou/Byakuya\n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Wiz/Mayuri, Ur Iris/No Face\n\n**Note: You May Need Some RNG To Cap Bell Hydra Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108/120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            }, // Completed
            {
                name1: `benedict`,
                name2: `blue`,
                rareInfo: `**HP**:1679\n**ATK**:1538\n**DEF**:1202\n**SPD**:1414\n\n**PL**:5833`,
                srInfo: `**HP**:1722\n**ATK**:1577\n**DEF**:1233\n**SPD**:1450\n\n**PL**:5982`,
                urInfo: `**HP**:1790\n**ATK**:1639\n**DEF**:1281\n**SPD**:1508\n\n**PL**:6218`,
                cardName: `Benedict Blue`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Protector, Surge\nDouble Trickroom, Surge\nCelestial Blessing, Endurance, Time Attack/Elemental Strike`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Em_hqSP8RIQ8b14g1lQYssr52SzJCbVlJOjo2n5ddWY/https/i.ibb.co/SwWTGTj/4fbf33dd6194.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Motoyasu, Sr/Ur Dio Brando\n\n**__2nd Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Kanna, Sr/Ur Dio Brando\n\n**__3rd Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Kenma, Sr/Ur Dio Brando\n\n**__4th Composition__** : Ur Yukina, Ur Yu Nishinoya/Gintoki, Sr/Ur Ritsu\n\n**Note: You May Need Some RNG To Cap Benedict Blue Raids**.`,
                cardTalent: `${diffEmojis[43]} ${emojis.MIRACLE_INJECTION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `benimaru`,
                name2: `benimaru`,
                cardName: `Benimaru`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/c8UP5YnWAIKQjfXe9nA36Au4ZncdWHqSDK38q6YQhpA/https/i.ibb.co/m04yk9L/792026a6b3a8.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Motoyasu, Sr/Ur Garou/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Shoto, Sr/Ur Garou/Fuyumi\n\n**Note: You May Need Some RNG To Cap Benimaru Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as **Fire** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shinmon`,
                name2: `shinmon`,
                cardName: `Benimaru Shinmon`,
                basicComposition: `Overload, Limiter, BloodThirster`,
                cardImage: 'https://images-ext-2.discordapp.net/external/eKYJ4FfCUKdYKRAZCNPtnw0YVm9UahyM4MwfNAqqMPY/https/i.ibb.co/rpgYK7m/e90480f5facc.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ritsu Kageyama, Sr/Ur Shiro, Sr/Ur Fuyumi\n\n**Note: You May Need Some RNG To Cap Benimaru Shinmon Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `beros`,
                name2: `beros`,
                cardName: `Beros`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Double Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/C0H_j8UPYNjep7Kg6nJfR9nZK43y8HuBqLHauu4D6a4/https/i.ibb.co/5GTZJ1R/d97e72113584.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Mio Naruse, Sr/Ur Garou/Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Izumo, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Beros Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `bisha`,
                name2: `bishamonten`,
                cardName: `Bishamonten`,
                basicComposition: `Double Ur Trickroom, Surge\nApmlifier (DEF), Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/0v1_Hw7z52mxoKGRL0ui4jIJsItrd2-Za-v9rpzgJ9k/https/i.ibb.co/FKWWVYC/a538387fae11.png',
                cardTeams: `**__1st Composition__** : Ur Sora, Ur Hinawa, Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\nAll Srs Team Might Not Work.\n\n**Note: You May Need Some RNG To Cap Bishamonten Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `bisky`,
                name2: `krueger`,
                cardName: `Bisky Krueger`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nBerserker (DEF), Double Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/3-mfqVG5QHbWIceKdOEJhNPRJ2W0YiPnSU0bfZDg_0c/https/i.ibb.co/1z91PqH/188db518bc30.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Kurapika, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__3rd Composition__** : Sr/Ur Ririka, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**Note: You May Need Some RNG To Cap Bisky Krueger Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `black`,
                name2: `star`,
                rareInfo: `**HP**:1467\n**ATK**:1626\n**DEF**:1237\n**SPD**:1414\n\n**PL**:5744`,
                srInfo: `**HP**:1505\n**ATK**:1668\n**DEF**:1269\n**SPD**:1450\n\n**PL**:5892`,
                urInfo: `**HP**:1562\n**ATK**:1734\n**DEF**:1319\n**SPD**:1508\n\n**PL**:6125`,
                cardName: `Black Star`,
                basicComposition: `Surge, Protector, Breaker (DEF)\nEndurance, Double Surge\nTransformation, Regeneration, Rejuvenation`,
                cardImage: 'https://images-ext-2.discordapp.net/external/1_Wl9LqlwtxMa00RzAwVEkVkVjkRR385zDOHtKDQFyo/https/i.ibb.co/2MsY2Lg/2009f31aa381.png',
                cardTeams: `**__1st Composition__** : Ur Yuno Gasai, Ur Elaine, Sr/Ur Riko\n\n**__2nd Composition__** : Sr/Ur Josuke, Ur Ikumi Mito, Ur Ikumi Mito    ***Might Not Work**\n\n**__3rd Composition__** : Ur Kaede Kayano, Ur Liala, Ur Koshi Sugawara\n\n**Note: You May Need Alot Of RNG To Cap Black Star Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as Ground damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `blair`,
                name2: `blair`,
                cardName: `Blair`,
                basicComposition: `Amplifier (DEF), Double Sap\nEndurance, Double Sap\nBreaker (DEF), Precision, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/PENGGhCfXRkR6w5GOiwXKwYWvoEZrWBjPJuxjKPW-xU/https/i.ibb.co/2j9qmpb/157878e4bbb6.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian/Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Rize/Subaru, Sr/Ur No Face, Ur No Face\n\n**__3rd Composition__** : Sr/Ur Artoria, Sr/Ur Faye/Shoto, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Blair Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base HP as **Dark** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `botan`,
                name2: `botan`,
                cardName: `Botan`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[9]} ${emojis.REVERSION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `braz`,
                name2: `braz`,
                cardName: `Braz D Blood`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/5tHKGm1JWePqiIbclyiArkRrAkcyEsh9y2SU2TkZl6Y/https/i.ibb.co/84Ztwvc/64960f4144d5.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Ur Iris\n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Tanjiro, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Braz D Blood Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `brook`,
                name2: `brook`,
                cardName: `Brook`,
                basicComposition: `(ATK) Trickroom, Endurance, Surge/Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/Rrlc54KcDWE9B-YaFbZ4YWeuheXkKEB4ODJmln6Dqy4/https/i.ibb.co/vckZ2PK/f55fd9b32db0.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Rize, Sr/Ur Garou/Yuno Gasai/No Face\n\n**Note: You May Need Some RNG To Cap Brook Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `byakuya`,
                name2: `togami`,
                rareInfo: `**HP**:1573\n**ATK**:1237\n**DEF**:1608\n**SPD**:1326\n\n**PL**:5744`,
                srInfo: `**HP**:1614\n**ATK**:1269\n**DEF**:1650\n**SPD**:1360\n\n**PL**:5893`,
                urInfo: `**HP**:1677\n**ATK**:1319\n**DEF**:1715\n**SPD**:1413\n\n**PL**:6124`,
                cardName: `Byakuya Togami`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/8Klvzgeraxr37CMJOJwU0nwhIEum1MSCQi-MiMB-NiY/https/i.ibb.co/fSy7cLG/2eb241e6a7a1.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Byakuya Togami Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `c.c.`,
                name2: `c.c.`,
                rareInfo: `**HP**:1679\n**ATK**:1184\n**DEF**:1644\n**SPD**:1237\n\n**PL**:5744`,
                srInfo: `**HP**:1722\n**ATK**:1215\n**DEF**:1686\n**SPD**:1269\n\n**PL**:5892`,
                urInfo: `**HP**:1790\n**ATK**:1262\n**DEF**:1753\n**SPD**:1319\n\n**PL**:6124`,
                cardName: `C.C.`,
                basicComposition: `(DEF) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/U1gbxtL69MYQ1KeK_OySzwPcQfxjf_KenXGpWx0FEMY/https/i.ibb.co/KzwZDQ2/8901efab89eb.png',
                cardTeams: `**__1st Composition__** : Ur Kenma,  Ur Shoto, Sr/Ur Byakuya\n\n**Note: You May Need Some RNG To Cap C.C. Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `charmy`,
                name2: `pappitson`,
                cardName: `Charmy Pappitson`,
                basicComposition: `(ATK) Trickroom, Protector, Life Sap`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Charmy Pappitson Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `chiaki`,
                name2: `nanami`,
                cardName: `Chiaki Nanami`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Senku, Sr/Ur Garou/Byakuya\n\n**Note: You May Need Some RNG To Chiaki Nanami Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `chika`,
                name2: `fujiwara`,
                rareInfo: `**HP**:1538\n**ATK**:1591\n**DEF**:1449\n**SPD**:1166\n\n**PL**:5744`,
                srInfo: `**HP**:1577\n**ATK**:1632\n**DEF**:1487\n**SPD**:1196\n\n**PL**:5892`,
                urInfo: `**HP**:1639\n**ATK**:1696\n**DEF**:1545\n**SPD**:1244\n\n**PL**:6124`,
                cardName: `Chika Fujiwara`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/b1MUMai_q5PF_vaffh1UCcniJzI_5YbR3PxEgPPtOko/https/i.ibb.co/jWmgXh4/5674af9bd651.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Ririka, Sr/Ur Kenma, Sr/Ur Byakuya\n\n**Note: You May Need Some RNG To Cap Chika Fujiwara Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `child`,
                name2: `emperor`,
                cardName: `Child Emperor`,
                basicComposition: `Double Trickroom, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Wolf/Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Child Emperor Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `chino`,
                name2: `kafuu`,
                cardName: `Chino Kafuu`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck\n\n**Note: You May Need Some RNG To Cap Chino Kafuu Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `chisato`,
                name2: `hasegawa`,
                cardName: `Chisato Hasegawa`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge\nDouble Trickroom, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Wiz, Sr/Ur Garou/Byakuya\n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Wolf/Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Chisato Hasegawa Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `chiya`,
                name2: `ujimatsu`,
                cardName: `Chiya Ujimatsu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `chlammy`,
                name2: `zell`,
                cardName: `Chlammy Zell`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `chomusuke`,
                name2: `chomusuke`,
                cardName: `Chomusuke`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `chrome`,
                name2: `chrome`,
                cardName: `Chrome`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\nCelestial Blessing, Rejuvanation, Time Attack`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Violet/Riko, Sr/Ur Garou/Byakuya/Tsukasa\n\n**__2nd Composition__** : Sr/Ur Doppo, Ur Koshi, Sr/Ur Shion\n\n**Note: You May Need Some RNG To Cap Chrome Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Ground** damage based on __18/20__% of your ATK.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `cocoa`,
                name2: `hoto`,
                cardName: `Cocoa Hoto`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `colossal`,
                name2: `titan`,
                cardName: `Colossal Titan`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/xFnXgcnRa1UY0plv-kY5gopmbxyIxysQAl0qyhsgguc/https/i.ibb.co/xzYz9hR/1f9d8703b58d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Loke, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Colossal Titan Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `cornelia`,
                name2: `britannia`,
                cardName: `Cornelia Britannia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `cow`,
                name2: `girl`,
                cardName: `Cow Girl`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `crona`,
                name2: `crona`,
                cardName: `Crona`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/Mwi40QoPz_1DN17GsaZY4QwkjO9StCcicLfFmLw4XN0/https/i.ibb.co/Bss1665/41eae30be88a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Artoria, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Crona Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base DEF as **dark** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `crusch`,
                name2: `karsten`,
                cardName: `Crusch Karsten`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `dabi`,
                name2: `dabi`,
                cardName: `Dabi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the ATK of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `darkness`,
                name2: `darkness`,
                cardName: `Darkness`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `death`,
                name2: `kid`,
                cardName: `Death The Kid`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `demiurge`,
                name2: `demiurge`,
                cardName: `Demiurge`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-1.discordapp.net/external/D3TTbYTf5DzFz82fgstjRGl7ZrwvfZAwhyuFsGj9HII/https/i.ibb.co/P6dBRQQ/2ddc74225b58.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Yami Sukehiro, Sr/Ur Fuyumi \n\nUr Surge Can Be Used Insead Of Sr/Ur Fuyumi \n\n**Note: You May Need Some RNG To Cap Demiurge Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `denki`,
                name2: `kaminari`,
                cardName: `Denki Kaminari`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `diablo`,
                name2: `diablo`,
                cardName: `Diablo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `diane`,
                name2: `diane`,
                cardName: `Diane`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\nCelestial Blessing, Rejuvanation, Time Attack`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Violet/Riko, Sr/Ur Garou/Byakuya/Tsukasa\n\n**__2nd Composition__** : Sr/Ur Doppo, Ur Koshi, Sr/Ur Shion\n\n**Note: You May Need Some RNG To Cap Diane Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Elemental** damage based on __18/20__% of your ATK.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `dio`,
                name2: `brando`,
                cardName: `Dio Brando`,
                basicComposition: `Pain For Power, Breaker (DEF), Surge/Bloodthirster\nUnderdog (DEF), Breaker (DEF), Surge/Bloodthirster\nBerserker (DEF), Breaker (DEF), Surge/Bloodthirster\nAmplifier (DEF), Double Sap\nEndurance, Double Sap\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/cjxW3ZRVj78MODmGNAgaiHwLXFRrLxFkVz8qHHvsqB8/https/i.ibb.co/LQ7y8nc/2a37a4eedce4.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Erza Scarlet, Sr/Ur Senku Ishigami, Sr/Ur Yuno Gasai/Tsukasa\n\n**__2nd Composition__** : Sr/Ur Jiraiya, Sr/Ur Senku, Sr/Ur Yuno Gasai\n\n**__3rd Composition__** : Sr/Ur Loke, Sr/Ur Senku, Sr/Ur Yuno Gasai/Tsukasa\n\n**__4th Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__5th Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito**__6th Composition__** : Sr/Ur Josuke, Sr/Ur Loke, Sr/Ur Ikumi Mito\n\n**Note: You May Need Some RNG To Cap Dio Brando Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            //
            {
                name1: `doppo`,
                name2: `kunikida`,
                cardName: `Doppo Kunikida`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[42]} ${emojis.CELESTIAL_BLESSING}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `echidna`,
                name2: `echidna`,
                cardName: `Echidna`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `ed`,
                name2: `ed`,
                cardName: `Ed`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `edward`,
                name2: `elric`,
                cardName: `Edward Elric`,
                basicComposition: `Pain For Power,(DEF) Breaker, Surge\n(DEF) Trickroom, Precision, Surge\n(DEF) Trickroom, Pain For Power, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/uZ2hM7OBV3mJfzkXMDXHS5rvfaZpxk-DeGZti4tDSKY/https/i.ibb.co/J3B0nBx/cb7b9343022c.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Erza, Sr/Ur Senku, Sr/Ur Tsukasa \n\n**__2nd Composition__** : Sr/Ur Hinawa , Sr/Ur Scathach , Sr/Ur Tsukasa \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Erza, Sr/Ur Tsukasa \n\nUr Surge Can Be Used Insead Of Sr/Ur Tsukasa \n\n**Note: You May Need Some RNG To Cap Edward Elric Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `elaine`,
                name2: `elaine`,
                cardName: `Elaine`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge`,
                cardImage: 'https://media.discordapp.net/attachments/803222060553076796/849385395517915136/card.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Liala, Sr/Ur Mayuri, Sr/Ur Shizue Izawa \n\n**__2nd Composition__** : Sr/Ur Roy/Tobio, Sr/Ur Mio Naruse, Sr/Ur Surge\n\n**Note: You May Need Some RNG To Cap Elaine Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `elma`,
                name2: `elma`,
                cardName: `Elma`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/WT3Xkes8XdfsaTuSNL-ci8Z6RAYrA5MhDBpV-5Sds0Q/https/i.ibb.co/f8crHGf/5aed3d98d512.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck Voltia\n\n**__2nd Composition__** : Sr/Ur Gintoki, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck Voltia\n\n**Note: You May Need Some RNG To Cap Elma Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as **Water** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `emilia`,
                name2: `emilia`,
                cardName: `Emilia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `enel`,
                name2: `enel`,
                cardName: `Enel`,
                basicComposition: `(DEF) Trickroom, Precision, Surge/Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Hinawa/Nico, Sr/Ur Scathach, Sr/Ur Zombieman/Tsukasa\n\n**Note: You May Need Some RNG To Cap Enel Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Electric** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `envy`,
                name2: `envy`,
                cardName: `Envy`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `eren`,
                name2: `yeager`,
                cardName: `Eren Yeager`,
                basicComposition: `Pain For Power, Def Breaker, Surge/Bloodthirster\nPain For Power, Freeze, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Erza, Sr/Ur Violet/Riko, Sr/Ur Yuno Gasai/Tsukasa\n\n**__2nd Composition__** : Sr/Ur Toshiro, Sr/Ur Erza, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Eren Yeager Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Ground** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `eri`,
                name2: `eri`,
                cardName: `Eri`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[9]} ${emojis.REVERSION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `erina`,
                name2: `erina`,
                cardName: `Erina Nakiri`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `eris`,
                name2: `eris`,
                cardName: `Eris`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `eruka`,
                name2: `frog`,
                cardName: `Eruka Frog`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `erwin`,
                name2: `smith`,
                cardName: `Erwin Smith`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `erza`,
                name2: `erza`,
                cardName: `Erza Scarlet`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `escanor`,
                name2: `esca`,
                cardName: `Escanor`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster`,
                cardImage: 'https://images-ext-1.discordapp.net/external/reH0NhIXMsg-J88y2xqM4lVbwnBh1EEbaCj0eq0DGHA/https/i.ibb.co/XLDQ6p6/e2a9eff0b01c.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz/Tanjiro, Sr/Ur Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Sayori, Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Escanor Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `esdeath`,
                name2: `esdeath`,
                cardName: `Esdeath`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/FrAgkpabAi1KAB7Wf1Pvn5uLkor0boBsTJ-bgukzsq4/https/i.ibb.co/LRqB0b4/088cc86b8c40.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck Voltia\n\n**Note: You May Need Some RNG To Cap Esdeath Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Water** damage based on __18/20__% of your ATK.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `eto`,
                name2: `yoshimura`,
                cardName: `Eto Yoshimura`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `eugeo`,
                name2: `eugeo`,
                cardName: `Eugeo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `fafnir`,
                name2: `fafnir`,
                cardName: `Fafnir`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `king`,
                name2: `fairy`,
                cardName: `Fairy King Harlequin`,
                basicComposition: `(ATK) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Dl3-lY5jTH4sFqXlg5nsa4qvCgNaa9HYn5m4jOcILk0/https/i.ibb.co/v1cMPGc/31af07190a36.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Alex, Sr/Ur Yuno Gasai/ Tokisaki\n\n**Note: You May Need Some RNG To Cap Fairy King Harlequin Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `faye`,
                name2: `valentine`,
                cardName: `Faye Valentine`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `feitan`,
                name2: `portor`,
                cardName: `Feitan Portor`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `felix`,
                name2: `argyle`,
                cardName: `Felix Argyle`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `ferid`,
                name2: `bathory`,
                cardName: `Ferid Bathory`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `fiel`,
                name2: `fii`,
                cardName: `Fiel Nirvalen (Fii)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `filo`,
                name2: `filo`,
                cardName: `Filo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the ATK of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `fitoria`,
                name2: `fitoria`,
                cardName: `Fitoria`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `fran`,
                name2: `fran`,
                cardName: `Fran`,
                basicComposition: `(DEF) Trickroom, Precision/pain For Power, Surge/bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Hinawa, Sr/Ur Riza Hawkeye, Sr/Ur Zombieman/Tokisaki\n\n**__2nd Composition__** : Sr/Ur Hinawa, Sr/Ur Roy Mustang, Sr/Ur Zombieman/Tokisaki\n\n**Note: You May Need Some RNG To Cap Fran Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Grass** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            //
            {
                name1: `franken`,
                name2: `stein`,
                cardName: `Franken Stein`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `freya`,
                name2: `freya`,
                cardName: `Freya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `fumikage`,
                name2: `tokoyami`,
                cardName: `Fumikage Tokoyami`,
                basicComposition: `Pain For Power, Freeze, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Toshiro, Sr/Ur Echidna, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Fumikage Tokoyami Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Dark** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `fuutarou`,
                name2: `uesugi`,
                cardName: `Fuutarou Uesugi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[42]} ${emojis.CELESTIAL_BLESSING}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `fuyumi`,
                name2: `yanagi`,
                cardName: `Fuyumi Yanagi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `gaara`,
                name2: `gaara`,
                cardName: `Gaara`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `gajeel`,
                name2: `redfox`,
                cardName: `Gajeel Redfox`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `garou`,
                name2: `garou`,
                cardName: `Garou`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/KksmgB5zxCrv7iVnvSZXXX8pFcBpCsYimvGeQxRVgoE/https/i.ibb.co/kGthFpc/62ae51b25329.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Garou Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `gen`,
                name2: `asagiri`,
                cardName: `Gen Asagiri`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `genos`,
                name2: `genos`,
                cardName: `Genos`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz/Tanjiro, Sr/Ur Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Sayori, Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Escanor Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `genryusai`,
                name2: `yamamoto`,
                cardName: `Genryusai Shigekuni Yamamoto`,
                basicComposition: `(Def) Trickroom, Precision, Surge\n(Def) Trickroom, Endurance, Life Sap\nRegeneration, Berserker (DEF), Time ATK (ATK/DEF)`,
                cardImage: 'https://images-ext-2.discordapp.net/external/XqNH2TWu6weZ8Q7ykNbU4QftVoktAXEzLuAGTCMBjK8/https/i.ibb.co/mR9Fdyp/5bb080fa6b75.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto Todoroki, Sr/Ur Yuno Gasai/ Fuyumi\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Jonathan, Sr/Ur Natsuki/Iris\n\n**__3rd Composition__** : Sr/Ur Aoi Asahina, Sr/Ur Wiz/Tanjiro, Sr/Ur Elma\n\n**Note: You May Need Some RNG To Cap Genryusai Shigekuni Yamamoto Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ghost`,
                name2: `ghost`,
                cardName: `Ghost`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `gilbert`,
                name2: `bougainvillea`,
                cardName: `Gilbert Bougainvillea`,
                basicComposition: `Limiter, Breaker (DEF), Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Mephisto, Sr/Ur Violet/Yato, Sr/Ur Garou\n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Neutral** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `gilgamesh`,
                name2: `gilgamesh`,
                cardName: `Gilgamesh`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `gilthunder`,
                name2: `gil`,
                cardName: `Gilthunder`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge/Bloodthrister\nBreaker (ATK), Breaker (DEF), Surge/Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Senku, Sr/Ur Dio Brando/Tsuakasa\n\n**__1st Composition__** : Sr/Ur Zoro, Sr/Ur Senku, Sr/Ur Dio Brando/Tsuakasa\n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Electric** damage based on __18/20__% of your ATK.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `gin`,
                name2: `gin`,
                cardName: `Gin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[7]} ${emojis.SOUL_STEALER}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `gintoki`,
                name2: `sakata`,
                cardName: `Gintoki Sakata`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://images-ext-1.discordapp.net/external/7R62O1lt2cOmf8SIygFXJAHAm6vjsVxXgW_wy8pSdWY/https/i.ibb.co/Pc05HRX/a2ff52db30c1.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Machi Komacine, Sr/Ur Loke, Sr/Ur Black Star\n\n**Note: You May Need Some RNG To Cap Gintoki Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `giorno`,
                name2: `giovanna`,
                cardName: `Giorno Giovanna`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `giyu`,
                name2: `tomioka`,
                cardName: `Giyu Tomioka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Water** damage equal to __27/30__% of your SPD, and take ¼ of the damage dealt to yourself.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `goblin`,
                name2: `slayer`,
                cardName: `Goblin Slayer`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `gon`,
                name2: `freecss`,
                cardName: `Gon Freecss`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `goro`,
                name2: `(056)`,
                cardName: `Goro (056)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `gowther`,
                name2: `gowther`,
                cardName: `Gowther`,
                basicComposition: `Breaker (DEF), Precision, Surge\nEndurance, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/2eDOg_wh010ZBpCK_yWObg5DJyFS6tc6712g-bZU2dE/https/i.ibb.co/zfK0tNq/8d5263e75dab.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Motoyasu, Sr/Ur Shoto, Sr/Ur Dio Brando/Luck Voltia\n\n**__2nd Composition__** : Sr/Ur Gintoki, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck Voltia\n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `gray`,
                name2: `fullbuster`,
                cardName: `Gray Fullbuster`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `greed`,
                name2: `greed`,
                cardName: `Greed`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (DEF)\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-1.discordapp.net/external/YZPMdlPFrTo2HoaUKT6DFTi1Agjq83GdgsNNAHPRAq8/https/i.ibb.co/xjrry6x/0b3fbae9cef9.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Zuberg, Sr/Ur Mayuri/Wiz, Sr/Ur Mine \n\n**__2nd Composition__** : Sr/Ur Mayu, Sr/Ur Iris, Sr/Ur Iris\n\n**Note: You May Need Some RNG To Cap Greed Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `grimmjow`,
                name2: `jeagerjaques`,
                cardName: `Grimmjow Jeagerjaques`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Dark** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `guild`,
                name2: `girl`,
                cardName: `Guild Girl`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `guren`,
                name2: `ichinose`,
                cardName: `Guren Ichinose`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `happy`,
                name2: `happy`,
                cardName: `Happy`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Water** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `haruka`,
                name2: `tenou`,
                cardName: `Haruka Tenou (Sailor Uranus)`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Haruka Tenou (Sailor Uranus) Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Grass** damage based on __18/20__% of your ATK.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            //
            {
                name1: `hatsune`,
                name2: `miku`,
                cardName: `Hatsune Miku`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `hayato`,
                name2: `gokudera`,
                cardName: `Hayato gokudera`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `hei`,
                name2: `hei`,
                cardName: `Hei`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `hestia`,
                name2: `hestia`,
                cardName: `Hestia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `hibana`,
                name2: `hibana`,
                cardName: `Hibana`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz/Tanjiro, Sr/Ur Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Sayori, Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Escanor Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `hideyoshi`,
                name2: `nagachika`,
                cardName: `Hideyoshi Nagachika`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `hiei`,
                name2: `hiei`,
                cardName: `Hiei`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[9]} ${emojis.REVERSION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `high`,
                name2: `archer`,
                cardName: `High Elf Archer`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `hijikata`,
                name2: `toushirou`,
                cardName: `Hijikata Toushirou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Fire** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `himiko`,
                name2: `toga`,
                cardName: `Himiko Toga`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `hinami`,
                name2: `feuguchi`,
                cardName: `Hinami Feuguchi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `hinata`,
                name2: `hyuga`,
                cardName: `Hinata Hyuga`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `hiro`,
                name2: `(016)`,
                cardName: `Hiro (016)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `hisako`,
                name2: `arato`,
                cardName: `Hisako Arato`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `hisoka`,
                name2: `morrow`,
                cardName: `Hisoka Morrow`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `historia`,
                name2: `reiss`,
                cardName: `Historia Reiss`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `hiyori`,
                name2: `iki`,
                rareInfo: `**HP**:1697\n**ATK**:1697\n**DEF**:1149\n**SPD**:1237\n\n**PL**:5780`,
                srInfo: `**HP**:1740\n**ATK**:1740\n**DEF**:1178\n**SPD**:1269\n\n**PL**:5927`,
                urInfo: `**HP**:1809\n**ATK**:1809\n**DEF**:1225\n**SPD**:1319\n\n**PL**:6162`,
                cardName: `Hiyori Iki`,
                basicComposition: `(ATK) Trickroom, Endurance/Berkserker (DEF) , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/gfH3iDEutxS3zQ2asLH6JzXAMUo8mNo2nBJ-1GzO5Mo/https/i.ibb.co/rxRGNSS/b47b938dffc3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Yu Nishinoya, Sr/Ur Dio Brando \n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Tanjiro/Wiz, Sr/Ur Dio Brando\n\n**Note: You May Need Some RNG To Cap Hiyori Iki Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `hotaru`,
                name2: `takegawa`,
                cardName: `Hotaru Takegawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `houka`,
                name2: `inumata`,
                cardName: `Houka Inumata`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `ichigo`,
                name2: `(015)`,
                cardName: `Ichigo (015)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `kurosaki`,
                name2: `kurosaki`,
                cardName: `Ichigo Kurosaki`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\n(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/g-CLcRA2DjKae7y-AGvNW7dUzRrz0jpnt7FZIHCqP1I/https/i.ibb.co/FKt6qhG/e636b3c45681.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Ur Iris\n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Tanjiro, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Izumo, Sr/Ur Motoyasu, Sr/Ur Gasai\n\n**Note: You May Need Some RNG To Cap Ichigo Kurosaki Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the ATK of all allied familiars by 54/60%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `ichika`,
                name2: `ichika`,
                cardName: `Ichika Nakano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[43]} ${emojis.MIRACLE_INJECTION}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `ikumi`,
                name2: `mito`,
                cardName: `Ikumi Mito`,
                basicComposition: `Pain For Power, Breaker (DEF), Surge\nProtector, Breaker (DEF), Surge\nEndurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\n(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/KZct6qsEEXe73zwFVhAlTPCPLwKN9_dknjad6FveONw/https/i.ibb.co/gysX7N2/43005d151184.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kokoro, Sr/Ur Riko Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Elaine, Sr/Ur Riko, Ur Yuno Gasai\n\n**__3rd Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito , Sr/Ur Ikumi Mito \n\n**__4th Composition__** : Sr/Ur Arde, Sr/Ur Ikumi Mito , Sr/Ur Ikumi Mito \n\n**__5th Composition__** : Ur Gowther, Sr/Ur Riko Saikawa , Ur Garou\n\n**__6th Composition__** : Ur Jiraiya, Ur Riko, Ur Yuno Gasai \n\n**Note: You May Need Some RNG To Cap Ikumi Mito Raids**.`,
                cardTalent: `${diffEmojis[23]} ${emojis.LIFE_SAP}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `illyasviel`,
                name2: `einzbern`,
                cardName: `Illyasviel Von Einzbern`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Water** damage based on __18/20__% of your ATK.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `inosuke`,
                name2: `hashibira`,
                cardName: `Inosuke Hashibira`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap No Face Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `inuyasha`,
                name2: `inuyasha`,
                cardName: `Inuyasha`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `ira`,
                name2: `gamagori`,
                cardName: `Ira Gamagori`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `Irina`,
                name2: `jelavic`,
                cardName: `Erina Jelavic`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `iris`,
                name2: `iris`,
                cardName: `Iris`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/NAsEo0sy5S3TPgr_NLSVOIsTjg9Nr7JwVO2Rt-mNyY8/https/i.ibb.co/xHLmr2G/f3b1f0a241fd.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Iris Raids**.`,
                cardTalent: `${diffEmojis[23]} ${emojis.LIFE_SAP}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `issei`,
                name2: `hyoudou`,
                cardName: `Issei Hyoudou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `itachi`,
                name2: `itachi`,
                cardName: `Itachi Uchiha`,
                basicComposition: `(ATK) Trickroom, Protector, Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/67x2hFLJAhKJShh7qzE07QpjvRHfO24JEFmEblEABo4/https/i.ibb.co/d6xJxhV/4d59729bf301.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Itachi Uchiha Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `itaru`,
                name2: `hashida`,
                cardName: `Itaru Hashida`,
                basicComposition: `(DEF) Trickroom, Double Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/qMmIl3Z6nbUiF1IwBh4ymCXKdShPNQ8G0TyOL4k0uMc/https/i.ibb.co/sVvtkrc/4221f5feee2a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Itaru Hashida Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `itona`,
                name2: `horibe`,
                cardName: `Itona Horibe`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[1]} ${emojis.ULTIMATE_COMBO}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kawasumi`,
                name2: `kawasumi`,
                cardName: `Itsuki Kawasumi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `itsuki`,
                name2: `nakano`,
                cardName: `Itsuki Nakano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `midoriya`,
                name2: `(deku)`,
                cardName: `Izuku Midoriya (Deku)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `izumi`,
                name2: `kyoka`,
                rareInfo: `**HP**:1502\n**ATK**:1272\n**DEF**:1502\n**SPD**:1555\n\n**PL**:5831`,
                srInfo: `**HP**:1541\n**ATK**:1305\n**DEF**:1541\n**SPD**:1595\n\n**PL**:5982`,
                urInfo: `**HP**:1602\n**ATK**:1357\n**DEF**:1602\n**SPD**:1658\n\n**PL**:6219`,
                cardName: `Izumi Kyoka`,
                basicComposition: `(Def) Trickroom, Double Life Sap\nRegeneration, Berserker (DEF), Time ATK (ATK/DEF)`,
                cardImage: 'https://images-ext-2.discordapp.net/external/IyTql2Xenu1fkl4Sz6VJCq2XUS359i_WmNy6ytkUBEM/https/i.ibb.co/TcjyN5L/3cbc80f774fc.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Natsuki/No face, Sr/Ur Natsuki/No face\n\n**__2nd Composition__** : Sr/Ur Edward, Sr/Ur Wiz/Tanjiro, Sr/Ur Ritsu/Vegeta\n\n**Note: You May Need Some RNG To Cap Wiz Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `izumo`,
                name2: `kamiki`,
                cardName: `Izumo Kamiki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `izuna`,
                name2: `hatsuse`,
                cardName: `Izuna Hatsuse`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `jack`,
                name2: `Frost`,
                cardName: `Jack Frost`,
                basicComposition: `(ATK) Trickroom, Endurance/Berkserker (DEF) , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/gfH3iDEutxS3zQ2asLH6JzXAMUo8mNo2nBJ-1GzO5Mo/https/i.ibb.co/rxRGNSS/b47b938dffc3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Kanna Kamui, Sr/Ur Dio Brando \n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Yu Nishinoya/Gintoki, Sr/Ur Dio Brando\n\n**Note: You May Need Some RNG To Cap Jack Frost Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `jellal`,
                name2: `fernandes`,
                cardName: `Jellal Fernandes`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Light** damage based on __18/20__% of your ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `jet`,
                name2: `jetblack`,
                cardName: `Jet Black`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/XDa1Zj_x_gbV3GosNw3PWYvXNWdFq3TgLQvbEgvtxpQ/https/i.ibb.co/Tc89Vcn/c50535ea5c3b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Loke, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Jet Black Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `jibril`,
                name2: `jibril`,
                cardName: `Jibril`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Light** damage based on __18/20__% of your ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `jiraiya`,
                name2: `jiraiya`,
                cardName: `Jiraiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `jonathan`,
                name2: `joestar`,
                cardName: `Jonathan Joestar`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `joseph`,
                name2: `joseph`,
                cardName: `Joseph Joestar`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `josuke`,
                name2: `higashikata`,
                rareInfo: `**HP**:1626\n**ATK**:1202\n**DEF**:1555\n**SPD**:1326\n\n**PL**:5709`,
                srInfo: `**HP**:1668\n**ATK**:1233\n**DEF**:1595\n**SPD**:1360\n\n**PL**:5856`,
                urInfo: `**HP**:1734\n**ATK**:1281\n**DEF**:1658\n**SPD**:1413\n\n**PL**:6086`,
                cardName: `Josuke Higashikata`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Lmr65BmCst2Dj872ElBOllHCkrB1xq7Ht_lviYiKzV0/https/i.ibb.co/0F32WtS/a74712e1b2c7.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion/Piccolo\n\n**Note: You May Need Some RNG To Cap Josuke Higashikata Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `jotaro`,
                name2: `kujo`,
                cardName: `Jotaro Kujo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `judar`,
                name2: `judar`,
                cardName: `Judar`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Dark** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `july`,
                name2: `july`,
                cardName: `July`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Precision,Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/udTcolx2qyiUsphR0-uEtlVSwt5UzjGYneZYqqNRpXc/https/i.ibb.co/d7cCDfy/886a1f1b2cf9.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Yuno Gasai \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap July Raid**`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `junko`,
                name2: `enoshima`,
                cardName: `Junko Enoshima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `juvia`,
                name2: `lockser`,
                cardName: `Juvia Lockser`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Water** damage based on __18/20__% of your ATK.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `kaede`,
                name2: `kayano`,
                cardName: `Kaede Kayano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kagome`,
                name2: `higurashi`,
                cardName: `Kagome Higurashi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kagura`,
                name2: `kagura`,
                cardName: `Kagura`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://images-ext-1.discordapp.net/external/6Fnj3bHgXL-t1hWAYJTXCcYg_fQ6TQTm8C8GYuVNTwk/https/i.ibb.co/8mTTmGn/a34cd49903d1.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion/Piccolo\n\n**Note: You May Need Some RNG To Cap Kagura Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `kaguya`,
                name2: `shinomiya`,
                cardName: `Kaguya Shinomiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `kakashi`,
                name2: `hatake`,
                cardName: `Kakashi Hatake`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Electric** damage based on __18/20__% of your ATK.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kakine`,
                name2: `teitoku`,
                cardName: `Kakine Teitoku`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Dark** damage based on __18/20__% of your ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `kallen`,
                name2: `kozuki`,
                cardName: `Kallen Kozuki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `kamijou`,
                name2: `touma`,
                cardName: `Kamijou Touma`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `kanade`,
                name2: `tachibana`,
                cardName: `Kanade Tachibana`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `kanao`,
                name2: `tsuyuri`,
                cardName: `Kanao Tsuyuri`,
                basicComposition: `Double Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/IJlIJJghNQS-qf9_K5ssVQwQolEpMpRD0IV9B8YeL-4/https/i.ibb.co/DV5PhgC/80ecb27ea746.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kenma, Ur Gasai\n\n~~**__1st Composition__**~~ : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Zombieman\n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the ATK of all allied familiars by 54/60%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `kaneki`,
                name2: `ken`,
                cardName: `Kaneki Ken`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the ATK of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kanna`,
                name2: `kamui`,
                cardName: `Kanna Kamui`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge\n(DEF) Trickroom, Precision, Surge\nAmplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/vS00zyO6IxCg0asNu0fZ7gjfq65f9Mh91CmqsjZR4C8/https/i.ibb.co/zrGJN99/e7728db8b171.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Machi Komacine, Sr/Ur Loke, Sr/Ur Black Star \n\n**__2nd Composition__** : Sr/Ur Erza, Sr/Ur Senku, Sr/Ur Surge\n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Scathach, Sr/Ur Surge\n\n**__4th Composition__** : Sr/Ur Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito**__5th Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**Note: You May Need Some RNG To Cap Kanna Kamui Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `karasuma`,
                name2: `tadaomi`,
                cardName: `Karasuma Tadaomi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `karma`,
                name2: `akabane`,
                cardName: `Karma Akabane`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `katsuki`,
                name2: `bakugo`,
                cardName: `Katsuki Bakugo`,
                basicComposition: `(ATK) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-2.discordapp.net/external/cD-FjLxUtVGYRUg7CQl609Aw8mjlFKP8c0NB3LltkQ0/https/i.ibb.co/k24cQH9/8f2dbbb3bbf9.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Alex, Sr/Ur Yuno Gasai/ Fuyumi\n\n**Note: You May Need Some RNG To Cap Katsuki Bakugo Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `katsura`,
                name2: `kotarou`,
                cardName: `Katsura Kotarou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their DEF.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kazuma`,
                name2: `kazuma`,
                cardName: `Kazuma`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kuwabara`,
                name2: `kuwabara`,
                cardName: `Kazuma Kuwabara`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `satou`,
                name2: `satou`,
                cardName: `Kazuma Satou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `keigo`,
                name2: `hawks`,
                cardName: `Keigo Takami (Hawks)`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/NzCuraZ2H--LGp2OACpSvgCvu2pjF5FkQ_DDV9SbaWI/https/i.ibb.co/S0bJ7XD/c93993230895.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Keigo Takami (Hawks) Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Grass** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kei`,
                name2: `shirogane`,
                cardName: `Kei Shirogane`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Light** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `tsukishima`,
                name2: `tsukki`,
                cardName: `Kei Tsukishima`,
                basicComposition: `Regeneration, Berserker (DEF), Elemental Strike (ATK/DEF)\nAmplifier (DEF), Double Life Sap\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-1.discordapp.net/external/CchQ5rJsEgeJS0_dqvzaCDb28wWjibiUBW3opd8yX9c/https/i.ibb.co/YyXjZGc/fe8618324a0d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ban, Sr/Ur Mayuri, Sr/Ur Jellal \n\n**__2nd Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Kei Tsukishima Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kenji`,
                name2: `miyazawa`,
                cardName: `Kenji Miyazawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `kenma`,
                name2: `kozume`,
                cardName: `Kenma Kozume`,
                basicComposition: `Regeneration, Berserker (DEF), Time Attack (DEF)\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://media.discordapp.net/attachments/817075441029611571/849554763724881920/card.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Edward, Sr/Ur Wiz/Tanjiro, Sr/Ur Ritsu \n\n**__2nd Composition__** : Sr/Ur Gintoki/ Yu Nishinoya, Sr/Ur Wiz/Tanjiro, SR Natsuki/Iris \n\n**__3rd Composition__** : Sr/Ur Gintoki, Sr/Ur Shoto, Sr/Ur Dio\n\n**Note: You May Need Some RNG To Cap Kenma Kozume Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108/120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `kenpachi`,
                name2: `zaraki`,
                cardName: `Kenpachi Zaraki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kento`,
                name2: `nanami`,
                cardName: `Kento Nanami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `kid`,
                name2: `buu`,
                cardName: `Kid Buu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kikyo`,
                name2: `kikyo`,
                cardName: `Kikyo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `killua`,
                name2: `zoldyck`,
                cardName: `Killua Zoldyck`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kirari`,
                name2: `momobami`,
                cardName: `Kirari Momobami`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nBerserker (DEF), Double Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/K1Dnh8Cnhg9kEUJ8EvkcfDtQiUE8neJBHh5EQpwD9uI/https/i.ibb.co/7pj5mfr/06710cea5030.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Kurapika, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__3rd Composition__** : Sr/Ur Ririka, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**Note: You May Need Some RNG To Cap Kirari Momobami Raids**.`,
                cardTalent: `${diffEmojis[23]} ${emojis.LIFE_SAP}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `kirito`,
                name2: `kirihoe`,
                cardName: `Kirito`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Dark** damage based on __18/20__% of your ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kiritsuyu`,
                name2: `emiya`,
                cardName: `Kiritsuyu Emiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kishou`,
                name2: `arima`,
                cardName: `Kishou Arima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Dark** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kisuke`,
                name2: `urahara`,
                cardName: `Kisuke Urahara`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `klien`,
                name2: `klein`,
                cardName: `Klein`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `kobayashi`,
                name2: `san`,
                cardName: `Kobayashi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `koenma`,
                name2: `koenma`,
                cardName: `Koenma`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kofuku`,
                name2: `kofuku`,
                cardName: `Kofuku`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/5T4MsSgEVH5e8j2fefz4d2eMZiYYW21JGQ-J_RN1GXw/https/i.ibb.co/VCytwb4/b11600f56c4e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Mio Naruse, Sr/Ur Garou/Tokisaki\n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Riza Hawkeye, Sr/Ur Garou/Fuyumi\n\n**Note: You May Need Some RNG To Cap Kofuku Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as **Grass** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            //
            {
                name1: `kohaku`,
                name2: `kohaku`,
                cardName: `Kohaku`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Grass** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kojiro`,
                name2: `kojiro`,
                cardName: `Kojiro Shinomiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `kokoro`,
                name2: `kokoro`,
                cardName: `Kokoro`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `koneko`,
                name2: `toujou`,
                cardName: `Koneko Toujou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `konno`,
                name2: `konno`,
                cardName: `Koono Yuuki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `koro`,
                name2: `sensei`,
                cardName: `Koro Sensei`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Light** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `koshi`,
                name2: `sugawara`,
                cardName: `Koshi Sugawara`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `kotori`,
                name2: `itsuka`,
                cardName: `Escanor`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/b0OZ_153tyqDwUPKJJZI1NwhBp5eMHc2uOMmRA2TMCc/https/i.ibb.co/S5dbKsy/f832272a387d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz/Tanjiro, Sr/Ur Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Sayori, Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Kotori Itsuka Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `kougyoku`,
                name2: `kougyoku`,
                rareInfo: `**HP**:1697\n**ATK**:1697\n**DEF**:1149\n**SPD**:1237\n\n**PL**:5780`,
                srInfo: `**HP**:1740\n**ATK**:1740\n**DEF**:1178\n**SPD**:1269\n\n**PL**:5927`,
                urInfo: `**HP**:1809\n**ATK**:1809\n**DEF**:1225\n**SPD**:1319\n\n**PL**:6162`,
                cardName: `Kougyoku`,
                basicComposition: `(ATK) Trickroom, Endurance/Berkserker (DEF) , Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Yu Nishinoya, Sr/Ur Dio Brando \n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Tanjiro/Wiz, Sr/Ur Dio Brando\n\n**Note: You May Need Some RNG To Cap Annie Leonhart Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `kouta`,
                name2: `kouta`,
                cardName: `Kouta`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `krillin`,
                name2: `krillin`,
                cardName: `Krillin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `krul`,
                name2: `tepes`,
                cardName: `Krul Tepes`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `kurapika`,
                name2: `kurapika`,
                cardName: `Kurapika`,
                basicComposition: `Amplifier (DEF)/Berserker (DEF)/Endurance, Double Sap\nCelestial Blessing, Endurance/Rejuvenation, Time Attack\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola/C.C./Fushiguro, Sr/Ur Kirari, Sr/Ur Kirari\n\n**__2nd Composition__** : Sr/Ur Doppo/Fuutarou, Sr/Ur Fushiguro, Sr/Ur Mine/Megumi Natsu\n\n**__3rd Composition__** : Sr/Ur Alice Zuberg/Ban, Sr/Ur Kurapika, Sr/Ur Mine/Megumi Natsu/Blair\n\n**Note: You May Need Some RNG To Cap Kurapika Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `kurisu`,
                name2: `makise`,
                cardName: `Kurisu Makise`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their DEF.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `kurumi`,
                name2: `nonaka`,
                cardName: `Kurumi Nonaka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Water** damage based on __18/20__% of your ATK.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `tokisaki`,
                name2: `tokisaki`,
                cardName: `Kurumi Tokisaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `kyoka`,
                name2: `jiro`,
                cardName: `Kyoka Jiro`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kyoko`,
                name2: `kirigiri`,
                cardName: `Kyoko Kirigiri`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `kyoya`,
                name2: `hibari`,
                cardName: `Kyoya Hibari`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27/30__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `l`,
                name2: `l`,
                cardName: `L`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `lambo`,
                name2: `lambo`,
                cardName: `Lambo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `laxus`,
                name2: `dreyar`,
                cardName: `Laxus Dreyar`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `lelouch`,
                name2: `lamperouge`,
                cardName: `Lelouch Lamperouch`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `leorio`,
                name2: `paradinight`,
                cardName: `Leorio paradinight`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `levi`,
                name2: `ackerman`,
                cardName: `Levi Ackerman`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `liala`,
                name2: `liala`,
                cardName: `Liala`,
                basicComposition: `(ATK/DEF) Trickroom/Pain For Power, (DEF) Breaker, Surge `,
                cardImage: 'https://images-ext-2.discordapp.net/external/Rf2wEBIzZ9v8Jo82sWoeXOQhga_0FmdnRM2ZTyT-loU/https/i.ibb.co/bF3r5gB/b3f862666f9e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Roy/Tobio Kageyama, Sr/Ur Mio Naruse, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Liala Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `light`,
                name2: `yagami`,
                cardName: `Light Yagami (Kira)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `liliruca`,
                name2: `arde`,
                cardName: `Liliruca Arde`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://images-ext-2.discordapp.net/external/FFT_gf7dOLEhoLVmZXIDdtr4ffR4hc7TJSNbR1uaE9I/https/i.ibb.co/Cbn40Q7/d2fa3bc64d92.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion/Piccolo\n\n**Note: You May Need Some RNG To Cap Liliruca Arde Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `lisa`,
                name2: `lisa`,
                cardName: `Lisa Lisa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `liz`,
                name2: `blood`,
                cardName: `Liz T Blood`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur Yuno Gasai \n\n**__3rd Composition__** : Sr/Ur Izumo, Sr/Ur Naraku/Maria Naruse, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Ulquiorra Schiffer Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `loke`,
                name2: `loke`,
                rareInfo: `**HP**:1149\n**ATK**:1361\n**DEF**:1538\n**SPD**:1661\n\n**PL**:5709`,
                srInfo: `**HP**:1178\n**ATK**:1396\n**DEF**:1577\n**SPD**:1704\n\n**PL**:5855`,
                urInfo: `**HP**:1225\n**ATK**:1451\n**DEF**:1639\n**SPD**:1771\n\n**PL**:6086`,
                cardName: `Loke`,
                basicComposition: `(Def) Trickroom, Double Life Sap\nRegeneration, Berserker (DEF), Time ATK (ATK/DEF)\nEndurance, (DEF) Trickroom/Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/vPWBkuwMhycWrlwohadl8zDc2e18jto8QUNJ0F9o8rY/https/i.ibb.co/6DcxLcp/3d02160309df.png',
                cardTeams: `**__1st Composition__** : Ur Kenma, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion/Piccolo\n\n**__3rd Composition__** : Sr/Ur Josuke, Sr/Ur Kenma/Loke, Sr/Ur Ikumi Mito\n\n**Note: You May Need Some RNG To Cap Loke Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `lubbock`,
                name2: `lubbock`,
                cardName: `Lubbock`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `luck`,
                name2: `voltia`,
                cardName: `Luck Voltia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `lucoa`,
                name2: `lucoa`,
                cardName: `Lucoa`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/JFHUV8GthDe-0EA8u6PVJ2txDEEB2kmXqIcBeIr2kEc/https/i.ibb.co/6DjcgnC/ad076e46a535.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion \n\n**__2nd Composition__** : Sr/Ur Kokoro, Sr/Ur Riko, Sr/Ur Surge\n\n**Note: You May Need Some RNG To Cap Lucoa Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Ground :mountain:`,
                cardColor: 'RANDOM'
            },
            {
                name1: `lucyheartfilia`,
                name2: `heartfilia`,
                cardName: `Lucy Heartfilia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `lucy(kaede)`,
                name2: `lucykaede`,
                cardName: `Lucy (Kaede)`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nBerserker (ATK), Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/sijU11xpwJr9mUW9c6mqfXYh4Yuy2iOw1sjx8UmD2NE/https/i.ibb.co/Y2Jp003/58a29e12146a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Ur Iris\n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Tanjiro, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Kurosaki, Sr/Ur Motoyasu, Sr/Ur Gasai\n\n**Note: You May Need Some RNG To Cap Lucy (Kaede) Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the ATK of all allied familiars by 54/60%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `machi`,
                name2: `komacine`,
                cardName: `Machi Komacine`,
                basicComposition: `Pain For Power, (DEF) Breaker, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/V6HguWwEsHWXTJ0YgSnzw1MJ_JSVA_mNwMJlUlUn4aw/https/i.ibb.co/6X4svLG/eeb52a427fff.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kokoro, Sr/Ur Riko, Sr/Ur Yuno Gasai \n\n**Note: You May Need Some RNG To Cap Machi Komacine Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `madara`,
                name2: `madara`,
                cardName: `Madara Uchiha`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `maka`,
                name2: `alabarn`,
                cardName: `Maka Alabarn`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as **Light** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `Maki`,
                name2: `Oze`,
                cardName: `Maki Oze`,
                basicComposition: `(DEF) Trickroom, Precision, Surge\nDEFENCE) Trickroom, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/GRV2eTap71vGjk4d7KFRBsTgBL-V2nWwo2oPj-oNVK0/https/i.ibb.co/dtDY4qb/f146d71803a6.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Sr/Ur Surge \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Natsuki, Sr/Ur Natsuki\n\nYou May As Well Use Ur Sap/ Sr/Ur No Face Instead Of Sr/Ur Natsuki\n\n**Note: You May Need Some RNG To Cap Maki Oze Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `mako`,
                name2: `mankanshoku`,
                cardName: `Mako Mankanshoku`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `makoto`,
                name2: `kino`,
                cardName: `Makoto Kino (Sailor Jupiter)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `naegi`,
                name2: `naegi`,
                cardName: `Makoto Naegi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `chiba`,
                name2: `mamoru`,
                cardName: `Mamoru Chiba (Tuxedo Mask)`,
                basicComposition: `(DEF) Trickroom, Precision, Surge\nOffensive Stance, (DEF) Trickroom, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/eqtrsX9D2mMPlK0XOKj6bhsZ8R6nLGQFW9x7ght8Mus/https/i.ibb.co/ZXqKJFx/40cdda686864.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Minene/Prince, Sr/Ur Nico Robin, Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Mamoru Chiba (Tuxedo Mask) Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `maria`,
                name2: `naruse`,
                cardName: `Maria Naruse`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/fLDWD9PkefJ7AQJ7EnqbiTw32jv5HJLqMcgCOmKMeS8/https/i.ibb.co/XJ4wLN1/808ba50a554b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Maria Naruse Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `mariko`,
                name2: `kurama`,
                cardName: `Mariko Kurumi`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster\nDouble Trickroom, Surge/Bloodthirster`,
                cardImage: 'https://images-ext-2.discordapp.net/external/6qKcC7Lr0a625268qN-sslkMWQmR0P8DcNHQEvEMno4/https/i.ibb.co/tDgJZxy/48e8a89633b3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz/Tanjiro, Sr/Ur Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Sayori, Ur Yuno Gasai/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Kenma, Sr/Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Mariko Kurama Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `mary`,
                name2: `saotome`,
                cardName: `Mary Saotome`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `mavis`,
                name2: `vermillion`,
                cardName: `Marvis Vermillion`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `maya`,
                name2: `joga`,
                cardName: `Maya Joga`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `mayu`,
                name2: `mayu`,
                cardName: `Mayu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `mayuri`,
                name2: `mayuri`,
                cardName: `Mayuri`,
                basicComposition: `(Def) Trickroom, Precision, Surge\n(Def) Trickroom, Endurance, Life Sap\nRegeneration, Berserker (DEF), Time ATK (ATK/DEF)`,
                cardImage: 'https://images-ext-1.discordapp.net/external/udIdomW-Tsh2R5orI5HRjs5PlFK_o88O79Q5kL8NK78/https/i.ibb.co/B3nwNYv/d7d73cdc4c23.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto Todoroki, Sr/Ur Yuno Gasai/ Fuyumi\n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Jonathan, Sr/Ur Natsuki/Iris\n\n**__3rd Composition__** : Sr/Ur Aoi Asahina, Sr/Ur Wiz/Tanjiro, Sr/Ur Elma\n\n**Note: You May Need Some RNG To Cap Mayuri Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shiina`,
                name2: `mayurishiina`,
                cardName: `Mayuri Shiina`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `medusa`,
                name2: `gorgon`,
                cardName: `Medusa Gorgon`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `Fushiguro`,
                name2: `fushiguro`,
                cardName: `Megumi Fushiguro`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `megumin`,
                name2: `megumin`,
                cardName: `Megumin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Fire** damage based on __18/20__% of your ATK.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `natsu`,
                name2: `natsu`,
                cardName: `Megumi Natsu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base ATK as **Light** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `megumitadokoro`,
                name2: `tadokoro`,
                cardName: `Megumi Tadokoro`,
                basicComposition: `Regeneration, Berserker (DEF), Time Attack (DEF)\nEndurance, Double Life Sap\Apmlifier (DEF), Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/mGXl7Yl4pLAVnKWe1fNu3AKWpH2UY6mbhoBnhnr72_4/https/i.ibb.co/LC2ccjW/3c8c0b8be5bb.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Edward, Sr/Ur Wiz/Tanjiro, Sr/Ur Ritsu\n\n**__2nd Composition__** : Sr/Ur Gintoki, Sr/Ur Natsuki, Sr/Ur Natsuki \n\n**__3rd Composition__** : Sr/Ur Noelle Silva, Sr/Ur Natsuki*, Sr/Ur Natsuki*\n\n Sr/Ur Life Sap Can Be Used Instead Of Sr/Ur Natsuki (Excpet For Noelle Team).\n\n**Note: You May Need Some RNG To Cap Megumi Tadokoro Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `meliodas`,
                name2: `meliodas`,
                cardName: `Meliodas`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `mello`,
                name2: `mello`,
                cardName: `Mello`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `melty`,
                name2: `melromarc`,
                cardName: `Melty Q Melromarc`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/9ARjp4rU75oB5YinN1PqxsIHugjyf4bW4Egn7D7D8Jo/https/i.ibb.co/CPwLkFN/f6e86b7e5632.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Dio Brando/Luck Voltia \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Dio Brando/Luck Voltia \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Dio Brando/Luck Voltia\n\n**Note: You May Need Some RNG To Cap Melty Q Melromarc Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `mephisto`,
                name2: `pheles`,
                cardName: `Mephisto Pheles`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `mera`,
                name2: `mera`,
                cardName: `Mera Mera`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Wbn66ISD29FpTkZysH-qOyHUc79biOljLoHiq0zI9uk/https/i.ibb.co/NVkW9cV/ec7f24441e2e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Yami Sukehiro, Sr/Ur Fuyumi \n\nUr Surge Can Be Used Insead Of Sr/Ur Fuyumi \n\n**Note: You May Need Some RNG To Cap Mera Mera Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `merlin`,
                name2: `merlin`,
                cardName: `Merlin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `mikaela`,
                name2: `hyakuya`,
                cardName: `Mikaela Hyakuya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `mikasa`,
                name2: `ackerman`,
                cardName: `Misaka Ackerman`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Ground** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `miko`,
                name2: `miko`,
                cardName: `Miko`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `iino`,
                name2: `lino`,
                cardName: `Miko Iino`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `Miku`,
                name2: `(390)`,
                cardName: `Miku (390)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `Miku`,
                name2: `Nakano`,
                cardName: `Miku Nakano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `milim`,
                name2: `nava`,
                cardName: `Milim Nava`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `minako`,
                name2: `aino`,
                cardName: `Minako Aino (Sailor Venus)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Neutral** damage based on __18/20__% of your ATK.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `minato`,
                name2: `namikaze`,
                cardName: `Minato Namikaze`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Electric** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `mine`,
                name2: `mine`,
                cardName: `Mine`,
                basicComposition: `(DEF) Trickroom, Berkserker (DEF) , Surge\nDouble Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/7DeZUQs8O0qqsQdelPPA6a_JY0NYnXg4d-bQqPyV93k/https/i.ibb.co/Y30WXZv/8ec30b0798b2.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Yuno Gasai \n\n**__2nd Composition__** : Ur Mayu, Ur Iris, Ur Iris\n\n**Note: You May Need Some RNG To Cap Mine Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base DEF as **Neutral** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `minene`,
                name2: `uryuu`,
                cardName: `Minene Uryuu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `akiyama`,
                name2: `mioakiyama`,
                cardName: `Mio Akiyama`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the ATK of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `mionaruse`,
                name2: `mio`,
                cardName: `Mio Naruse`,
                basicComposition: `Double Trickroom, Surge/Bloodthirster\n(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster\n(DEF) Trickroom, Limiter, Surge/Bloodthirster`,
                cardImage: 'https://images-ext-2.discordapp.net/external/rjKx9PfxsFMYpzSzPjuf1nSnkCmXlfhTZS4v8BIeQb8/https/i.ibb.co/kqZ6qtt/3eb9ff5b1030.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Sr/Ur Yuno Gasai/Fuyumi\tBest Team \n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Wiz, Sr/Ur Yuno Gasai/Fuyumi \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shiro, Sr/Ur Yuno Gasai/Fuyumi \n\n**Note: You May Need Some RNG To Cap Mio Naruse Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `takamiya`,
                name2: `miotakamiya`,
                cardName: `Mio Takamiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Light** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `miroku`,
                name2: `miroku`,
                cardName: `Miroku`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Miroku Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Grass** damage based on __18/20__% of your ATK.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `misa`,
                name2: `amane`,
                cardName: `Misa Amane`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `misaka`,
                name2: `mikoto`,
                cardName: `Misaka Mikoto`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            //
            {
                name1: `mitsuba`,
                name2: `sangu`,
                cardName: `Mitsuba Sangu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `miyukishirogane`,
                name2: `miyuki`,
                cardName: `Miyuki shirogane`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/uAcxDLUU6u74L-8CF1RS_lB5YO2HFRrJHqTRv89K59M/https/i.ibb.co/tCynLgV/13fc054123e9.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Miyuki Shirogane Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `mocha`,
                name2: `hoto`,
                cardName: `Mocha Hoto`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `momo`,
                name2: `yaoyoruzo`,
                cardName: `Momo Yaoyoruzo`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/q0dUJCP20PHyeoc4kHfPQ6MjPsM0d75pel4XE7QlNHQ/https/i.ibb.co/Htnpyk1/2f6d943a338a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion \n\n**__2nd Composition__** : Sr/Ur Kokoro, Sr/Ur Riko, Sr/Ur Surge\n\n**Note: You May Need Some RNG To Cap Momo Yaoyoruzo Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `Monika`,
                name2: `Monika`,
                cardName: `Monika`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `monkey`,
                name2: `luffy`,
                cardName: `Monkey D Luffy`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Neutral** damage based on __18/20__% of your ATK.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `morgiana`,
                name2: `morgiana`,
                cardName: `Morgiana`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Fire** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `mori`,
                name2: `jin`,
                cardName: `Mori Jin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `motoyasu`,
                name2: `kitamura`,
                cardName: `Motoyasu Kitamura`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nUnderDog (DEF), Breaker (DEF), Surge\nBerserker (DEF), Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/xICVJ_Bab_o0IxGh7ucrzc_M_S7IiiexKBm8IIlWYm4/https/i.ibb.co/1bs3dyq/4ecde28e34e7.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Loke, Sr/Ur Ikumi Mito \n\n**__2nd Composition__** : Sr/Ur Jiraiya, Sr/Ur Senku, Sr/Ur Dio Brando/Tsukasa Shishio \n\n**__3rd Composition__** : Sr/Ur Loke, Sr/Ur Senku, Sr/Ur Dio Brando/Tsukasa Shishio\n\n**Note: You May Need Some RNG To Cap Motoyasu Kitamura Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `mukuro`,
                name2: `rokudo`,
                cardName: `Mukuro Rokudo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `nagisa`,
                name2: `nagisa`,
                cardName: `Nagisa Shiota`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[1]} ${emojis.ULTIMATE_COMBO}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `nagito`,
                name2: `komaeda`,
                cardName: `Nagito Komaeda`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `Nami`,
                name2: `nami`,
                cardName: `Nami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `Nana`,
                name2: `nana`,
                cardName: `Nana`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `naofumi`,
                name2: `iwatani`,
                cardName: `Naofumi Iwatani`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/FoYS6U3tFA0AoqT-TrWvJhTImlwjDfCwe0RmDPLq08A/https/i.ibb.co/d67Ftj1/5632387b22c1.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion \n\n**__2nd Composition__** : Sr/Ur Kokoro, Sr/Ur Riko, Sr/Ur Surge\n\n**Note: You May Need Some RNG To Cap Naofumi Iwatani Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `naomi`,
                name2: `misora`,
                cardName: `Naomi Misora`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `naraku`,
                name2: `naraku`,
                cardName: `Naraku`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/_4_Q1Zl2xW-WEA54bs9hrUbLmDyeQq6yn_XWbwEBSlk/https/i.ibb.co/B4YktQB/213ccb40d5dd.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Naraku Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `naruto`,
                name2: `uzumaki`,
                cardName: `Naruto Uzumaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Fire** damage based on __18/20__% of your ATK.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `Dragneel`,
                name2: `dragneel`,
                cardName: `Natsu Dragneel`,
                basicComposition: `(ATK) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-2.discordapp.net/external/UWfu5QhgzMoqVgSJtAZEmqZ3KE570jWa8luxnChMvnY/https/i.ibb.co/zF09gy7/0c703fe29018.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Alex, Sr/Ur Yuno Gasai/ Fuyumi\n\n**Note: You May Need Some RNG To Cap Natsu Dragneel Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `natsuki`,
                name2: `natsuki`,
                cardName: `Natsuki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[23]} ${emojis.LIFE_SAP}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `near`,
                name2: `near`,
                cardName: `Near`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108/120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `neji`,
                name2: `hyuga`,
                cardName: `Neji Hyuga`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[1]} ${emojis.ULTIMATE_COMBO}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `nero`,
                name2: `nero`,
                cardName: `Nero`,
                basicComposition: `Regeneration, Berserker (DEF), Elemental Strike (ATK/DEF)\nAmplifier (DEF), Double Life Sap\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-1.discordapp.net/external/rzHwGjIOUZxfyTJseKRzYSaLPiXZWmHVFtt5GmYxQjo/https/i.ibb.co/vHdtsMZ/1191b71a6a4e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ban, Sr/Ur Mayuri, Sr/Ur Jellal \n\n**__2nd Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Nero Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `nezuko`,
                name2: `kamado`,
                cardName: `Nekuzo Kamado`,
                basicComposition: `Regeneration, Berserker (DEF), Elemental Strike (ATK/DEF)\nAmplifier (DEF), Double Life Sap\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-1.discordapp.net/external/rzHwGjIOUZxfyTJseKRzYSaLPiXZWmHVFtt5GmYxQjo/https/i.ibb.co/vHdtsMZ/1191b71a6a4e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ban, Sr/Ur Mayuri, Sr/Ur Jellal \n\n**__2nd Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Nero Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `nico`,
                name2: `robin`,
                cardName: `Nico Robin`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/-1W1GkOqrCFCs2u7HHfo64RD4dKqI7KEyNvmNNA3jWc/https/i.ibb.co/6DndZkS/c720bb110c02.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Ur Iris\n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Tanjiro, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Nico Robin Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108/120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `nino`,
                name2: `ninonakano`,
                cardName: `Nino Nakano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `nobara`,
                name2: `kugisaki`,
                cardName: `Nobara Kugisaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `nobuchika`,
                name2: `ginoza`,
                cardName: `Nobuchika Ginoza`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `noda`,
                name2: `noda`,
                cardName: `Noda`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27/30__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `noelle`,
                name2: `silva`,
                cardName: `Noelle Silva`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `no`,
                name2: `face`,
                cardName: `No Face`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/zATn-puGwIb-h8TxUoXfn4cpPZm-7p8AdeW0BiUAvzU/https/i.ibb.co/q9q3tCg/d70642c2ccf5.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap No Face Raids**.`,
                cardTalent: `${diffEmojis[23]} ${emojis.LIFE_SAP}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `november`,
                name2: `november`,
                cardName: `November`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `nui`,
                name2: `harime`,
                cardName: `Nui Harime`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ochaco`,
                name2: `uraraka`,
                cardName: `Ochaco Uraraka (Uravity)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27/30__%.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `okita`,
                name2: `sougo`,
                cardName: `Okita Sougo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Water** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `origami`,
                name2: `tobiichi`,
                cardName: `Origami Tobiichi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `osamu`,
                name2: `dazai`,
                cardName: `Ozamu Dazai`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[41]} ${emojis.UNLUCKY_COIN}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `padoru`,
                name2: `padoru`,
                cardName: `Padoru`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[7]} ${emojis.SOUL_STEALER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `pain`,
                name2: `pain`,
                cardName: `Pain`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `piccolo`,
                name2: `piccolo`,
                cardName: `Piccolo`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Ram Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Grass** damage based on __18/20__% of your DEF.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            //
            {
                name1: `portgas`,
                name2: `ace`,
                cardName: `Portgas D Ace`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-2.discordapp.net/external/XOxmX9ZwDXxfAhtXpGu7GvAE8LUsClP-63VajgOwMVw/https/i.ibb.co/rvZPRYF/f4fa47e265ee.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Yami Sukehiro, Sr/Ur Fuyumi \n\nUr Surge Can Be Used Insead Of Sr/Ur Fuyumi \n\n**Note: You May Need Some RNG To Cap Portgas D Ace Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `priestess`,
                name2: `priestess`,
                cardName: `Priestess`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nBerserker (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/GU18YEAtqqW1TMMq_cRpwwiZnZ8ny50VqtBJoO5Z0kE/https/i.ibb.co/WnKDxdh/a804de43d0ef.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Kurapika, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__3rd Composition__** : Sr/Ur Sayaka, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**Note: You May Need Some RNG To Cap Priestess Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `prince`,
                name2: `diamond`,
                cardName: `Prince Diamon`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `puck`,
                name2: `puck`,
                cardName: `Puck`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `rabo`,
                name2: `rabo`,
                cardName: `rabo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `ram`,
                name2: `ram`,
                cardName: `Ram`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Vy0H_isKedqUnrSE18N6ncg5lATEyj62gylmP13et3o/https/i.ibb.co/qgc2j2m/53f930cf7763.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Ram Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Grass** damage based on __18/20__% of your ATK.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `ranpo`,
                name2: `edogawa`,
                cardName: `Ranpo Edogawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `raphtalia`,
                name2: `raphtalia`,
                cardName: `Raphtalia`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `reborn`,
                name2: `reborn`,
                cardName: `Reborn`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `rei`,
                name2: `hino`,
                cardName: `Rei Hino (Sailor Mars)`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-2.discordapp.net/external/yo_y6EQfcGREseMLi-IgS5ARbWNPRBQN8wqKb01x-Kw/https/i.ibb.co/5Fvsv8K/e613c120728c.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Yami Sukehiro, Sr/Ur Fuyumi \n\nUr Surge Can Be Used Insead Of Sr/Ur Fuyumi \n\n**Note: You May Need Some RNG To Cap Rei Hino (Sailor Mars) Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `reisuke`,
                name2: `houjou`,
                cardName: `reisuke Houjou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `rem`,
                name2: `rem`,
                cardName: `Rem`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `ren`,
                name2: `amaki`,
                cardName: `Ren Amaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `Amamiya`,
                name2: `joker`,
                cardName: `Ren Amamiya (Joker)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `hakuryuu`,
                name2: `hakuryuu`,
                cardName: `Ren Hakuryuu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Dark** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `renzo`,
                name2: `shima`,
                cardName: `Renzo Shima`,
                basicComposition: `Double Trickroom, Surge\n(ATK) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/stN5emKE1i1F81M4W5hYVc-BCQHCgO8z98eGiUOgLBQ/https/i.ibb.co/z49Mhhb/510fc9ef032c.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Kenma, Sr/Ur Yuno Gasai/Fuyumi \n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Shoto, Sr/Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Renzo Shima Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `rias`,
                name2: `gremory`,
                cardName: `Rias Gremory`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Fire** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `riko`,
                name2: `saikawa`,
                cardName: `Riko Saikawa`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/76EDsZtlPC5dCconU5hcn1f-rDxD8J0tpZmeJg9djMg/https/i.ibb.co/rfzXskH/1746efa83678.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Riko Saikawa Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `rimuru`,
                name2: `tempest`,
                cardName: `Rimuru Tempest`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `rin`,
                name2: `okumura`,
                cardName: `Rin Okumura`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `rintarou`,
                name2: `okabe`,
                cardName: `Rintarou Okabe`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[10]} ${emojis.REJUVENATION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `tohsaka`,
                name2: `rintohsaka`,
                cardName: `Rin Tohsaka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ririka`,
                name2: `momobami`,
                cardName: `Ririka Momobami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `ritsu`,
                name2: `ritsu`,
                cardName: `Ritsu`,
                basicComposition: `Double Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/u-xOHIZq_5I34Y8kyX7qUtFIPna-FmrjBnesXlf_Vtw/https/i.ibb.co/t3GVVNm/c206ec15952b.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito \n\n**__2nd Composition__** : Ur Jiraiya,  Ur Senku, Ur Garou \n\n**Note: You May Need Some RNG To Cap Ritsu Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base DEF as **Electric** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `kageyama`,
                name2: `kageyama`,
                cardName: `Ritsu Kageyama`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `tainaka`,
                name2: `Tainaka`,
                cardName: `Ritsu Tainaka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Neutral** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `riza`,
                name2: `hawkeye`,
                cardName: `Riza Hawkeye`,
                basicComposition: `No Composition`,
                cardImage: 'Endurance, Trickroom (DEF), Surge/Bloodthirster',
                cardTeams: `**__1st Composition__** : Sr/Ur Naomi/Jonathan, Sr/Ur Kenma, Sr/Ur Zombieman/Fuyumi\n\n**Note: You Cannot Cap Riza Hawkeye Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `rize`,
                name2: `tadeza`,
                cardName: `Rize Tadeza`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://media.discordapp.net/attachments/803222060553076796/849377148179054592/card.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Rize Tadeza Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `rock`,
                name2: `lee`,
                cardName: `Rock Lee`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge/Bloodthirster\n(ATK) Trickroom, Berserker (DEF), Surge/Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Mio Naruse, Sr/Ur Yuno Gasai/Tokisaki\n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Yuno Gasai/Tokisaki\n\n**Note: You May Need Some RNG To Cap Rock LeeRaids.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `roronoa`,
                name2: `zoro`,
                cardName: `Roronoa Zoro`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            //
            {
                name1: `rossweisse`,
                name2: `rossweisse`,
                cardName: `Rossweisse`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `roy`,
                name2: `mustang`,
                cardName: `Roy Mustang`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `rukia`,
                name2: `kuchiki`,
                cardName: `Rukia Kuchiki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `ryohei`,
                name2: `sasagawa`,
                cardName: `Ryohei Sasagawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ryo`,
                name2: `kurokiba`,
                cardName: `Ryo Kurokiba`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `ryota`,
                name2: `suzui`,
                cardName: `Ryota Suzui`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (DEF)\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-2.discordapp.net/external/Vwp1fU_YkhaNlp_7tEo4t-CKjeXyWbVy_6w7xdWd0I4/https/i.ibb.co/6tMPZ2Q/bc1856a21d4c.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Zuberg, Sr/Ur Mayuri/Wiz, Sr/Ur Mine \n\n**__2nd Composition__** : Sr/Ur Mayu, Sr/Ur Iris, Sr/Ur Iris\n\n**Note: You May Need Some RNG To Cap Greed Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `ryuji`,
                name2: `suguro`,
                cardName: `Ryuji Suguro`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ryuk`,
                name2: `ryuk`,
                cardName: `Ryuk`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap `,
                cardImage: 'https://images-ext-2.discordapp.net/external/yHAShkNuM7dPyI3A0NduxbAV2PnbGyZStcGa0aj_uk8/https/i.ibb.co/1ZNKHyR/624e9a6fa29f.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize , Sr/Ur Mayuri, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize , Sr/Ur Wiz, Ur No Face \n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Ryuk Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `ryuko`,
                name2: `matoi`,
                cardName: `Ryuko Matoi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `ryuu`,
                name2: `lion`,
                cardName: `Ryuu Lion`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[1]} ${emojis.ULTIMATE_COMBO}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            //
            {
                name1: `saitama`,
                name2: `saitama`,
                cardName: `Saitama`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Neutral** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `sakura`,
                name2: `harano`,
                cardName: `Sakura Harano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their SPD.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `matou`,
                name2: `matou`,
                cardName: `Sakura Matou`,
                basicComposition: `Regeneration, Berserker (DEF), Elemental Strike (ATK/DEF)\nAmplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/immMILZkyjIvyoGZs5Hio76LlvMOX2_-33ZjItsT_xM/https/i.ibb.co/Fb5vrz4/ad71f21e21fa.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ban, Sr/Ur Mayuri, Sr/Ur Jellal \n\n**__2nd Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__4th Composition__** : Sr/Ur Rize/Subaru/Naraku/Maria Naruse, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Sakura Matou Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `sango`,
                name2: `sango`,
                cardName: `Sango`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their DEF.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `sanji`,
                name2: `sanji`,
                cardName: `Sanji`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Fire** damage equal to __27/30__% of your ATK, and take ¼ of the damage dealt to yourself.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `sans`,
                name2: `sans`,
                cardName: `Sans`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `sasuke`,
                name2: `sasuke`,
                cardName: `Sasuke Uchiha`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/BloodThirst`,
                cardImage: 'https://images-ext-1.discordapp.net/external/u5S6-XPB26vBP8pSOkRRZbuQleFMZdAWh7dhgzhqrOE/https/i.ibb.co/f9YRKKd/496504d21a05.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Yami Sukehiro, Sr/Ur Yuno Gasai/Staz\n\n**Note: You May Need Some RNG To Cap Sasuke Uchiha Raids**.`,
                cardTalent: `${diffEmojis[34]} Blaze: Inflict a stack of Burn to enemy familiars, dealing 10% **True** damage per turn, as well as reducing all healing effects on them by 75%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `saten`,
                name2: `ruiko`,
                cardName: `Saten Ruiko`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the ATK of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `satoru`,
                name2: `gojo`,
                cardName: `Satoru Gojo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the ATK of all allied familiars by 54/60%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `Satoshi`,
                name2: `Isshiki`,
                cardName: `Satoshi Isshiki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `satsuki`,
                name2: `kiryuin`,
                cardName: `Satsuki Kiryuin`,
                basicComposition: `Double Ur Trickroom, Surge\nApmlifier (DEF), Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/0v1_Hw7z52mxoKGRL0ui4jIJsItrd2-Za-v9rpzgJ9k/https/i.ibb.co/FKWWVYC/a538387fae11.png',
                cardTeams: `**__1st Composition__** : Ur Sora, Ur Hinawa, Ur Yuno Gasai\n\n**__2nd Composition__** : Ur Amplifier (DEF), Ur Life Sap, Ur Life Sap\n\nAll Srs Team Might Not Work.\n\n**Note: You May Need Some RNG To Cap Satsuki Kiryuin Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `sayaka`,
                name2: `maizono`,
                cardName: `Sayaka Maizo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `sayori`,
                name2: `sayori`,
                cardName: `Sayori`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} Overload: When the battle starts, increase the DEF by __99/110__% of all allied familiars. Your DEF decreases by __14/16__% every turn after that.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `scar`,
                name2: `scar`,
                cardName: `Scar`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Electric** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `scathach`,
                name2: `scat`,
                cardName: `Scathach`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `sebas`,
                name2: `tian`,
                cardName: `Sebas Tian`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `senku`,
                name2: `senku`,
                cardName: `Senku Ishigami`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nUnderDog (DEF), Breaker (DEF), Surge\nBerserker (DEF), Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/GttRRkB1sty6CSJ1UEjOS1X--njANjF40kFTSdv7n-U/https/i.ibb.co/8x9tZGJ/db80c3f9bfac.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Loke, Sr/Ur Ikumi Mito \n\n**__2nd Composition__** : Sr/Ur Jiraiya, Sr/Ur Riko, Sr/Ur Yuno Gasai/Tsukasa Shishio \n\n**__3rd Composition__** : Sr/Ur Loke, Sr/Ur Riko, Sr/Ur Yuno Gasai/Tsukasa Shishio\n\n**Note: You May Need Some RNG To Cap Senku Ishigami Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `sesshomaru`,
                name2: `sesshomaru`,
                cardName: `Sesshomaru`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `shalltear`,
                name2: `bloodfallen`,
                cardName: `Shalltear Bloodfallen`,
                basicComposition: `(DEF) Trickroom, Recoil, Surge/Life Sap\nOffensive Stance, (DEF) Trickroom, Surge/Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/xeftE0t94pQh4F5AxnQmJo8aMSh_08ylOGKdBTNZLEk/https/i.ibb.co/wyyNjtT/04dc6a826c09.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Nico, Sr/Ur Yami, Sr/Ur Zombieman/No Face\n\n**__2nd Composition__** : Sr/Ur Minene, Sr/Ur Kenma, Sr/Ur Zombieman \t **Needs A Resist.**\n\nYou Can Use Other (DEF) Trickroom, Other Than Nico\n\n**Note: You May Need Some RNG To Cap Shalltear Bloodfallen Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `sharo`,
                name2: `kirima`,
                cardName: `Sharo Kirima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            //
            {
                name1: `shido`,
                name2: `itsuka`,
                cardName: `Shido Itsuka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Water** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `shiemi`,
                name2: `moriyama`,
                cardName: `Shiemi Moriyama`,
                basicComposition: `Overload, Limiter, BloodThirster`,
                cardImage: 'https://images-ext-2.discordapp.net/external/EUMM79ujDpk3d8ZHydjDEHu4va0Q8fEwU1uLu7x1xt0/https/i.ibb.co/0Jh7pDg/756610c5b1d0.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Escanor, Sr/Ur Renzo, Sr/Ur Tokisaki\n\n**Note: You May Need Some RNG To Cap Shiemi Moriyama Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `shigeo`,
                name2: `kageyama`,
                cardName: `Shigeo Kageyama`,
                basicComposition: `(ATK/DEF) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/Adyqjps2J7xAAemMmoRL_XUMZ81VRTM8jyR0OuYhgJk/https/i.ibb.co/DC9DDVs/337627864a3f.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Gowther, Ur Surge \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Ur Surge\n\n**Note: You May Need Some RNG To Cap Shigeo Kageyama Raids**.`,
                cardTalent: `${diffEmojis[9]} ${emojis.REVERSION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shikamaru`,
                name2: `nara`,
                cardName: `Shikamaru Nara`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `shimura`,
                name2: `shinpachi`,
                cardName: `Shimura Shinpachi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[1]} ${emojis.ULTIMATE_COMBO}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shinoa`,
                name2: `hiragi`,
                cardName: `Shinoa Hiragi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shinobu`,
                name2: `kocho`,
                cardName: `Shinobu Kocho`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `shinra`,
                name2: `kusakabe`,
                cardName: `Shinra Kusakabe`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Fire** damage based on __18/20__% of your ATK.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shinya`,
                name2: `hiragi`,
                cardName: `Shinya Hiragi`,
                basicComposition: `Double Trickroom, Surge/Bloodthirster\n(ATK) Trickroom, Endurance, Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/Yt3BexbKp9_u1C4HbU-4Op3oHOrR4rTMbXvsuC4dKLo/https/i.ibb.co/TKZPKdL/bf1661864be6.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Kenma, Sr/Ur Yuno Gasai/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Jonathan, Sr/Ur Natsuki/Iris\n\n**Note: You May Need Some RNG To Cap Shinya Hiragi Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the DEF of all allies by __27/30__%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `kogami`,
                name2: `kogami`,
                cardName: `Shinya Kogami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `shion`,
                name2: `shion`,
                rareInfo: `**HP**:1379\n**ATK**:1785\n**DEF**:1379\n**SPD**:1184\n\n**PL**:5727`,
                srInfo: `**HP**:1414\n**ATK**:1831\n**DEF**:1414\n**SPD**:1215\n\n**PL**:5874`,
                urInfo: `**HP**:1470\n**ATK**:1903\n**DEF**:1470\n**SPD**:1262\n\n**PL**:6105`,
                cardName: `Shion`,
                basicComposition: `(ATK/DEF) Trickroom, Berkserker (DEF) / Limiter, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/xq_9nWCcO0aw6WygnCMOne8ujsqGm8pVROfmbgIfqNU/https/i.ibb.co/6NbdPJf/9a3817cacc86.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki\n\n**__4th Composition__** : Sr/Ur Sora, Sr/Ur Shinra Kusakabe, Sr/Ur Maki Oze \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Shion Raids**.`,
                cardTalent: `${diffEmojis[5]}Time Attack: Deal __9/10__% of your base ATK as **Grass** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `shirai`,
                name2: `kuroko`,
                cardName: `Shirai Kuroko`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shirley`,
                name2: `fenette`,
                cardName: `Shirley Fenette`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shiro`,
                name2: `shiro`,
                cardName: `Shiro`,
                basicComposition: `Double Trickroom, Surge\n(ATK) Trickroom, Breaker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/s9X6jyaVvGlk8Un6KpWnbB5dH7LDSm6GSvbdLE_greY/https/i.ibb.co/dByPP11/e69f66dc81b4.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo, Sr/Ur Kenma, Sr/Ur Dio Brando/Luck Voltia \n\n**__2nd Composition__** : Sr/Ur Ranpo, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck Voltia\n\n**Note: You May Need Some RNG To Cap Shiro Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `shirou`,
                name2: `emiya`,
                cardName: `Shirou Emiya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shizue`,
                name2: `izawa`,
                cardName: `Shizue Izawa`,
                basicComposition: `Endurance/Amplifier, Double Sap\n(DEF) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/8mcgyWOSTm545X3T_9fRVSQ9XC_rOQTVlrIbXQ82Jtk/https/i.ibb.co/RHRNL5D/234da1630fc3.png?width=375&height=499',
                cardTeams: `**__1st Composition__** : Sr/Ur Jonathan/Naomi, Sr/Ur Natsuki, Sr/Ur Natsuki \n\n**__2nd Composition__** : Sr/Ur Noelle Silva, Sr/Ur Natsuki, Sr/Ur Natsuki \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Natsuki, Sr/Ur Natsuki\n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto, Sr/Ur Yuno Gasai \n\nUr/Sr/Ur Life Sap Can Be Used Insead Of Sr/Ur Natsuki \n\n**Note: You May Need Some RNG To Cap Shizue Izawa Raids**.`,
                cardTalent: `${diffEmojis[5]} Time Attack: Deal __9/10__% of your base DEF as **Fire** damage. The damage increases by __40/40__% for every turn passed.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `shogo`,
                name2: `makishima`,
                cardName: `Shogo Makishima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[43]} ${emojis.MIRACLE_INJECTION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `shokuhou`,
                name2: `misaki`,
                cardName: `Shokuhou Misaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `sho`,
                name2: `suzuki`,
                cardName: `Sho Zuzuki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shota`,
                name2: `aizawa`,
                cardName: `Shota Aizawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            //
            {
                name1: `shoto`,
                name2: `todoroki`,
                cardName: `Shoto Todoroki`,
                basicComposition: `Endurance, Breaker (DEF), Surge\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/dy3fsswNMiIBPvqztpNsq2FEYmSTwuMpQkxdJwsu8PY/https/i.ibb.co/Mk490BG/1ebc2c0157d3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gintoki, Sr/Ur Motoyasu, Sr/Ur Dio Brando \n\n**__2nd Composition__** : Sr/Ur Yu Nishinoya, Sr/Ur Motoyasu, Sr/Ur Dio Brando \n\n**__3rd Composition__** : Sr/Ur Gintoki, Sr/Ur Wiz, Sr/Ur Natsuki\n\n**Note: You Cannot Cap Shoto Todoroki Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `shoyo`,
                name2: `hinata`,
                cardName: `Shoyo Hinata`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nBerserker (DEF), Double Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/ruC6YLZ3oOVfCb7AeCQ-l2FzWva93bdzNDy1Hn38fdY/https/i.ibb.co/dfMj11P/cb30cd77bf9d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Stephanie Dola, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__2nd Composition__** : Sr/Ur Kurapika, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**__3rd Composition__** : Sr/Ur Ririka, Sr/Ur Kirari Momobami, Sr/Ur Kirari Momobami\n\n**Note: You May Need Some RNG To Cap Shoyo Hinata Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `shrek`,
                name2: `shrek`,
                cardName: `Shrek`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `shusei`,
                name2: `kagari`,
                cardName: `Shusei Kagari`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[43]} ${emojis.MIRACLE_INJECTION}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `sinbad`,
                name2: `sinbad`,
                cardName: `Sinbad`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `sinon`,
                name2: `sinon`,
                cardName: `Sinon`,
                basicComposition: `(ATK) Trickroom, Endurance, Surge\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ririka, Sr/Ur Fushiguro, Sr/Ur Byakuya\n\n**__2nd Composition__** : Sr/Ur Fushiguro, Sr/Ur Kurapika, Ur Kirari\n\n**Note: You May Need Some RNG To Cap Sinon Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            }, // Completed
            {
                name1: `skeleton`,
                name2: `skeleton`,
                cardName: `Skeleton`,
                basicComposition: `Overload, Limiter, Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ulquiorra Schiffer, Sr/Ur Mephisto, Sr/Ur Staz\n\n**__2nd Composition__** : Sr/Ur Liz, Sr/Ur Diablo, Sr/Ur Krul\n\n**Note: You May Need Some RNG To Cap Skeleton Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            }, // Completed
            {
                name1: `soma`,
                name2: `Yukihira`,
                cardName: `Soma Yukihira`,
                basicComposition: `No Composition`,
                cardImage: 'Overload, Limiter, Bloodthirster',
                cardTeams: `**__1st Composition__** : Sr/Ur Ritsu Kageyama, Sr/Ur Shiro, Sr/Ur Fuyumi\n\n**Note: You May Need Some RNG To Cap Soma Yukihira Raids**.`,
                cardTalent: `${diffEmojis[21]} ${emojis.MANA_REAVER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            }, // Completed
            {
                name1: `son`,
                name2: `goku`,
                cardName: `Son Goku`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `sora`,
                name2: `sora`,
                cardName: `Sora`,
                basicComposition: `(DEF) Trickroom, Precision, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/MgOgFWRMKDgu4ijvIi5Zxz9Hf0jRSNsHaC-GSQgfNKw/https/i.ibb.co/ftz4Mmg/08a93cab49cc.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Shoto Todoroki, Sr/Ur Zombieman/Fuyumi\n\n**Note: You May Need Some RNG To Cap Sora Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `sosuke`,
                name2: `aizen`,
                cardName: `Sosuke Aizen`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `souei`,
                name2: `souie`,
                cardName: `Souei`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `soul`,
                name2: `evans`,
                cardName: `Soul Evans`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `spike`,
                name2: `spiegel`,
                cardName: `Spike Spiegel`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `squalo`,
                name2: `squalo`,
                cardName: `Squalo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `staz`,
                name2: `blood`,
                cardName: `Staz C Blood`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `stephanie`,
                name2: `dola`,
                cardName: `Stephanie Dola`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[40]} Amplifier: Increase the DEF of all allied familiars by __23/26__% for each allied familiar of the same type as the wielder. (This effect is doubled if your team only consists of 1 familiar)`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `subaru`,
                name2: `subaru`,
                cardName: `Subaru Natsuki`,
                basicComposition: `Amplifier (DEF), Double Life Sap\nEndurance, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/7GecF8sOqxzNIJjAFaYfFIPeipLVbi4_XoEAAA1mZ4k/https/i.ibb.co/0fPLf7N/231c381c59de.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Sebas Tian, Sr/Ur No Face, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Inosuke, Sr/Ur No Face, Sr/Ur No Face\n\n**__3rd Composition__** : Sr/Ur Rize/Subaru/Naraku, Sr/Ur No Face, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Subaru Natsuki Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `suika`,
                name2: `suika`,
                cardName: `Suika`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[24]} ${emojis.GRIEVOUS_LIMITER}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `suou`,
                name2: `pavilchenko`,
                cardName: `Suou Pavilchenko`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (DEF)\nEndurance, Double Life Sap `,
                cardImage: 'https://images-ext-2.discordapp.net/external/uICgh0Ol6Tyb36V4ZEqtvx1TO6xVCDgJTLN1KieUagU/https/i.ibb.co/jD60VbX/b57943a179c3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Zuberg, Sr/Ur Mayuri/Wiz, Sr/Ur Mine \n\n**__2nd Composition__** : Sr/Ur Mayu, Sr/Ur Iris, Sr/Ur Iris\n\n**Note: You May Need Some RNG To Cap Greed Raids**.`,
                cardTalent: `${diffEmojis[13]} ${emojis.PROTECTOR}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `suzaku`,
                name2: `kururugi`,
                cardName: `Suzaku Kururugi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `suzuha`,
                name2: `suzuha`,
                cardName: `Suzuha Amane`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their DEF.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `suzuya`,
                name2: `juuzou`,
                cardName: `Suzuya Juuzou`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `sword`,
                name2: `maiden`,
                cardName: `Sowrd Maiden`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `takasugi`,
                name2: `shinsuke`,
                cardName: `Takasugi Shinsuke`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `takehisa`,
                name2: `hinawa`,
                cardName: `Takehisa Hinawa`,
                basicComposition: `(ATK) Trickroom, Precision, Surge/Bloodthirster\nEndurance, Double Life Sap\Amplifier (DEF), Double Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://media.discordapp.net/attachments/817075441029611571/849554672057581578/card.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Shoto, Sr/Ur Yuno Gasai/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Jonathan, Sr/Ur Natsuki, Sr/Ur Natsuki \n\n**__3rd Composition__** : Sr/Ur Noelle Silva, Sr/Ur Natsuki*, Sr/Ur Natsuki*\n\n**__4th Composition__** : Sr/Ur Aoi Asahina, Sr/Ur Wiz, Sr/Ur Elma\nYou Can Use Sr/Ur Life Sap Instead Of Sr/Ur Natsuki. (Except For Noelle Team)\n\n**Note: You May Need Some RNG To Cap Takehisa Hinawa Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' DEF is higher than yours, your allies gain DEF equal to __108/120__% of the difference between the two DEF's, and simultaneously reduce their DEF by the same amount.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `takeshi`,
                name2: `yamamoto`,
                cardName: `Takeshi Yamamoto`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `takumi`,
                name2: `aldini`,
                cardName: `Takumi Aldini`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `tamaki`,
                name2: `kotatsu`,
                cardName: `Tamaki Kotatsu`,
                basicComposition: `(ATK) Trickroom, Berserker (DEF), Surge/BloodThirster\n(ATK) Trickroom, Berserker (DEF), Life Sap`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Wiz, Sr/Ur Byakuya/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Wiz, Sr/Ur Natsuki/ Iris\n\n**Note: You May Need Some RNG To Cap Tamaki Kotatsu Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `tanjiro`,
                name2: `kamado`,
                cardName: `Tanjiro Kamado`,
                basicComposition: `(DEF) Trickroom, Double Life Sap\n Regeneration, Berserker (DEF), Time Attack/Vengeance\nCelestial Blessing, Endurance, Time Attack/Vengeance`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Natsuki/No face, Sr/Ur Natsuki/No face\n\n**__2nd Composition__** : Sr/Ur Edward, Sr/Ur Wiz/Tanjiro, Sr/Ur Ritsu/Vegeta\n\n**__3rd Composition__** : Sr/Ur Yukina, Sr/Ur Gintoki/Yu Nishinoya, Sr/Ur Ritsu/Vegeta\n\n**Note: You May Need Some RNG To Cap Tanjiro Kamado Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            //
            {
                name1: `tatsumaki`,
                name2: `tatsumaki`,
                cardName: `Tatsumaki`,
                basicComposition: `Pain For Power, `,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Grass** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `tatsumi`,
                name2: `tatsumi`,
                cardName: `Tatsumi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `teruki`,
                name2: `hanazawa`,
                cardName: `Teruki Hanazawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `tet`,
                name2: `tet`,
                cardName: `Tet`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `tetsuro`,
                name2: `kuroo`,
                cardName: `Tetsuro Kuroo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `tobio`,
                name2: `tobio`,
                cardName: `Ritsu Kageyama`,
                basicComposition: `(ATK) Trickroom, Protector, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Ur Evo 1  Momo/Priestess, Sr/Ur Dio Brando\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Kanna, Ur Dio Brando\n\n**Note: You May Need Some RNG To Cap Ritsu Kageyama Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `toge`,
                name2: `inumaki`,
                cardName: `Toge Inumaki`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `tohka`,
                name2: `yatogami`,
                cardName: `Tohka Yatogami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[26]} ${emojis.EXECUTIONER}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `tohru`,
                name2: `tohru`,
                cardName: `Tohru`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            {
                name1: `toko`,
                name2: `fukawa`,
                cardName: `Toko Fukawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `tony`,
                name2: `chopper`,
                cardName: `Tony Tony Chopper`,
                basicComposition: `(Attach) Trickroom, Double Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/jqeiWJVIdum6PlQMsWltklJZR9eAMKe3XfHmhuRJlzE/https/i.ibb.co/P9ZQvXp/36dcf2c261eb.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**Note: You May Need Some RNG To Cap Tony Tony Chopper Raids**.`,
                cardTalent: `${diffEmojis[3]} ${emojis.TRANSFORMATION}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `toshiro`,
                name2: `hitsugaya`,
                cardName: `Toshiro Hitsugaya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[25]} Freeze: Inflict a stack of **Frozen** to enemy familiars, crippling their movement speed as well as permanently decreasing their ATK by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `touka`,
                name2: `kirishima`,
                cardName: `Touka Kirishima`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[15]} ${emojis.POISON}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `trafalgar`,
                name2: `law`,
                cardName: `Trfalgar D Law`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `trunks`,
                name2: `trunk`,
                cardName: `Trunks`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[4]} ${emojis.TIME_BOMB}`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `tsubaki`,
                name2: `kasugano`,
                cardName: `Tsubaki Kasugano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur Yuno Gasai \n\n**__3rd Composition__** : Sr/Ur Izumo, Sr/Ur Naraku/Maria Naruse, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Ulquiorra Schiffer Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `tsukasa`,
                name2: `shishio`,
                cardName: `Tsukasa Shishio`,
                basicComposition: `Regeneration, Berserker (DEF), Time ATK (ATK/DEF)\nPain For Power, Breaker (DEF), Surge\nDouble Trickroom`,
                cardImage: 'https://images-ext-1.discordapp.net/external/q0dUJCP20PHyeoc4kHfPQ6MjPsM0d75pel4XE7QlNHQ/https/i.ibb.co/Htnpyk1/2f6d943a338a.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Liala, Sr/Ur Loke, Sr/Ur Shion \n\n**__2nd Composition__** : Sr/Ur Kokoro, Sr/Ur Riko, Sr/Ur Surge\n\n**Note: You May Need Some RNG To Cap Momo Yaoyoruzo Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `tsukuyo`,
                name2: `tsukuyo`,
                cardName: `Tsukuyo`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `tsumugi`,
                name2: `kotobuki`,
                cardName: `Tsumugi Kotobuki`,
                basicComposition: `(DEF) Trickroom, Berkserker (ATK) / Pain For Power / Precision , Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/AlUi2B-rFMc25Ft_nMl6vG3cqPhiYmnNIDU7e6ha5BI/https/i.ibb.co/fFRFGVC/164e68457b8e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Kurosaki, Sr/Ur Byakuya \n\n**__2nd Composition__** : Sr/Ur Kenma, Sr/Ur Misa, Sr/Ur Byakuya \n\n**__3rd Composition__** : Sr/Ur Kenma, Sr/Ur Shoto/Faye, Sr/Ur Byakuya \n\nUr Surge Can Be Used Insead Of Sr/Ur Byakuya \n\n**Note: You May Need Some RNG To Cap Tsumugi Kotobuki Raids**.`,
                cardTalent: `${diffEmojis[11]} ${emojis.REGENERATION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `Tsuyanoshi`,
                name2: `Sawada`,
                cardName: `Tsuyanoshi Sawada (Tsuna)`,
                basicComposition: `Double Trickroom, Surge/Bloodthirster\n(ATK) Trickroom, Endurance, Life Sap`,
                cardImage: 'https://images-ext-1.discordapp.net/external/_uM0DHKeyhSpCumHNNT2k5Onp6ftT8cB4L4_SQ0nzAk/https/i.ibb.co/5RzVhqD/633c7576d343.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Kenma, Sr/Ur Yuno Gasai/Fuyumi\n\n**__2nd Composition__** : Sr/Ur Gowther, Sr/Ur Jonathan, Sr/Ur Natsuki/Iris\n\n**__2nd Composition__** : Sr/Ur Jack, Sr/Ur Kenma, Sr/Ur Yuno Gasai/Fuyumi\n\n**Note: You May Need Some RNG To Cap Tsuyanoshi Sawada (Tsuna) Raids**.`,
                cardTalent: `${diffEmojis[0]} Underdog: While your HP % is lower than the enemy's HP %, increase the ATK of all allies by __27/30__%.`,
                cardType: `Fire :fire:`,
                cardColor: '#FB6631'
            },
            //
            {
                name1: `ukyo`,
                name2: `saionji`,
                cardName: `Ukyo Saionji`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the ATK of all enemy familiars by __36/40__%.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `ulquiorra`,
                name2: `schiffer`,
                cardName: `Ulquiorra Schiffer`,
                basicComposition: `(ATK) Trickroom, Protector, Life Sap\n(ATK) Trickroom, Protector, Surge\n(ATK) Trickroom, Underdog (DEF), Surge,`,
                cardImage: 'https://images-ext-2.discordapp.net/external/sobSSIoyt-DOafGWPC3Yt7cqBqdQ9v-pU0PxtcKd15o/https/i.ibb.co/8c1bfgL/913714e2438e.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur No Face\n\n**__2nd Composition__** : Sr/Ur Izumo, Sr/Ur Kei Tsukishima/Nero/Sakura Matou, Sr/Ur Yuno Gasai \n\n**__3rd Composition__** : Sr/Ur Izumo, Sr/Ur Naraku/Maria Naruse, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Ulquiorra Schiffer Raids**.`,
                cardTalent: `${diffEmojis[18]} ${emojis.OVERLOAD}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `usagi`,
                name2: `tsukino`,
                cardName: `Usagi Tsukino (Sailor Moon)`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[2]} Trickroom: If the enemy familiars' ATK is higher than yours, your allies gain ATK equal to __108/120__% of the difference between the two ATK's, and simultaneously reduce their ATK by the same amount.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `usopp`,
                name2: `ussop`,
                cardName: `Usopp`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Neutral** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `uzu`,
                name2: `sanageyama`,
                cardName: `Uzu Sanageyama`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `vegeta`,
                name2: `vegeta`,
                cardName: `Vegeta`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their DEF.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `Vicious`,
                name2: `vicious`,
                cardName: `Vicious`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `violet`,
                name2: `evergarden`,
                cardName: `Violet Evergarden`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Sora, Sr/Ur Hinawa, Sr/Ur Tokisaki \n\n**__2nd Composition__** : Sr/Ur Sora, Sr/Ur Mayuri, Sr/Ur Tokisaki \n\n**__3rd Composition__** : Sr/Ur Hinawa, Sr/Ur Renzo, Sr/Ur Tokisaki \n\nUr Surge Can Be Used Insead Of Sr/Ur Tokisaki \n\n**Note: You May Need Some RNG To Cap Riko Saikawa Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `wave`,
                name2: `wave`,
                cardName: `Wave`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[27]} Evasion: Increase your EVASION by __28/32__%, allowing you to dodge enemy attacks.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `wendy`,
                name2: `marvell`,
                cardName: `Wendy`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Light** damage based on __18/20__% of your ATK.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `wiz`,
                name2: `wiz`,
                rareInfo: `**HP**:1502\n**ATK**:1272\n**DEF**:1502\n**SPD**:1555\n\n**PL**:5831`,
                srInfo: `**HP**:1541\n**ATK**:1305\n**DEF**:1541\n**SPD**:1595\n\n**PL**:5982`,
                urInfo: `**HP**:1602\n**ATK**:1357\n**DEF**:1602\n**SPD**:1658\n\n**PL**:6219`,
                cardName: `Wiz`,
                basicComposition: `(Def) Trickroom, Double Life Sap\nRegeneration, Berserker (DEF), Time ATK (ATK/DEF)`,
                cardImage: 'https://images-ext-2.discordapp.net/external/IyTql2Xenu1fkl4Sz6VJCq2XUS359i_WmNy6ytkUBEM/https/i.ibb.co/TcjyN5L/3cbc80f774fc.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Kenma, Sr/Ur Natsuki/No face, Sr/Ur Natsuki/No face\n\n**__2nd Composition__** : Sr/Ur Edward, Sr/Ur Wiz/Tanjiro, Sr/Ur Ritsu/Vegeta\n\n**Note: You May Need Some RNG To Cap Wiz Raids**.`,
                cardTalent: `${diffEmojis[38]} Berserker: While your health is low, increase the DEF of all allied familiars by 54/60%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `wolf`,
                name2: `wolf`,
                cardName: `Wolf`,
                basicComposition: `Double Trickroom, Surge \nEndurance, Berserker (DEF), Life Sap`,
                cardImage: 'https://images-ext-2.discordapp.net/external/HN7AJGI8PE1_I56UUjGl0UAOvYgCQaeISieiM2xojfo/https/i.ibb.co/LxbmF28/3e47676cb00d.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Gowther, Sr/Ur Kenma , Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Mayu, Sr/Ur Wiz, Ur Iris\n\n**Note: You May Need Some RNG To Cap Wolf Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yami`,
                name2: `sukehiro`,
                cardName: `Yami Sukehiro`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap `,
                cardImage: 'https://images-ext-1.discordapp.net/external/3EnKGU5WAvoIFghmr3gLe8ml-OjAtxkUUf4_MCr1DMY/https/i.ibb.co/rtMY0G6/1d12243af4c8.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize , Sr/Ur Mayuri, Ur No Face \n\n**__2nd Composition__** : Sr/Ur Rize , Sr/Ur Wiz, Ur No Face \n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Mayuri, Sr/Ur No Face\n\n Note: You May Need Some RNG To Cap Yami Sukehiro Raids**.`,
                cardTalent: `${diffEmojis[12]} ${emojis.RECOIL}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `yato`,
                name2: `yato`,
                cardName: `Yato`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nDouble Trickroom, Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/DFprNgDGPCaJ8AI2oLE6FF_rZnNJIB__QW-59aqdyXs/https/i.ibb.co/Ss4Cg0T/2389136202d4.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Mayu, Sr/Ur Wiz, Sr/Ur Iris\n\n**__2nd Composition__** : Ur Kenma, Sr/Ur Ririka, Sr/Ur Yuno Gasai\n\n**Note: You May Need Some RNG To Cap Yato Raids**.`,
                cardTalent: `${diffEmojis[35]} Breaker: Decrease the DEF of all enemy familiars by __36/40__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yin`,
                name2: `yin`,
                cardName: `Yin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yoichi`,
                name2: `saotome`,
                cardName: `Yoichi Saotome`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `yoko`,
                name2: `kurama`,
                cardName: `Yoko Kurama`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[30]} ${emojis.DOMINANCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `yoshino`,
                name2: `yoshino`,
                cardName: `Yoshino`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[6]} ${emojis.TEMPORAL_REWIND}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yotsuba`,
                name2: `yotsuba`,
                cardName: `Yotsuba Nanako`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[9]} ${emojis.REVERSION}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `yui`,
                name2: `yui`,
                cardName: `Yui`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            //
            {
                name1: `yuichiro`,
                name2: `hyakuya`,
                cardName: `Yuichiro Hyakuya`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `hirasawa`,
                name2: `hirasawa`,
                cardName: `Yui Hirasawa`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yu`,
                name2: `ishigami`,
                cardName: `Yu Ishigami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[36]} ${emojis.BLOODTHIRSTER}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yuji`,
                name2: `itadori`,
                cardName: `Yuji Itadori`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[41]} ${emojis.UNLUCKY_COIN}`,
                cardType: `Ground :mountain:`,
                cardColor: '#C6902D'
            },
            {
                name1: `yukichi`,
                name2: `fukuzawa`,
                cardName: `Yukichi Fukuzawa`,
                basicComposition: `Overload, Grevious Limiter, Bloodthirster`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Hideyoshi/Misaka Mikoto, Sr/Ur Junko Enoshima, Sr/Ur Luck Voltia\n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yukina`,
                name2: `yukina`,
                cardName: `Yukina`,
                basicComposition: `(ATK) Trickroom, Breaker (DEF), Surge\n(ATK) Trickroom, Precision, Surge\n(ATK) Trickroom, Blaze, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Motoyasu, Sr/Ur Dio Brando/Luck\n\n**__2nd Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Shoto, Sr/Ur Dio Brando/Luck\n\n**__3rd Composition__** : Sr/Ur Ranpo/Gowther, Sr/Ur Sasuke, Sr/Ur Dio Brando/Luck     **Requires No Resist For Blaze**\n\n**Note: You May Need Some RNG To Cap Yukina Raids**.`,
                cardTalent: `${diffEmojis[42]} ${emojis.CELESTIAL_BLESSING}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yukine`,
                name2: `Yukine`,
                cardName: `Yukine`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[31]} ${emojis.DIVINE_BLESSING}`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yuki`,
                name2: `yuki`,
                cardName: `Yuki Nonaka`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[39]} Balancing Strike: If your HP % is lower than the enemy's HP %, deal __27/30__% of your base HP as **True** damage. Otherwise, this skill does __9/10__% damage.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `yukio`,
                name2: `okukura`,
                cardName: `Yukio Okumura`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[33]} ${emojis.CELESTIAL_INFLUENCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yukiteru`,
                name2: `amano`,
                cardName: `Yukiteru Amano`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[19]} ${emojis.OFFENSIVE_STANCE}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            //
            {
                name1: `yumeko`,
                name2: `jabami`,
                cardName: `Yumenko Jabami`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[22]} Lucky Coin: Roll a __36/40__ sided dice. Your allied familiars gain the amount rolled × 3 HP/ATK/DEF/SPD at random.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `yunishinoya`,
                name2: `nishinoya`,
                cardName: `Yu Nishinoya`,
                basicComposition: `Endurance, Double Life Sap\nAmplifier (DEF), Double Life Sap\nRegeneration, Berserker (DEF), Time Attack`,
                cardImage: 'https://images-ext-1.discordapp.net/external/j1BojlDC9w6tiGqAwfyVYBWhZtVe40C3mKWCUsVhq_I/https/i.ibb.co/Vvfth6j/ebd6a8253236.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Josuke, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__2nd Composition__** : Sr/Ur Liliruca Arde, Sr/Ur Ikumi Mito, Sr/Ur Ikumi Mito\n\n**__3rd Composition__** : Sr/Ur Machi Komacine, Sr/Ur Loke, Sr/Ur Black Star\n\n**Note: You May Need Some RNG To Cap Yu Nishinoya Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `yuno`,
                name2: `yuno`,
                cardName: `Yuno`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Grass** damage based on __18/20__% of your DEF.`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `gasai`,
                name2: `gasai`,
                cardName: `Yuno Gasai`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\nCelestial Blessing, Endurance/Rejuvenation, Time Attack\nTrickroom (ATK), Berserker (DEF)/Underdog (DEF), Surge`,
                cardImage: 'https://images-ext-2.discordapp.net/external/Z9LkliWEsKfRtgywC2ljy-FgCCRi1oaUrw3HI0h8MqA/https/i.ibb.co/7vHTYKy/11a3d94ff547.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face \n\n**__2nd Composition__** : Ur Doppo/Fuutarou, Sr/Ur Rize/Issei , Ur Iris\n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Tanjiro, Sr/Ur No Face\n\n**Note: You May Need Some RNG To Cap Yuno Gasai Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `yunyun`,
                name2: `yunyun`,
                cardName: `YunYun`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[44]} Vengeance: Deal **True** damage to all enemy familiars equal to __19/22__% of their ATK.`,
                cardType: `Water :droplet:`,
                cardColor: '#0CA3F2'
            },
            {
                name1: `yuri`,
                name2: `yuri`,
                cardName: `Yuri`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[17]} ${emojis.PAIN_FOR_POWER}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `yuriko`,
                name2: `nishinotouin`,
                cardName: `Yuriko Nishinotouin`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[8]} ${emojis.SILENCE}`,
                cardType: `Grass :leaves:`,
                cardColor: '#33B95A'
            },
            {
                name1: `yuri`,
                name2: `nakamura`,
                cardName: `Yuri Nakamura`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `yusuke`,
                name2: `urameshi`,
                cardName: `Yusuke Urameshi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[28]} Endurance: Buff your allies with **Endurance**, taking 65% less damage from normal attacks for 3 turns.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `yuta`,
                name2: `okkotsu`,
                cardName: `Yuta Okkotsu`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            //
            {
                name1: `yuzuru`,
                name2: `otonashi`,
                cardName: `Yuzuru Otonashi`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[14]} ${emojis.PRECISION}`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
            {
                name1: `zenitsu`,
                name2: `Agatsuma`,
                cardName: `Zenitsu Agatsuma`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[16]} Paralysis: Gain a __72/80__% chance to inflict a stack of Stun to enemy familiars, disabling their next turn, as well as permanently decreasing their DEF by __18/20__%.`,
                cardType: `Electric :zap:`,
                cardColor: '#F7C958'
            },
            {
                name1: `zero`,
                name2: `two`,
                cardName: `Zero Two`,
                basicComposition: `Limiter, Breaker (DEF), Surge\nBerserker (DEF), Breaker (DEF) / (ATK) Trickroom,Surge\nDouble Trick, Surge`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur L, Sr/Ur Artoria, Ur Byakuya/Garou\n\n**__2nd Composition__** : Sr/Ur Kurapika, Sr/Ur Artoria/Ririka, Ur Byakuya/Garou\n\n**__3rd Composition__** : Sr/Ur Ririka, Sr/Ur Kenma, Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[29]} Double-edged Strike: Deals **Light** damage equal to __27/30__% of your DEF, and take ¼ of the damage dealt to yourself.`,
                cardType: `Light :sunny:`,
                cardColor: '#F2FCA7'
            },
            {
                name1: `zest`,
                name2: `zest`,
                cardName: `Zest`,
                basicComposition: `No Composition`,
                cardImage: 'Pain For Power, Freeze, Surge',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Toshiro, Sr/Ur Gasai\n\n**__2nd Composition__** : Ur Doppo, Sr/Ur Echidna, Ur Toshiro\n\n**Note: You May Need Some RNG To Cap Zest Raids**.`,
                cardTalent: `${diffEmojis[32]} Dexterity Drive: Deal **Dark** damage equal to __9/10__% of your SPD, and deal additional damage according to the difference between your SPD and enemy's SPD.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `zombieman`,
                name2: `zman`,
                cardName: `Zombieman`,
                basicComposition: `Endurance, Berserker (DEF), Life Sap\n(ATK) Trickroom, Berserker (DEF), Surge`,
                cardImage: 'https://images-ext-1.discordapp.net/external/LbIoOlib0yRHAHe1jmwfqDm_bf2onSkRWDNrvv4heh0/https/i.ibb.co/cwvtLSq/c5470847a8b3.png',
                cardTeams: `**__1st Composition__** : Sr/Ur Rize, Sr/Ur Wiz, Ur No Face      **Max:1.5 Bar**\n\n**__2nd Composition__** : Sr/Ur Rize, Sr/Ur Maria Naruse, Ur No Face       **Max:1.5 Bar**\n\n**__3rd Composition__** : Sr/Ur Izumo, Sr/Ur Mayuri/Maria Naruse, Sr/Ur Gasai\n\n**Note: You May Need Some RNG To Cap Zombieman Raids**.`,
                cardTalent: `${diffEmojis[37]} ${emojis.BLOOD_SURGE}`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `zora`,
                name2: `ideale`,
                cardName: `Zora Ideale`,
                basicComposition: `(ATK) trickroom, Endurance, Surge\n(ATK) Trickroom, Berserker (DEF), Life Sap\n\nEndurance, Berserker (DEF), Life Sap`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur Izumo, Sr/Ur Rize, Sr/Ur Yuno Gasai\n\n**__2nd Composition__** : Sr/Ur Izumo, Ur Maria Naruse, Sr/Ur Yuno Gasai \n\n**__3rd Composition__** : Sr/Ur Rize, Sr/Ur Maria, Ur No Face\n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `${diffEmojis[20]} Elemental Strike: Deals **Dark** damage based on __18/20__% of your ATK.`,
                cardType: `Dark :crescent_moon:`,
                cardColor: '#393931'
            },
            {
                name1: `test`,
                name2: `anigame`,
                cardName: `Anigame`,
                basicComposition: `No Composition`,
                cardImage: '',
                cardTeams: `**__1st Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**__2nd Composition__** : Sr/Ur, Sr/Ur, Ur \n\n**__3rd Composition__** : Sr/Ur , Sr/Ur , Sr/Ur \n\n**Note: You May Need Some RNG To Cap Raids**.`,
                cardTalent: `No Talent :sparkles:`,
                cardType: `Neutral :sparkles:`,
                cardColor: '#A9A6A5'
            },
        ]


        var found = 0
        var send = 0
        let givenCardName = arguments.join(' ')
        givenCardName = givenCardName.replace("(", "")
        givenCardName = givenCardName.replace(")", "")
        if (givenCardName === '056') {
            givenCardName = 'goro 056'
        } 
        if (givenCardName === '016') {
            givenCardName = 'hiro 016'
        } 
        if (givenCardName === '015') {
            givenCardName = 'ichigo 015'
        } 
        if (givenCardName === '390') {
            givenCardName = 'miku 390'
        } 
        for (var data of myDatabase) {
            let raidCard = data.cardName.toLowerCase()
            raidCard = raidCard.replace("(", "")
            raidCard = raidCard.replace(")", "")
            for (let eachCard of cardList) {
                let expectedCardName = eachCard[0].toLowerCase()
                expectedCardName = expectedCardName.replace("(", "")
                expectedCardName = expectedCardName.replace(")", "")
                if (expectedCardName === raidCard) {
                    for (const eachName of arguments) {
                        if (givenCardName.toLowerCase() === expectedCardName.toLowerCase()) {
                            const cardHp = eachCard[4]
                            const cardAtk = eachCard[5]
                            const cardDef = eachCard[6]
                            const cardSpd = eachCard[7]

                            // rare 1500

                            const RareMultiplier = 1.6 * (1 + 0.005 * 1500) * (1 + 0.15 * (3 - 1))
                            const RareHp = parseInt(RareMultiplier * cardHp)
                            const RareAtk = parseInt(RareMultiplier * cardAtk)
                            const RareDef = parseInt(RareMultiplier * cardDef)
                            const RareSpd = parseInt(RareMultiplier * cardSpd)
                            const RarePl = parseInt(RareHp + RareAtk + RareDef + RareSpd)

                            // super rare 1350

                            const SuperRareMultiplier = 1.8 * (1 + 0.005 * 1350) * (1 + 0.15 * (3 - 1))
                            const SuperRareHp = parseInt(SuperRareMultiplier * cardHp)
                            const SuperRareAtk = parseInt(SuperRareMultiplier * cardAtk)
                            const SuperRareDef = parseInt(SuperRareMultiplier * cardDef)
                            const SuperRareSpd = parseInt(SuperRareMultiplier * cardSpd)
                            const SuperRarePl = parseInt(SuperRareHp + SuperRareAtk + SuperRareDef + SuperRareSpd)

                            // ultra rare 1500

                            const UltraRareMultiplier = 2 * (1 + 0.005 * 1250) * (1 + 0.15 * (3 - 1))
                            const UltraRareHp = parseInt(UltraRareMultiplier * cardHp)
                            const UltraRareAtk = parseInt(UltraRareMultiplier * cardAtk)
                            const UltraRareDef = parseInt(UltraRareMultiplier * cardDef)
                            const UltraRareSpd = parseInt(UltraRareMultiplier * cardSpd)
                            const UltraRarePl = parseInt(UltraRareHp + UltraRareAtk + UltraRareDef + UltraRareSpd)

                            // Rest Of The Code

                            found = 1
                            send = 1
                            var raidEmbed1 = new MessageEmbed()
                                .setAuthor(`Searched Results For ${arguments}`.split(`,`).join(` ‍ `),)
                                .addField(`**__Card Name__**:`, data.cardName, true)
                                .addField(`**__Card Type__**:`, data.cardType, true)
                                .addField(`**__Card Id__**:`, `${eachCard[15]}`, true)
                                .addField(`**__Card Info:__**`, `**HP:** ${cardHp} **ATK:** ${cardAtk} **DEF:** ${cardDef} **SPD:** ${cardSpd} **PL:** ${cardHp + cardAtk + cardDef + cardSpd}`, false)
                                .addField(`**__Card Talent__**(Sr/Ur):`, `${data.cardTalent}\n`, false)
                                .addField(`**__Raid Info:__**\n__R 1500__:`, `**HP:** ${RareHp}\n**ATK:** ${RareAtk}\n**DEF:** ${RareDef}\n**SPD:** ${RareSpd}\n\n**PL:** ${RarePl}`, true)
                                .addField(` ‍ \n__SR 1350__:`, `**HP:** ${SuperRareHp}\n**ATK:** ${SuperRareAtk}\n**DEF:** ${SuperRareDef}\n**SPD:** ${SuperRareSpd}\n\n**PL:** ${SuperRarePl}`, true)
                                .addField(` ‍ \n__UR 1250__:`, `**HP:** ${UltraRareHp}\n**ATK:** ${UltraRareAtk}\n**DEF:** ${UltraRareDef}\n**SPD:** ${UltraRareSpd}\n\n**PL:** ${UltraRarePl}`, true)
                                .addField('**__Card Composition__**:', `**__Refer to the next page for team compositions.__**`, false)
                                //.addField('**__Few Errors & Some Suggestions__**?', `Please Dm ${me.tag}, If You Find Any Errors/Have Some Other Team Suggestions For ${data.cardName}.`, false)
                                .setThumbnail(eachCard[3])
                                .setColor(data.cardColor)
                                .setFooter(`Please Dm ${me.tag}, If You Find Any Errors.\nRequested By ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                                .setTimestamp()
                            var raidEmbed2 = new MessageEmbed()
                                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                                .setTitle(`**__Card Composition__**:`)
                                .setDescription(`**Showing All Possible Teams To Use For ${data.cardName} Raid's\n\n*(Sr/Ur) Means Either Of Sr Or Ur Can Work\nFor (Ur 1250/Sr 1350/R 1500) And Lower ${data.cardName} Raids**.\n\n**__Basic Composition__** : \n${data.basicComposition}\n\n${data.cardTeams}`)
                                //.addField('**__Few Errors & Some Suggestions__**?', `Please Dm ${me.tag}, If You Find Any Errors/Have Some Other Team Suggestions For ${data.cardName}.`, false)
                                .setThumbnail(eachCard[3])
                                .setColor(data.cardColor)
                                .setFooter(`Please Dm ${me.tag}, If You Find Any Errors.\nRequested By ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                                .setTimestamp()
                            break
                        }
                        if (found === 0) {
                            if (expectedCardName.split(/[ ]+/).includes(eachName.toLowerCase())) {
                                const cardHp = eachCard[4]
                                const cardAtk = eachCard[5]
                                const cardDef = eachCard[6]
                                const cardSpd = eachCard[7]

                                // rare 1500

                                const RareMultiplier = 1.6 * (1 + 0.005 * 1500) * (1 + 0.15 * (3 - 1))
                                const RareHp = parseInt(RareMultiplier * cardHp)
                                const RareAtk = parseInt(RareMultiplier * cardAtk)
                                const RareDef = parseInt(RareMultiplier * cardDef)
                                const RareSpd = parseInt(RareMultiplier * cardSpd)
                                const RarePl = parseInt(RareHp + RareAtk + RareDef + RareSpd)

                                // super rare 1350

                                const SuperRareMultiplier = 1.8 * (1 + 0.005 * 1350) * (1 + 0.15 * (3 - 1))
                                const SuperRareHp = parseInt(SuperRareMultiplier * cardHp)
                                const SuperRareAtk = parseInt(SuperRareMultiplier * cardAtk)
                                const SuperRareDef = parseInt(SuperRareMultiplier * cardDef)
                                const SuperRareSpd = parseInt(SuperRareMultiplier * cardSpd)
                                const SuperRarePl = parseInt(SuperRareHp + SuperRareAtk + SuperRareDef + SuperRareSpd)

                                // ultra rare 1500

                                const UltraRareMultiplier = 2 * (1 + 0.005 * 1250) * (1 + 0.15 * (3 - 1))
                                const UltraRareHp = parseInt(UltraRareMultiplier * cardHp)
                                const UltraRareAtk = parseInt(UltraRareMultiplier * cardAtk)
                                const UltraRareDef = parseInt(UltraRareMultiplier * cardDef)
                                const UltraRareSpd = parseInt(UltraRareMultiplier * cardSpd)
                                const UltraRarePl = parseInt(UltraRareHp + UltraRareAtk + UltraRareDef + UltraRareSpd)

                                // Rest Of The Code

                                found = 1
                                send = 1
                                var raidEmbed1 = new MessageEmbed()
                                    .setAuthor(`Searched Results For ${arguments}`.split(`,`).join(` ‍ `),)
                                    .addField(`**__Card Name__**:`, data.cardName, true)
                                    .addField(`**__Card Type__**:`, data.cardType, true)
                                    .addField(`**__Card Id__**:`, `${eachCard[15]}`, true)
                                    .addField(`**__Card Info:__**`, `**HP:** ${cardHp} **ATK:** ${cardAtk} **DEF:** ${cardDef} **SPD:** ${cardSpd} **PL:** ${cardHp + cardAtk + cardDef + cardSpd}`, false)
                                    .addField(`**__Card Talent__**(Sr/Ur):`, `${data.cardTalent}\n`, false)
                                    .addField(`**__Raid Info:__**\n__R 1500__:`, `**HP:** ${RareHp}\n**ATK:** ${RareAtk}\n**DEF:** ${RareDef}\n**SPD:** ${RareSpd}\n\n**PL:** ${RarePl}`, true)
                                    .addField(` ‍ \n__SR 1350__:`, `**HP:** ${SuperRareHp}\n**ATK:** ${SuperRareAtk}\n**DEF:** ${SuperRareDef}\n**SPD:** ${SuperRareSpd}\n\n**PL:** ${SuperRarePl}`, true)
                                    .addField(` ‍ \n__UR 1250__:`, `**HP:** ${UltraRareHp}\n**ATK:** ${UltraRareAtk}\n**DEF:** ${UltraRareDef}\n**SPD:** ${UltraRareSpd}\n\n**PL:** ${UltraRarePl}`, true)
                                    .addField('**__Card Composition__**:', `**__Refer to the next page for team compositions.__**`, false)
                                    //.addField('**__Few Errors & Some Suggestions__**?', `Please Dm ${me.tag}, If You Find Any Errors/Have Some Other Team Suggestions For ${data.cardName}.`, false)
                                    .setThumbnail(eachCard[3])
                                    .setColor(data.cardColor)
                                    .setFooter(`Please Dm ${me.tag}, If You Find Any Errors.\nRequested By ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                var raidEmbed2 = new MessageEmbed()
                                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTitle(`**__Card Composition__**:`)
                                    .setDescription(`**Showing All Possible Teams To Use For ${data.cardName} Raid's\n\n*(Sr/Ur) Means Either Of Sr Or Ur Can Work\nFor (Ur 1250/Sr 1350/R 1500) And Lower ${data.cardName} Raids**.\n\n**__Basic Composition__** : \n${data.basicComposition}\n\n${data.cardTeams}`)
                                    //.addField('**__Few Errors & Some Suggestions__**?', `Please Dm ${me.tag}, If You Find Any Errors/Have Some Other Team Suggestions For ${data.cardName}.`, false)
                                    .setThumbnail(eachCard[3])
                                    .setColor(data.cardColor)
                                    .setFooter(`Please Dm ${me.tag}, If You Find Any Errors.\nRequested By ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                                    .setTimestamp()
                                break
                            }
                        }
                    }
                }
            }
        }

        const useNotice = `**__Command:__**: **RaidHelp**\n<> --> Required \n[] --> Not Required \n\n**__Usage:__** .rdhelp <card name> \n\n**__Function:__** Shows you the best possible teams to be used in a raid of mentioned card. \n\n**__Example:__** .rdhelp erza scarlet`

        if (!arguments[0] || arguments[0] === 'usage' || arguments[0] === 'help' || arguments[0] === 'test') {
            found = 1
            var commHelpEmbed = new MessageEmbed()
                .setTitle(`Help Menu`)
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setColor(`0x00FFFF`)
                .setDescription(`${useNotice}`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setTimestamp()
                .setFooter(`Created By ${me.tag}`, me.displayAvatarURL({ dynamic: true }))
            message.channel.send({ embeds : [commHelpEmbed] })
        }

        var cardErrorEmbed = new MessageEmbed()
            .setTitle(`Error ⛔`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`#FB6631`)
            .setDescription(`${useNotice}\n\n${message.author.tag},\n The Card Name Entered Is Not A Valid Card.\nPlease Enter A Valid Card Name.`)
            .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
            .setTimestamp()
            .setFooter(`Created By ${me.tag}`, me.displayAvatarURL({ dynamic: true }))
        var success = ''
        if(found === 1 && send === 1) {
            success = 'Results Were Found : **PASS!**'
        } else {
            success = "Reults Weren't Found : **FAIL!**" 
        }
        var usageInfo = new MessageEmbed()
            .setTitle(`Command Used : A.rdhelp`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
            .setColor(`0x00FFFF`)
            .setThumbnail(message.channel.guild.iconURL({dynamic:true}))
            .addField('Usage:',`A.rdhelp ${text}, Was Just Used By ${message.author.tag} And The ${success}`,false)
            //.setDescription(`A.rdhelp ${text}, Was Just Used By ${message.author.tag}`)
            .addField('Server Name:',`${message.channel.guild.name}`,false)
            .addField('Channel Name:',`${message.channel.name}`,false)
            .setFooter(client.user.tag,client.user.displayAvatarURL({dynamic:true}))
            .setTimestamp()
        rdHelpChannel.send({ embeds : [usageInfo] })
        if (found === 0) {
            message.channel.send({ embeds : [cardErrorEmbed] })
            rdHelpChannel.send({content : `${message.author.tag} Just Used .rdhelp ${text}`})
            found = 1
        } else if (found === 1 && send === 1) {
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId(`PageOne`)
                        .setLabel(`Page 1`)
                        .setStyle(`PRIMARY`)
                        .setEmoji(`1️⃣`),
                    new MessageButton()
                        .setCustomId(`PageTwo`)
                        .setLabel(`Page 2`)
                        .setStyle(`PRIMARY`)
                        .setEmoji(`2️⃣`),
                    new MessageButton()
                        .setCustomId(`Delete`)
                        .setLabel(`Delete`)
                        .setStyle(`PRIMARY`)
                        .setEmoji(`🗑️`)
                )
            var msg = await message.channel.send({ embeds : [raidEmbed1], components : [row]})
            function interact(msg) {
                const collector = msg.createMessageComponentCollector({
                    componentType : 'BUTTON',
                    time : 120000
                });
                collector.on('collect', async recievedInteraction => {
                    //console.log(recievedInteraction)
                    recievedInteraction.deferUpdate()
                    if (recievedInteraction.user.id === message.author.id) {
                        //console.log(recievedInteraction)
                        if (recievedInteraction.customId === 'PageOne') {
                            //console.log(recievedInteraction)
                            await recievedInteraction.message.edit({ embeds : [raidEmbed1], components : [row]})                            
                        }
                        if (recievedInteraction.customId === 'PageTwo') {
                            //console.log(recievedInteraction)
                            await recievedInteraction.message.edit({ embeds : [raidEmbed2], components : [row]})
                        }
                        if (recievedInteraction.customId === 'Delete') {
                            //console.log(recievedInteraction)
                            msg.delete()
                        }
                    } else {
                        recievedInteraction.deferUpdate()
                        return
                    }
                })
                collector.on('end', async (recievedInteraction) => {
                    return
                })
            }
            interact(msg)


            // var msg = await message.channel.send({ embeds : [raidEmbed1] })
            // var msg1 = await message.channel.send(`Please Type \`.next\` For The Card Composition.\nOr Please Type \`.delete\` To Delete The Msg`)
            // msg.channel.awaitMessages({
            //     filter : m => m.author.id === message.author.id,
            //     max: 1,
			// 	time: 120000,
			// 	errors: ['time'],
            // })
            // .then(recievedmessage => {
            //     recievedmsg = recievedmessage.first()
            //     if (recievedmsg.content === '.next') {
            //         console.log(`.next`)
            //         msg.edit({embeds : [raidEmbed2]})
            //     }
            //     if (recievedmsg.content === '.delete') {
            //         msg.delete()
            //         msg1.delete()
            //         recievedmsg.delete()
            //     }
            // })
        }
    }
}


// let page = 0
// var del = 0
// pages = [raidEmbed1, raidEmbed2]
// emojis = ["⏪", "⏩", "🗑️"]
// const filtertoUse = (reaction, user) => reaction.message.id === pagination_embed.id && emojis.includes(reaction.emoji.name) && !user.bot && user.id === message.author.id
// timeout = 120000
// let pagination_embed = await message.channel.send({embeds : [pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)]})
// for (var emoji of emojis) await pagination_embed.react(emoji)
// new ReactionCollector(pagination_embed, { filter : filtertoUse , time : timeout, idle : timeout, dispose : true})
// .on('collect', reactionAdd => {
//     console.log(reactionAdd)
// })

// reactionCollector.on('collect', async reactionAdd => {
//     reactionAdd.users.remove(message.author);
//     switch (reactionAdd.emoji.name) {
//         case emojis[0]:
//             page = page > 0 ? --page : pages.length - 1;
//             console.log(`Page 1`)
//             break;
//         case emojis[1]:
//             page = page + 1 < pages.length ? ++page : 0;
//             console.log(`Page 2`)
//             break;
//         case emojis[2]:
//             del = 1
//             console.log(`Deleted`)
//             break;
//     }
//     if (del === 1 ) {
//         pagination_embed.delete()
//     } else {
//         await pagination_embed.edit({embeds : [pages[page].setFooter(`Page ${page + 1} / ${pages.length}`)]})  
//     }
// });
// reactionCollector.on(`end`, () => {
//     if (!pagination_embed.deleted) {
//         pagination_embed.reactions.removeAll()
//     }
// });
// return pagination_embed