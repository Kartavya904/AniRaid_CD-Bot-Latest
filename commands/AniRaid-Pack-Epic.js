const { MessageEmbed, MessageAttachment } = require("discord.js")
const Canvas = require('canvas')
//const { Canvas } = require('canvacord')
module.exports = {
    commands : ['buy'],
    callback : async(client, message, arguments, text) => {
        const imageList = [
['2B', 'https://i.ibb.co/0XgcjLp/c3cae03eae5b.png', '0', '1'],

['9S', 'https://i.ibb.co/19Z7BdB/1d07c0121215.png', '0', '2'],
            
['Accelerator', 'https://i.ibb.co/Wx9mR3K/5e1ce88ba2b5.png', '33', '3'],
            
['Ai Hayasaka', 'https://i.ibb.co/XbcYYzG/d7e9bd181d2d.png', '61', '4'],
            
['Ainz Ooal Gown', 'https://i.ibb.co/dPGckHS/090e479781ab.png', '22', '5'],
            
['Ais Wallenstein', 'https://i.ibb.co/bF3bHyh/dac718938fe3.png', '19', '6'],
            
['Akame', 'https://i.ibb.co/dMn2RKM/ccf00bbfeda5.png', '24', '7'],
            
['Akane Tsunemori', 'https://i.ibb.co/R0jMfzh/326784a64f59.png', '67', '8'],
            
['Akeno Himejima', 'https://i.ibb.co/wyPbwyQ/71e012356ab9.png', '26', '9'],
            
['Akiko Yosano', 'https://i.ibb.co/GdvpdRK/3ee8420b2b54.png', '64', '10'],
            
['Akira Hayama', 'https://i.ibb.co/Bqg3Wxp/d970e52bf14b.png', '57', '11'],
            
['Akitaru Obi', 'https://i.ibb.co/mtkSVNp/d5417b123afd.png', '55', '12'],
            
['Aladdin', 'https://i.ibb.co/KLw6w5g/489faa99f17f.png', '34', '13'],
            
['Albedo', 'https://i.ibb.co/pR81qFn/5b0137e2e666.png', '22', '14'],
            
['Alex Louis Armstrong', 'https://i.ibb.co/MRvf1Xm/3fdd81769d02.png', '20', '15'],
            
['Alibaba Saluja', 'https://i.ibb.co/G38bQ6D/66a1974c227b.png', '34', '16'],
            
['Alice Nakiri', 'https://i.ibb.co/6ZxWtyP/ebd39b212ba0.png', '57', '17'],
            
['Alice Zuberg', 'https://i.ibb.co/68jxJxG/b1b3bc0bb719.png', '12', '18'],
            
['All Might', 'https://i.ibb.co/Cw423rt/3cc9fe1001f7.png', '17', '19'],
            
['Amber', 'https://i.ibb.co/12S48r7/308ffeb9605a.png', '8', '20'],
            
['Ami Mizuno (Sailor Mercury)', 'https://i.ibb.co/L0Kg5Xp/e4516e84477d.png', '37', '21'],
            
['Android 18', 'https://i.ibb.co/bRT5ZMc/fc18e323b685.png', '29', '22'],
            
['Annie Leonhart', 'https://i.ibb.co/rxRGNSS/b47b938dffc3.png', '9', '23'],
            
['Aoi Asahina', 'https://i.ibb.co/M1vqrbd/d960dd5072a6.png', '54', '24'],
            
['Aqua', 'https://i.ibb.co/RYC3qmn/d7fb450453b2.png', '18', '25'],
            
['Arataka Reigen', 'https://i.ibb.co/XX11txN/908aa181e6d2.png', '56', '26'],
            
['Armin Arlert', 'https://i.ibb.co/KFGdKQS/02c9e1ec970d.png', '9', '27'],
            
['Arthur Boyle', 'https://i.ibb.co/vcTJfs6/99d0f4cc7d34.png', '55', '28'],
            
['Artoria Pendragon', 'https://i.ibb.co/7WMFBfb/66e36f8f67fd.png', '2', '29'],

['Aru Akise', 'https://i.ibb.co/gFH6Bhg/748861de61c0.png', '31', '30'],

['Asia Argento', 'https://i.ibb.co/smJZXj0/6cf7ae9c080f.png', '26', '31'],

['Asta', 'https://i.ibb.co/ykd3FLf/bfcce5983ce6.png', '3', '32'],

['Asuna Yuuki', 'https://i.ibb.co/G3k12mm/f79031e146fa.png', '12', '33'],

['Atsushi Nakajima', 'https://i.ibb.co/dJ47Jy0/3344fda81bc4.png', '64', '34'],

['Ayano Keiko [Silica]', 'https://i.ibb.co/T26bJw7/24351488a946.png', '12', '35'],

['Ayato Kirishima', 'https://i.ibb.co/VCBvY4L/27b33ccf6c8f.png', '6', '36'],

['Ayato Naoi', 'https://i.ibb.co/DgDZm2g/ce2e4766a8b4.png', '14', '37'],

['Azusa Nakano', 'https://i.ibb.co/rfDX4HN/b2f244ce0ca2.png', '21', '38'],

['Bad [Metal Bat]', 'https://i.ibb.co/2S0NkCH/51459c1fc239.png', '36', '39'],

['Ban', 'https://i.ibb.co/fNR2cvF/b6092780224b.png', '5', '40'],

['Basara Toujou', 'https://i.ibb.co/ThC6V5B/687fc61c88cc.png', '38', '41'],

['Bell Cranel', 'https://i.ibb.co/v4HBH2j/002195ea0310.png', '19', '42'],

['Bell Hydra', 'https://i.ibb.co/58w32Sw/a8ec417ae317.png', '40', '43'],

['Benedict Blue', 'https://i.ibb.co/SwWTGTj/4fbf33dd6194.png', '0', '44'],

['Benimaru', 'https://i.ibb.co/m04yk9L/792026a6b3a8.png', '46', '45'],

['Benimaru Shinmon', 'https://i.ibb.co/rpgYK7m/e90480f5facc.png', '55', '46'],

['Beros', 'https://i.ibb.co/5GTZJ1R/d97e72113584.png', '40', '47'],

['Bishamonten', 'https://i.ibb.co/whZXKBm/641582d8b121.png', '47', '48'],

['Bisky Krueger', 'https://i.ibb.co/1z91PqH/188db518bc30.png', '15', '49'],

['Black Star', 'https://i.ibb.co/2MsY2Lg/2009f31aa381.png', '42', '50'],

['Blair', 'https://i.ibb.co/2j9qmpb/157878e4bbb6.png', '42', '51'],

['Botan', 'https://i.ibb.co/mXs3GZf/a422a351a072.png', '66', '52'],

['Braz D Blood', 'https://i.ibb.co/84Ztwvc/64960f4144d5.png', '40', '53'],

['Brook', 'https://i.ibb.co/vckZ2PK/f55fd9b32db0.png', '10', '54'],

['Byakuya Togami', 'https://i.ibb.co/fSy7cLG/2eb241e6a7a1.png', '54', '55'],

['C.C.', 'https://i.ibb.co/KzwZDQ2/8901efab89eb.png', '43', '56'],

['Charmy Pappitson', 'https://i.ibb.co/tKjwZKn/6de6dc387858.png', '3', '57'],

['Chiaki Nanami', 'https://i.ibb.co/sKfkBYJ/edf9ad48b048.png', '54', '58'],

['Chika Fujiwara', 'https://i.ibb.co/jWmgXh4/5674af9bd651.png', '61', '59'],

['Child Emperor', 'https://i.ibb.co/YNzNdLK/dacb593f1f8c.png', '36', '60'],

['Chino Kafuu', 'https://i.ibb.co/bzwpPK1/63e024956d24.png', '41', '61'],

['Chisato Hasegawa', 'https://i.ibb.co/z5tLSN5/3af1b32a40df.png', '38', '62'],

['Chiya Ujimatsu', 'https://i.ibb.co/SddMSWJ/013f2a55141c.png', '41', '63'],

['Chlammy Zell', 'https://i.ibb.co/pfm9tcX/bd8ed83d07bf.png', '48', '64'],

['Chomusuke', 'https://i.ibb.co/1Zxr0LD/2ee09fd9a8f4.png', '18', '65'],

['Chrome', 'https://i.ibb.co/pbYymG9/1a372fa4c297.png', '28', '66'],

['Cocoa Hoto', 'https://i.ibb.co/qYdnVqs/b49a7ba93595.png', '41', '67'],

['Colossal Titan', 'https://i.ibb.co/xzYz9hR/1f9d8703b58d.png', '9', '68'],

['Cornelia Britannia', 'https://i.ibb.co/RS7vh1w/ec1c7bd493ad.png', '43', '69'],

['Cow Girl', 'https://i.ibb.co/VjsJvjh/e68054408b91.png', '58', '70'],

['Crona', 'https://i.ibb.co/Bss1665/41eae30be88a.png', '42', '71'],

['Crusch Karsten', 'https://i.ibb.co/5hT5Jqs/344c5d5e149c.png', '13', '72'],

['Dabi', 'https://i.ibb.co/LxPcdsZ/0bc434cb9d60.png', '17', '73'],

['Darkness', 'https://i.ibb.co/tcR7MJR/1b5cdedee3bb.png', '18', '74'],

['Death The Kid', 'https://i.ibb.co/Gv4nwHQ/9423b500b545.png', '42', '75'],

['Demiurge', 'https://i.ibb.co/P6dBRQQ/2ddc74225b58.png', '22', '76'],

['Denki Kaminari', 'https://i.ibb.co/71X0zvB/14a99aa12795.png', '17', '77'],

['Diablo', 'https://i.ibb.co/vm1fZSk/b598acd24fe9.png', '46', '78'],

['Diane', 'https://i.ibb.co/mX0mgLQ/130c8fedd80c.png', '5', '79'],

['Dio Brando', 'https://i.ibb.co/LQ7y8nc/2a37a4eedce4.png', '51', '80'],

['Doppo Kunikida', 'https://i.ibb.co/ZdDGJmW/cf469ee1c0dc.png', '64', '81'],

['Echidna', 'https://i.ibb.co/nrB5j7w/427626a7de9e.png', '13', '82'],

['Ed', 'https://i.ibb.co/PFL9wbQ/8bec10165b83.png', '60', '83'],

['Edward Elric', 'https://i.ibb.co/J3B0nBx/cb7b9343022c.png', '20', '84'],

['Elaine', 'https://i.ibb.co/K0mNjgx/127804d10a3b.png', '5', '85'],

['Elma', 'https://i.ibb.co/f8crHGf/5aed3d98d512.png', '7', '86'],

['Emilia', 'https://i.ibb.co/ZKdZ4SH/6a911c57972a.png', '13', '87'],

['Enel', 'https://i.ibb.co/3BqL9cG/534976827018.png', '10', '88'],

['Envy', 'https://i.ibb.co/ZJXZ1C6/66b0a91176e7.png', '20', '89'],

['Eren Yeager', 'https://i.ibb.co/8jGzNNV/e5223310d2f8.png', '9', '90'],

['Eri', 'https://i.ibb.co/1b0NTgc/48a117963205.png', '17', '91'],

['Erina Nakiri', 'https://i.ibb.co/SvxwPjf/54ef79d02a98.png', '57', '92'],

['Eris', 'https://i.ibb.co/RyvwKtC/d7ba6c5b650a.png', '18', '93'],

['Eruka Frog', 'https://i.ibb.co/4TSkf22/980d059d9441.png', '42', '94'],

['Erwin Smith', 'https://i.ibb.co/RjsyGnX/f6a9f42de8fd.png', '9', '95'],

['Erza Scarlet', 'https://i.ibb.co/xfRKdcs/f0597d364549.png', '27', '96'],

['Escanor', 'https://i.ibb.co/XLDQ6p6/e2a9eff0b01c.png', '5', '97'],

['Esdeath', 'https://i.ibb.co/LRqB0b4/088cc86b8c40.png', '24', '98'],

['Eto Yoshimura', 'https://i.ibb.co/4pvMnsh/a68cfe3102c4.png', '6', '99'],

['Eugeo', 'https://i.ibb.co/Ptd80Lh/78347e23d19b.png', '12', '100'],

['Fafnir', 'https://i.ibb.co/ZVzc8xq/0a8611478d3c.png', '7', '101'],

['Fairy King Harlequin', 'https://i.ibb.co/v1cMPGc/31af07190a36.png', '5', '102'],

['Faye Valentine', 'https://i.ibb.co/txqJsFr/312ca6469523.png', '60', '103'],

['Feitan Portor', 'https://i.ibb.co/zFhnMFY/83cfb651e17c.png', '15', '104'],

['Felix Argyle', 'https://i.ibb.co/WyFJk4K/1f553f8d520b.png', '13', '105'],

['Ferid Bathory', 'https://i.ibb.co/Jrp8m1J/e89e49d334cc.png', '39', '106'],

['Fiel Nirvalen (Fii)', 'https://i.ibb.co/8Bq4Yw7/91d64f5a82e8.png', '48', '107'],

['Filo', 'https://i.ibb.co/xsj40PD/bef7ceba5921.png', '4', '108'],

['Fitoria', 'https://i.ibb.co/HP4nrNZ/084dff753ca9.png', '4', '109'],

['Fran', 'https://i.ibb.co/mRJ4Qd4/6172eddefdaf.png', '30', '110'],

['Franken Stein', 'https://i.ibb.co/djH8mM7/60384e119847.png', '42', '111'],

['Freya', 'https://i.ibb.co/tm8T0kN/0f95a2e9aeac.png', '19', '112'],

['Fumikage Tokoyami', 'https://i.ibb.co/YbQm3dW/5d59f7a8adf5.png', '17', '113'],

['Fuutarou Uesugi', 'https://i.imgur.com/cLVtv3u.png', '63', '114'],

['Fuyumi Yanagi', 'https://i.ibb.co/B37pnKG/fb72ae7ab8ea.png', '40', '115'],

['Gaara', 'https://i.ibb.co/yR7ZGLV/03e6e4ac13af.png', '16', '116'],

['Gajeel Redfox', 'https://i.ibb.co/4VmRLxV/8ab55bb37fe1.png', '27', '117'],

['Garou', 'https://i.ibb.co/kGthFpc/62ae51b25329.png', '36', '118'],

['Gen Asagiri', 'https://i.ibb.co/S64Btxx/a8305b171241.png', '28', '119'],

['Genos', 'https://i.ibb.co/FxnWJhv/277429c416d3.png', '36', '120'],

['Genryusai Shigekuni Yamamoto', 'https://i.ibb.co/mR9Fdyp/5bb080fa6b75.png', '11', '121'],

['Ghost', 'https://i.ibb.co/NtVWz2M/884590ae256e.png', '0', '122'],

['Gilbert Bougainvillea', 'https://i.ibb.co/ggw5WJN/6c467dfa066c.png', '0', '123'],

['Gilgamesh', 'https://i.ibb.co/ccqD6r9/5fae6dfa3617.png', '2', '124'],

['Gilthunder', 'https://i.ibb.co/fC5grbG/45ec78539a5b.png', '5', '125'],

['Gin', 'https://i.ibb.co/xHS4NcD/e1a1d476f10e.png', '0', '126'],

['Gintoki Sakata', 'https://i.ibb.co/Pc05HRX/a2ff52db30c1.png', '52', '127'],

['Giorno Giovanna', 'https://i.ibb.co/Qkk3PtJ/8d76e52c3261.png', '51', '128'],

['Giyu Tomioka', 'https://i.ibb.co/TbySdR4/4cfe8ff57d2a.png', '23', '129'],

['Goblin Slayer', 'https://i.ibb.co/DQz2PZz/c2d019ab72d1.png', '58', '130'],

['Gon Freecss', 'https://i.ibb.co/Z6GgMGx/46ebc9a72495.png', '15', '131'],

['Goro (056)', 'https://i.ibb.co/ZGmR5vc/4dfb761784c1.png', '32', '132'],

['Gowther', 'https://i.ibb.co/zfK0tNq/8d5263e75dab.png', '5', '133'],

['Gray Fullbuster', 'https://i.ibb.co/4YhCxS3/8c7ac3fd6e1e.png', '27', '134'],

['Greed', 'https://i.ibb.co/xjrry6x/0b3fbae9cef9.png', '20', '135'],

['Grimmjow Jeagerjaques', 'https://i.ibb.co/jh952c3/bc89e03d1293.png', '11', '136'],

['Guild Girl', 'https://i.ibb.co/rstxYNQ/7b536e2b6677.png', '58', '137'],

['Guren Ichinose', 'https://i.ibb.co/1sKg0SF/73b279be3a7d.png', '39', '138'],

['Happy', 'https://i.ibb.co/GkjpWJh/502283159e61.png', '27', '139'],

['Haruka Tenou (Sailor Uranus)', 'https://i.ibb.co/YLLNBfp/df7f236b8e4e.png', '37', '140'],

['Hatsune Miku', 'https://i.ibb.co/PGfRZwk/b07656817511.png', '0', '141'],

['Hayato Gokudera', 'https://i.ibb.co/cLSspBq/9731aa1fd997.png', '30', '142'],

['Hei', 'https://i.ibb.co/B2kQZcM/238dae07d758.png', '8', '143'],

['Hestia', 'https://i.ibb.co/tmPVQgb/fcd963a9563a.png', '19', '144'],

['Hibana', 'https://i.ibb.co/10kwp4B/d9592bf9774b.png', '55', '145'],

['Hideyoshi Nagachika', 'https://i.ibb.co/SK2V6gY/daa0a2920ad9.png', '6', '146'],

['Hiei', 'https://i.ibb.co/GJCMWL6/5400225fe598.png', '66', '147'],

['High Elf Archer', 'https://i.ibb.co/L6DYQrZ/1f35870472d8.png', '58', '148'],

['Hijikata Toushirou', 'https://i.ibb.co/DzQT97n/2977348ed190.png', '52', '149'],

['Himiko Toga', 'https://i.ibb.co/VNbZZCv/f79b0d0befdc.png', '17', '150'],

['Hinami Fueguchi', 'https://i.ibb.co/QpK1myF/f4e53acf9ee7.png', '6', '151'],

['Hinata Hyuga', 'https://i.ibb.co/3h3sNjs/b044c19cfb61.png', '16', '152'],

['Hiro (016)', 'https://i.ibb.co/4JGzXrk/2f30bbec50b5.png', '32', '153'],

['Hisako Arato', 'https://i.ibb.co/8j5bm6g/d958cf3e8cb4.png', '57', '154'],

['Hisoka Morrow', 'https://i.ibb.co/Nn1hd71/05a672145663.png', '15', '155'],

['Historia Reiss', 'https://i.ibb.co/s21mt6T/0f654c88eb19.png', '9', '156'],

['Hiyori Iki', 'https://i.ibb.co/fYP13Yf/028dac0cab8d.png', '47', '157'],

['Hotaru Takegawa', 'https://i.ibb.co/tps8b92/3acd94ec73ad.png', '0', '158'],

['Houka Inumuta', 'https://i.ibb.co/YcDj15z/ace516b72b81.png', '45', '159'],

['Ichigo (015)', 'https://i.ibb.co/ctt13jf/26ec7b296e96.png', '32', '160'],

['Ichigo Kurosaki', 'https://i.ibb.co/FKt6qhG/e636b3c45681.png', '11', '161'],

['Ichika Nakano', 'https://i.imgur.com/ZLQnWvj.png', '63', '162'],

['Ikumi Mito', 'https://i.ibb.co/gysX7N2/43005d151184.png', '57', '163'],

['Illyasviel Von Einzbern', 'https://i.ibb.co/FVrN5vW/a3dcf95f3581.png', '2', '164'],

['Inosuke Hashibira', 'https://i.ibb.co/ZgZ3G8s/ca35ec285abc.png', '23', '165'],

['Inuyasha', 'https://i.ibb.co/r3THf3R/1da871e27aed.png', '25', '166'],

['Ira Gamagori', 'https://i.ibb.co/dp2ypZS/2fd11f181797.png', '45', '167'],

['Irina Jelavic', 'https://i.ibb.co/GnjGBNG/0379bf543581.png', '50', '168'],

['Iris', 'https://i.ibb.co/xHLmr2G/f3b1f0a241fd.png', '55', '169'],

['Issei Hyoudou', 'https://i.ibb.co/HPBvPW8/1b70a2ff6b99.png', '26', '170'],

['Itachi Uchiha', 'https://i.ibb.co/d6xJxhV/4d59729bf301.png', '16', '171'],

['Itaru Hashida', 'https://i.ibb.co/sVvtkrc/4221f5feee2a.png', '1', '172'],

['Itona Horibe', 'https://i.ibb.co/RpWTPrQ/626198baabfd.png', '50', '173'],

['Itsuki Kawasumi', 'https://i.ibb.co/YDcDJmY/a2f3f3faf293.png', '4', '174'],

['Itsuki Nakano', 'https://i.imgur.com/niWKUw3.png', '63', '175'],

['Izuku Midoriya (Deku)', 'https://i.ibb.co/qdMqjjp/53a9c84a1cea.png', '17', '176'],

['Izumi Kyoka', 'https://i.ibb.co/1rWG8VN/c2ad4504c493.png', '64', '177'],

['Izumo Kamiki', 'https://i.ibb.co/jb8sLg2/1a86e836d2d7.png', '44', '178'],

['Izuna Hatsuse', 'https://i.ibb.co/CmGP3FV/aab51dc2add3.png', '48', '179'],

['Jack Frost', 'https://i.ibb.co/CbXbmQv/fc9ab061af4e.png', '0', '180'],

['Jellal Fernandes', 'https://i.ibb.co/NSpt6hF/1e480b654cc7.png', '27', '181'],

['Jet Black', 'https://i.ibb.co/Tc89Vcn/c50535ea5c3b.png', '60', '182'],

['Jibril', 'https://i.ibb.co/cLDJhD0/f692851ade18.png', '48', '183'],

['Jiraiya', 'https://i.ibb.co/dgcjhmM/be78ce24978a.png', '16', '184'],

['Jonathan Joestar', 'https://i.ibb.co/yNbJ5BQ/4ac7dabe918e.png', '51', '185'],

['Joseph Joestar', 'https://i.ibb.co/pPBWYfM/a0320b0a5c69.png', '51', '186'],

['Josuke Higashikata', 'https://i.ibb.co/0F32WtS/a74712e1b2c7.png', '51', '187'],

['Jotaro Kujo', 'https://i.ibb.co/rfdt48k/94a6ab0140af.png', '51', '188'],

['Judar', 'https://i.ibb.co/RjScTrF/15137e76db9a.png', '34', '189'],

['July', 'https://i.ibb.co/d7cCDfy/886a1f1b2cf9.png', '8', '190'],

['Junko Enoshima', 'https://i.ibb.co/NrKVhdX/9ee6c4a0b288.png', '54', '191'],

['Juvia Lockser', 'https://i.ibb.co/prCFyC4/7d4ac9997f7c.png', '27', '192'],

['Kaede Kayano', 'https://i.ibb.co/M23WwGx/64637fd90d2d.png', '50', '193'],

['Kagome Higurashi', 'https://i.ibb.co/KFhcHnK/8fa9c77adbc6.png', '25', '194'],

['Kagura', 'https://i.ibb.co/8mTTmGn/a34cd49903d1.png', '52', '195'],

['Kaguya Shinomiya', 'https://i.ibb.co/NjbQ3rp/c9e4cb886c61.png', '61', '196'],

['Kakashi Hatake', 'https://i.ibb.co/Ycr0KDq/f54ed5d57ae5.png', '16', '197'],

['Kakine Teitoku', 'https://i.ibb.co/VvQFLG5/9a13849e25ae.png', '33', '198'],

['Kallen Kozuki', 'https://i.ibb.co/Mp9xYGY/ca88e07d9a7b.png', '43', '199'],

['Kamijou Touma', 'https://i.ibb.co/090Gyzm/edc70191f615.png', '33', '200'],

['Kanade Tachibana', 'https://i.ibb.co/B6y5Z8m/a76632d0afa2.png', '14', '201'],

['Kanao Tsuyuri', 'https://i.ibb.co/DV5PhgC/80ecb27ea746.png', '23', '202'],

['Kaneki Ken', 'https://i.ibb.co/ChqTwJS/5d85e0d8cff5.png', '6', '203'],

['Kanna Kamui', 'https://i.ibb.co/zrGJN99/e7728db8b171.png', '7', '204'],

['Karasuma Tadaomi', 'https://i.ibb.co/CMsxkrC/d8016c0767b3.png', '50', '205'],

['Karma Akabane', 'https://i.ibb.co/QFTqBbL/d7f009c30731.png', '50', '206'],

['Katsuki Bakugo', 'https://i.ibb.co/k24cQH9/8f2dbbb3bbf9.png', '17', '207'],

['Katsura Kotarou', 'https://i.ibb.co/HBm6crP/7709e6d2dca5.png', '52', '208'],

['Kazuma', 'https://i.ibb.co/bKPnLBR/1b54fd66833c.png', '47', '209'],

['Kazuma Kuwabara', 'https://i.ibb.co/PrqzbS0/badfdec48f57.png', '66', '210'],

['Kazuma Satou', 'https://i.ibb.co/cwdf4wm/a4c4a072ba36.png', '18', '211'],

['Keigo Takami (Hawks)', 'https://i.ibb.co/S0bJ7XD/c93993230895.png', '17', '212'],

['Kei Shirogane', 'https://i.ibb.co/yyJPvQW/8e69098cc077.png', '61', '213'],

['Kei Tsukishima', 'https://i.ibb.co/YyXjZGc/fe8618324a0d.png', '53', '214'],

['Kenji Miyazawa', 'https://i.ibb.co/dM6wp3b/6c34661c0f71.png', '64', '215'],

['Kenma Kozume', 'https://i.ibb.co/p2z0Xz7/884bdaf3eba4.png', '53', '216'],

['Kenpachi Zaraki', 'https://i.ibb.co/mynNN7S/d562f32b414c.png', '11', '217'],

['Kento Nanami', 'https://i.ibb.co/jvXZqB7/7456979b0985.png', '65', '218'],

['Kid Buu', 'https://i.ibb.co/kSQ5NjX/419e82fa008d.png', '29', '219'],

['Kikyo', 'https://i.ibb.co/w72cBLX/6ea301ba3f79.png', '25', '220'],

['Killua Zoldyck', 'https://i.ibb.co/z54pXL5/9c487298d7cd.png', '15', '221'],

['Kirari Momobami', 'https://i.ibb.co/7pj5mfr/06710cea5030.png', '62', '222'],

['Kirito', 'https://i.ibb.co/DtK1TmP/7c5e4b99bb88.png', '12', '223'],

['Kiritsugu Emiya', 'https://i.ibb.co/4t3tjk3/60d7695a3980.png', '2', '224'],

['Kishou Arima', 'https://i.ibb.co/p4v4VTM/45779c62c2d9.png', '6', '225'],

['Kisuke Urahara', 'https://i.ibb.co/dbfbYNB/1ec152d7e76b.png', '11', '226'],

['Klein', 'https://i.ibb.co/ChX2YG0/44ec5f88873b.png', '12', '227'],

['Kobayashi', 'https://i.ibb.co/B65f6MW/7d9b44c5cf5f.png', '7', '228'],

['Koenma', 'https://i.ibb.co/QdyzSpM/572567b56dbd.png', '66', '229'],

['Kofuku', 'https://i.ibb.co/VCytwb4/b11600f56c4e.png', '47', '230'],

['Kohaku', 'https://i.ibb.co/VjRM16J/7b339d5caf9f.png', '28', '231'],

['Kojiro Shinomiya', 'https://i.ibb.co/fY6bJyM/2410bf8fa73f.png', '57', '232'],

['Kokoro', 'https://i.ibb.co/rMdQxZr/a46570cb6693.png', '32', '233'],

['Koneko Toujou', 'https://i.ibb.co/Jjzy7nC/17722dd1ef2c.png', '26', '234'],

['Konno Yuuki', 'https://i.ibb.co/7k8WHZ6/c3fe128677d3.png', '12', '235'],

['Koro Sensei', 'https://i.ibb.co/m461kkC/9935197ab66d.png', '50', '236'],

['Koshi Sugawara', 'https://i.ibb.co/mv2RRsQ/155dbc79b52e.png', '53', '237'],

['Kotori Itsuka', 'https://i.ibb.co/S5dbKsy/f832272a387d.png', '35', '238'],

['Kougyoku', 'https://i.ibb.co/0hw4cGQ/8497dd581006.png', '34', '239'],

['Kouta', 'https://i.ibb.co/nf0rVcS/6019e57e26a3.png', '59', '240'],

['Krillin', 'https://i.ibb.co/hLWzF8f/f770746529e8.png', '29', '241'],

['Krul Tepes', 'https://i.ibb.co/pr47B2q/addecc6f8b31.png', '39', '242'],

['Kurapika', 'https://i.ibb.co/c3MRcqG/f9f7c30ffc70.png', '15', '243'],

['Kurisu Makise', 'https://i.ibb.co/xG1HdCR/e6a216a5885e.png', '1', '244'],

['Kurumi Nonaka', 'https://i.ibb.co/bQLmhb5/74fbf58e9ce9.png', '38', '245'],

['Kurumi Tokisaki', 'https://i.ibb.co/HVMR3tL/2a304256d67e.png', '35', '246'],

['Kyoka Jiro', 'https://i.ibb.co/HYJ0jPH/eda0dceb9bbe.png', '17', '247'],

['Kyoko Kirigiri', 'https://i.ibb.co/C7qggN9/91aa180fa731.png', '54', '248'],

['Kyoya Hibari', 'https://i.ibb.co/WxVr0C9/8530e4db6c9d.png', '30', '249'],

['L', 'https://i.ibb.co/qjJYTY8/f327743d308d.png', '49', '250'],

['Lambo', 'https://i.ibb.co/HN4qMXJ/503171c9ed4f.png', '30', '251'],

['Laxus Dreyar', 'https://i.ibb.co/nnCxTC9/e0ccddfb6519.png', '27', '252'],

['Lelouch Lamperouge', 'https://i.ibb.co/FVYQw4w/1955a1c487aa.png', '43', '253'],

['Leorio Paradinight', 'https://i.ibb.co/8zpB7YG/c51e2b510e2e.png', '15', '254'],

['Levi Ackerman', 'https://i.ibb.co/f903brK/4cd39ebceab3.png', '9', '255'],

['Liala', 'https://i.ibb.co/bF3r5gB/b3f862666f9e.png', '38', '256'],

['Light Yagami (Kira)', 'https://i.ibb.co/G51w1Q8/99f974bcd0f9.png', '49', '257'],

['Liliruca Arde', 'https://i.ibb.co/Cbn40Q7/d2fa3bc64d92.png', '19', '258'],

['Lisa Lisa', 'https://i.ibb.co/yRvgBnC/b44e3b305c22.png', '51', '259'],

['Liz T Blood', 'https://i.ibb.co/hyRPkpQ/5899e9ebf73b.png', '40', '260'],

['Loke', 'https://i.ibb.co/6DcxLcp/3d02160309df.png', '27', '261'],

['Lubbock', 'https://i.ibb.co/1JCtnvg/7b5974a6d586.png', '24', '262'],

['Luck Voltia', 'https://i.ibb.co/RjMWN2t/00f31d861f55.png', '3', '263'],

['Lucoa', 'https://i.ibb.co/6DjcgnC/ad076e46a535.png', '7', '264'],

['Lucy Heartfilia', 'https://i.ibb.co/hRPKD2v/63842e5cffef.png', '27', '265'],

['Lucy (Kaede)', 'https://i.ibb.co/Y2Jp003/58a29e12146a.png', '59', '266'],

['Machi Komacine', 'https://i.ibb.co/6X4svLG/eeb52a427fff.png', '15', '267'],

['Madara Uchiha', 'https://i.ibb.co/WFwvxz5/3f4b1fed8740.png', '16', '268'],

['Maka Albarn', 'https://i.ibb.co/vQLWc5q/c49b4b616024.png', '42', '269'],

['Maki Oze', 'https://i.ibb.co/dtDY4qb/f146d71803a6.png', '55', '270'],

['Mako Mankanshoku', 'https://i.ibb.co/ZYDGZBF/b644883a7af1.png', '45', '271'],

['Makoto Kino (Sailor Jupiter)', 'https://i.ibb.co/hHMfW6N/12b19bf6dc1b.png', '37', '272'],

['Makoto Naegi', 'https://i.ibb.co/854RpBb/0e4c1ef3e189.png', '54', '273'],

['Mamoru Chiba (Tuxedo Mask)', 'https://i.ibb.co/ZXqKJFx/40cdda686864.png', '37', '274'],

['Maria Naruse', 'https://i.ibb.co/XJ4wLN1/808ba50a554b.png', '38', '275'],

['Mariko Kurama', 'https://i.ibb.co/tDgJZxy/48e8a89633b3.png', '59', '276'],

['Mary Saotome', 'https://i.ibb.co/x5B4tJ7/dde9886b8f8c.png', '62', '277'],

['Mavis Vermillion', 'https://i.ibb.co/bmRnF8B/fd27a22dc327.png', '27', '278'],

['Maya Joga', 'https://i.ibb.co/mSRTCkw/a40e44bc8af7.png', '41', '279'],

['Mayu', 'https://i.ibb.co/FB9xP7y/cc6caf63bd43.png', '59', '280'],

['Mayuri', 'https://i.ibb.co/B3nwNYv/d7d73cdc4c23.png', '35', '281'],

['Mayuri Shiina', 'https://i.ibb.co/Z65sNPZ/5f0a28913b76.png', '1', '282'],

['Medusa Gorgon', 'https://i.ibb.co/MDdrtT4/73ee8f33bbe9.png', '42', '283'],

['Megumi Fushiguro', 'https://i.ibb.co/mFbNLzq/5558d9189573.png', '65', '284'],

['Megumin', 'https://i.ibb.co/d6bWkmZ/35a8e40c8f55.png', '18', '285'],

['Megumi Natsu', 'https://i.ibb.co/4mfD0N8/12862c9731e8.png', '41', '286'],

['Megumi Tadokoro', 'https://i.ibb.co/LC2ccjW/3c8c0b8be5bb.png', '57', '287'],

['Meliodas', 'https://i.ibb.co/TRddqtP/4c17845f6fe0.png', '5', '288'],

['Mello', 'https://i.ibb.co/6mMtzfw/25df2ef4c7d9.png', '49', '289'],

['Melty Q Melromarc', 'https://i.ibb.co/CPwLkFN/f6e86b7e5632.png', '4', '290'],

['Mephisto Pheles', 'https://i.ibb.co/bg2xsGm/a941e45d2980.png', '44', '291'],

['Mera Mera', 'https://i.ibb.co/NVkW9cV/ec7f24441e2e.png', '55', '292'],

['Merlin', 'https://i.ibb.co/8g4LZWH/de9f763d8cb6.png', '5', '293'],

['Mikaela Hyakuya', 'https://i.ibb.co/gdXVkBp/1baf50d032bf.png', '39', '294'],

['Mikasa Ackerman', 'https://i.ibb.co/z2pQCxV/31f65fc26ba5.png', '9', '295'],

['Miko', 'https://i.ibb.co/PrfsH0c/8d9e56d1de76.png', '48', '296'],

['Miko Iino', 'https://i.ibb.co/pP44csn/9a90fbc7909f.png', '61', '297'],

['Miku (390)', 'https://i.ibb.co/16GFBcp/2bb5b40d626d.png', '32', '298'],

['Miku Nakano', 'https://i.imgur.com/KYqUGsh.png', '63', '299'],

['Milim Nava', 'https://i.ibb.co/2WwwhcT/32b3f3b73055.png', '46', '300'],

['Minako Aino (Sailor Venus)', 'https://i.ibb.co/PGSWSP4/d17375a9416a.png', '37', '301'],

['Minato Namikaze', 'https://i.ibb.co/4jCRff9/74d4ba62a614.png', '16', '302'],

['Mine', 'https://i.ibb.co/Y30WXZv/8ec30b0798b2.png', '24', '303'],

['Minene Uryuu', 'https://i.ibb.co/2KK5SKf/449e8f4de404.png', '31', '304'],

['Mio Akiyama', 'https://i.ibb.co/hWr8HN8/75a704936853.png', '21', '305'],

['Mio Naruse', 'https://i.ibb.co/kqZ6qtt/3eb9ff5b1030.png', '38', '306'],

['Mio Takamiya', 'https://i.ibb.co/b67fnQK/63a74ee508a7.png', '35', '307'],

['Miroku', 'https://i.ibb.co/nf1WJvr/545ec816676d.png', '25', '308'],

['Misa Amane', 'https://i.ibb.co/q1dj5Cn/e977afbb08ea.png', '49', '309'],

['Misaka Mikoto', 'https://i.ibb.co/F0kfFc4/d7f7604b7463.png', '33', '310'],

['Mitsuba Sangu', 'https://i.ibb.co/6XWs5K6/d74a877c02a8.png', '39', '311'],

['Miyuki Shirogane', 'https://i.ibb.co/tCynLgV/13fc054123e9.png', '61', '312'],

['Mocha Hoto', 'https://i.ibb.co/CKCVxpV/eda64e246dd6.png', '41', '313'],

['Momo Yaoyorozu', 'https://i.ibb.co/Htnpyk1/2f6d943a338a.png', '17', '314'],

['Monika', 'https://i.ibb.co/nR6RTCW/1055134a6e6e.png', '0', '315'],

['Monkey D Luffy', 'https://i.ibb.co/kSDr57K/d354b76a74b9.png', '10', '316'],

['Morgiana', 'https://i.ibb.co/8s6Rvyv/53ca8288c7af.png', '34', '317'],

['Mori Jin', 'https://i.ibb.co/4Zvgkwx/e684a704d89e.png', '0', '318'],

['Motoyasu Kitamura', 'https://i.ibb.co/1bs3dyq/4ecde28e34e7.png', '4', '319'],

['Mukuro Rokudo', 'https://i.ibb.co/JsJnS2F/dda750d1a711.png', '30', '320'],

['Nagisa Shiota', 'https://i.ibb.co/3fvQDrP/99f1d018da77.png', '50', '321'],

['Nagito Komaeda', 'https://i.ibb.co/7W0gM5s/7701fb3d6790.png', '54', '322'],

['Nami', 'https://i.ibb.co/mv0XCFY/327f19e5a8d2.png', '10', '323'],

['Nana', 'https://i.ibb.co/m9FR9GG/4f6859b73375.png', '59', '324'],

['Naofumi Iwatani', 'https://i.ibb.co/d67Ftj1/5632387b22c1.png', '4', '325'],

['Naomi Misora', 'https://i.ibb.co/Kq9H7m5/89c9096ce600.png', '49', '326'],

['Naraku', 'https://i.ibb.co/B4YktQB/213ccb40d5dd.png', '25', '327'],

['Naruto Uzumaki', 'https://i.ibb.co/k3P7cVG/aff3413d7beb.png', '16', '328'],

['Natsu Dragneel', 'https://i.ibb.co/zF09gy7/0c703fe29018.png', '27', '329'],

['Natsuki', 'https://i.ibb.co/3ky6Lm5/961e629beca3.png', '0', '330'],

['Near', 'https://i.ibb.co/58tL7xR/d82de7e8d5f3.png', '49', '331'],

['Neji Hyuga', 'https://i.ibb.co/WkgH0f3/b523f6e8e3d4.png', '16', '332'],

['Nero', 'https://i.ibb.co/vHdtsMZ/1191b71a6a4e.png', '3', '333'],

['Nezuko Kamado', 'https://i.ibb.co/vLDGS1X/7484620ddea0.png', '23', '334'],

['Nico Robin', 'https://i.ibb.co/6DndZkS/c720bb110c02.png', '10', '335'],

['Nino Nakano', 'https://i.imgur.com/u5YiN8Y.png', '63', '336'],

['Nobara Kugisaki', 'https://i.ibb.co/vzn6vf6/c5af259ae2ef.png', '65', '337'],

['Nobuchika Ginoza', 'https://i.ibb.co/TB6jVHd/e545d53f943b.png', '67', '338'],

['Noda', 'https://i.ibb.co/yYsgcGP/376f1dcee0dc.png', '14', '339'],

['Noelle Silva', 'https://i.ibb.co/TBgKQ05/fa05cff8cb60.png', '3', '340'],

['No Face', 'https://i.ibb.co/q9q3tCg/d70642c2ccf5.png', '0', '341'],

['November', 'https://i.ibb.co/5sbJVYN/3fd0a5d16bce.png', '8', '342'],

['Nui Harime', 'https://i.ibb.co/QYWHkn3/2e9cf782b032.png', '45', '343'],

['Ochaco Uraraka', 'https://i.ibb.co/YcLYQgC/e7bcd5ce2dd9.png', '17', '344'],

['Okita Sougo', 'https://i.ibb.co/5kjkhmQ/bd31f3ede945.png', '52', '345'],

['Origami Tobiichi', 'https://i.ibb.co/cgh0nnj/566cb595d5cc.png', '35', '346'],

['Osamu Dazai', 'https://i.ibb.co/6XdZCTK/39f6fd3d72b6.png', '64', '347'],

['Padoru', 'https://i.ibb.co/2YZKSVN/e8b1b5be70d8.png', '0', '348'],

['Pain', 'https://i.ibb.co/23K9LBV/93d3a5bb67c3.png', '16', '349'],

['Piccolo', 'https://i.ibb.co/VDKFBTQ/742ea68b19d3.png', '29', '350'],

['Portgas D Ace', 'https://i.ibb.co/rvZPRYF/f4fa47e265ee.png', '10', '351'],

['Priestess', 'https://i.ibb.co/WnKDxdh/a804de43d0ef.png', '58', '352'],

['Prince Diamond', 'https://i.ibb.co/bscGjVt/a614ff297bc3.png', '37', '353'],

['Puck', 'https://i.ibb.co/R35jWmW/2cfc8e196d99.png', '13', '354'],

['Rabo', 'https://i.ibb.co/przj5F5/7e38f74e15a0.png', '47', '355'],

['Ram', 'https://i.ibb.co/qgc2j2m/53f930cf7763.png', '13', '356'],

['Ranpo Edogawa', 'https://i.ibb.co/N72tyGX/3a48a243af57.png', '64', '357'],

['Raphtalia', 'https://i.ibb.co/bvFTnpY/61fb9d3c64db.png', '4', '358'],

['Reborn', 'https://i.ibb.co/1nDsywY/e033c706da2e.png', '30', '359'],

['Rei Hino (Sailor Mars)', 'https://i.ibb.co/5Fvsv8K/e613c120728c.png', '37', '360'],

['Reisuke Houjou', 'https://i.ibb.co/FzzhngY/623982d53a6a.png', '31', '361'],

['Rem', 'https://i.ibb.co/HKGqy7G/ac78497f22dd.png', '13', '362'],

['Ren Amaki', 'https://i.ibb.co/601dS7Z/51bf5002c42a.png', '4', '363'],

['Ren Amamiya (Joker)', 'https://i.ibb.co/k6jBjnv/15084024616c.png', '0', '364'],

['Ren Hakuryuu', 'https://i.ibb.co/x1kWMHV/4dff317f29eb.png', '34', '365'],

['Renzo Shima', 'https://i.ibb.co/z49Mhhb/510fc9ef032c.png', '44', '366'],

['Rias Gremory', 'https://i.ibb.co/1Q2yBst/68723e18e8b9.png', '26', '367'],

['Riko Saikawa', 'https://i.ibb.co/rfzXskH/1746efa83678.png', '7', '368'],

['Rimuru Tempest', 'https://i.ibb.co/yFk40wW/5ba32f77c314.png', '46', '369'],

['Rin Okumura', 'https://i.ibb.co/3kQMj5z/64fca10e066f.png', '44', '370'],

['Rintarou Okabe', 'https://i.ibb.co/HKDg0GG/7b294198f3a7.png', '1', '371'],

['Rin Tohsaka', 'https://i.ibb.co/Dw07LFN/ad716aa736b5.png', '2', '372'],

['Ririka Momobami', 'https://i.ibb.co/TRpGPrB/b679f0ec25f7.png', '62', '373'],

['Ritsu', 'https://i.ibb.co/t3GVVNm/c206ec15952b.png', '50', '374'],

['Ritsu Kageyama', 'https://i.ibb.co/sP13hLn/83402ae6f9c0.png', '56', '375'],

['Ritsu Tainaka', 'https://i.ibb.co/qnW9fn3/2dffe767869a.png', '21', '376'],

['Riza Hawkeye', 'https://i.ibb.co/TPBNXCN/6f43cbbdaab1.png', '20', '377'],

['Rize Tedeza', 'https://i.ibb.co/wZnypZH/b5db3ea9d04b.png', '41', '378'],

['Rock Lee', 'https://i.ibb.co/NSGZC15/431cbfe0026e.png', '16', '379'],

['Roronoa Zoro', 'https://i.ibb.co/2dcGcFZ/a958f9668d24.png', '10', '380'],

['Rossweisse', 'https://i.ibb.co/7ntLMsn/69e750800fdd.png', '26', '381'],

['Roy Mustang', 'https://i.ibb.co/0MBzPp2/2bc65ca7502e.png', '20', '382'],

['Rukia Kuchiki', 'https://i.ibb.co/stw2pHJ/de737aae50c2.png', '11', '383'],

['Ryohei Sasagawa', 'https://i.ibb.co/JrHQ964/fc2f2ac3e145.png', '30', '384'],

['Ryo Kurokiba', 'https://i.ibb.co/R37s3vq/6da93c48cd2c.png', '57', '385'],

['Ryota Suzui', 'https://i.ibb.co/6tMPZ2Q/bc1856a21d4c.png', '62', '386'],

['Ryuji Suguro', 'https://i.ibb.co/CMSdbw5/7651e0c2441d.png', '44', '387'],

['Ryuk', 'https://i.ibb.co/1ZNKHyR/624e9a6fa29f.png', '49', '388'],

['Ryuko Matoi', 'https://i.ibb.co/6nbqk1Q/8aca5a628612.png', '45', '389'],

['Ryuu Lion', 'https://i.ibb.co/wyFqKNN/bc7213b7cff9.png', '19', '390'],

['Saitama', 'https://i.ibb.co/gmgHWzH/47cd861d1465.png', '36', '391'],

['Sakura Haruno', 'https://i.ibb.co/6HHt8d5/3d34c5e32a44.png', '16', '392'],

['Sakura Matou', 'https://i.ibb.co/Fb5vrz4/ad71f21e21fa.png', '2', '393'],

['Sango', 'https://i.ibb.co/cvR6hWr/ddc8b83319d8.png', '25', '394'],

['Sanji', 'https://i.ibb.co/CBwdzTB/b1e147c13fb2.png', '10', '395'],

['Sans', 'https://i.ibb.co/9prkyC0/456108998db4.png', '0', '396'],

['Sasuke Uchiha', 'https://i.ibb.co/f9YRKKd/496504d21a05.png', '16', '397'],

['Saten Ruiko', 'https://i.ibb.co/cJv1FZg/535ae2cf3c34.png', '33', '398'],

['Satoru Gojo', 'https://i.ibb.co/qJFwrQ6/cba345d56c21.png', '65', '399'],

['Satoshi Isshiki', 'https://i.ibb.co/LSTG52j/c94d966f1b18.png', '57', '400'],

['Satsuki Kiryuin', 'https://i.ibb.co/FKWWVYC/a538387fae11.png', '45', '401'],

['Sayaka Maizono', 'https://i.ibb.co/Pxz5J3b/bfe6f956dd0e.png', '54', '402'],

['Sayori', 'https://i.ibb.co/GvM6y2F/87c54c10ee41.png', '0', '403'],

['Scar', 'https://i.ibb.co/Rvs968P/fa6a74fbbea3.png', '20', '404'],

['Scathach', 'https://i.ibb.co/BLSwV9M/7481768fc636.png', '2', '405'],

['Sebas Tian', 'https://i.ibb.co/kyhsVcm/df3a75ef098d.png', '22', '406'],

['Senku Ishigami', 'https://i.ibb.co/8x9tZGJ/db80c3f9bfac.png', '28', '407'],

['Sesshomaru', 'https://i.ibb.co/CQ3z9MY/ee99ede71c1f.png', '25', '408'],

['Shalltear Bloodfallen', 'https://i.ibb.co/wyyNjtT/04dc6a826c09.png', '22', '409'],

['Sharo Kirima', 'https://i.ibb.co/pjxrQhx/3ab57b38313c.png', '41', '410'],

['Shido Itsuka', 'https://i.ibb.co/4KP8t66/6a0a2d460067.png', '35', '411'],

['Shiemi Moriyama', 'https://i.ibb.co/0Jh7pDg/756610c5b1d0.png', '44', '412'],

['Shigeo Kageyama', 'https://i.ibb.co/DC9DDVs/337627864a3f.png', '56', '413'],

['Shikamaru Nara', 'https://i.ibb.co/nfsjRqQ/5d91ad6329b8.png', '16', '414'],

['Shimura Shinpachi', 'https://i.ibb.co/W6ztPHd/9f1d5b65cd58.png', '52', '415'],

['Shinoa Hiragi', 'https://i.ibb.co/WvkTdPB/0ff4665a97d1.png', '39', '416'],

['Shinobu Kocho', 'https://i.ibb.co/fqprV5t/a36c80d79134.png', '23', '417'],

['Shinra Kusakabe', 'https://i.ibb.co/gWZ8jb1/da749cef8989.png', '55', '418'],

['Shinya Hiragi', 'https://i.ibb.co/TKZPKdL/bf1661864be6.png', '39', '419'],

['Shinya Kogami', 'https://i.ibb.co/mbv2jDY/5782a96881f7.png', '67', '420'],

['Shion', 'https://i.ibb.co/6NbdPJf/9a3817cacc86.png', '46', '421'],

['Shirai Kuroko', 'https://i.ibb.co/W6jXhJL/1173ebaa0b8f.png', '33', '422'],

['Shirley Fenette', 'https://i.ibb.co/qmz2H3w/6b7335852290.png', '43', '423'],

['Shiro', 'https://i.ibb.co/dByPP11/e69f66dc81b4.png', '48', '424'],

['Shirou Emiya', 'https://i.ibb.co/Dg4TZfB/b88490be27f4.png', '2', '425'],

['Shizue Izawa', 'https://i.ibb.co/RHRNL5D/234da1630fc3.png', '46', '426'],

['Shogo Makishima', 'https://i.ibb.co/pzHThfZ/dd27670928f8.png', '67', '427'],

['Shokuhou Misaki', 'https://i.ibb.co/kXz0Cqz/90903b5ca21b.png', '33', '428'],

['Sho Suzuki', 'https://i.ibb.co/1GZzxdf/7f057d488796.png', '56', '429'],

['Shota Aizawa (Eraser Head)', 'https://i.ibb.co/WpvcHdv/d66f2bd2a395.png', '17', '430'],

['Shoto Todoroki', 'https://i.ibb.co/Mk490BG/1ebc2c0157d3.png', '17', '431'],

['Shoyo Hinata', 'https://i.ibb.co/dfMj11P/cb30cd77bf9d.png', '53', '432'],

['Shrek', 'https://i.ibb.co/TMyyrsN/db165e8684a3.png', '0', '433'],

['Shusei Kagari', 'https://i.ibb.co/fSWjmS5/da10f6557409.png', '67', '434'],

['Sinbad', 'https://i.ibb.co/hMW9bjP/dfd216f6a9e3.png', '34', '435'],

['Sinon', 'https://i.ibb.co/Rjp8Hzf/1a135f8ccc32.png', '12', '436'],

['Skeleton', 'https://i.ibb.co/Dpq8RXj/13847b39eb1a.png', '0', '437'],

['Soma Yukihira', 'https://i.ibb.co/s1vHcc6/82ee420f7364.png', '57', '438'],

['Son Goku', 'https://i.ibb.co/NnMh2Yx/51f48a6e9a51.png', '29', '439'],

['Sora', 'https://i.ibb.co/ftz4Mmg/08a93cab49cc.png', '48', '440'],

['Sosuke Aizen', 'https://i.ibb.co/cy0BJBp/3b8d359694ef.png', '11', '441'],

['Souei', 'https://i.ibb.co/M1fcXfr/1bb39b2c4f2e.png', '46', '442'],

['Soul Evans', 'https://i.ibb.co/R2rQCJv/3b9595d58336.png', '42', '443'],

['Spike Spiegel', 'https://i.ibb.co/gyvfc56/5016dcbe4f4d.png', '60', '444'],

['Squalo', 'https://i.ibb.co/2WBpLwP/073c6a183d90.png', '30', '445'],

['Staz C Blood', 'https://i.ibb.co/p0fKfSS/23b204b644a5.png', '40', '446'],

['Stephanie Dola', 'https://i.ibb.co/fXw5FPv/bea2a8522c1b.png', '48', '447'],

['Subaru Natsuki', 'https://i.ibb.co/0fPLf7N/231c381c59de.png', '13', '448'],

['Suika', 'https://i.ibb.co/dJnwBbp/fd9258c5eaaa.png', '28', '449'],

['Suou Pavlichenko', 'https://i.ibb.co/jD60VbX/b57943a179c3.png', '8', '450'],

['Suzaku Kururugi', 'https://i.ibb.co/fGQH9hV/b1d801093d7a.png', '43', '451'],

['Suzuha Amane', 'https://i.ibb.co/64whRxz/0fced7cb5aaa.png', '1', '452'],

['Suzuya Juuzou', 'https://i.ibb.co/3fYyQHx/0b34d1102a23.png', '6', '453'],

['Sword Maiden', 'https://i.ibb.co/5sqFCqR/55d6184f4bc2.png', '58', '454'],

['Takasugi Shinsuke', 'https://i.ibb.co/CWYTkHr/15603713f9a6.png', '52', '455'],

['Takehisa Hinawa', 'https://i.ibb.co/qj9pTT1/57a7c7a123c1.png', '55', '456'],

['Takeshi Yamamoto', 'https://i.ibb.co/hLsgSx1/4efac2904ff4.png', '30', '457'],

['Takumi Aldini', 'https://i.ibb.co/6b5pnHn/a9f74e1d4b54.png', '57', '458'],

['Tamaki Kotatsu', 'https://i.ibb.co/yFcxFDf/2d1d17a01dab.png', '55', '459'],

['Tanjiro Kamado', 'https://i.ibb.co/6wbpMkX/85bbed126ea0.png', '23', '460'],

['Tatsumaki', 'https://i.ibb.co/TmPXRNC/78f58792bbd1.png', '36', '461'],

['Tatsumi', 'https://i.ibb.co/QbR5pxZ/b5a3e70d3c0f.png', '24', '462'],

['Teruki Hanazawa', 'https://i.ibb.co/vq2nfVP/462d05640a94.png', '56', '463'],

['Tet', 'https://i.ibb.co/hXn9CC4/000dded68bba.png', '48', '464'],

['Tetsuro Kuroo', 'https://i.ibb.co/TWDRG6W/a7f638b836f2.png', '53', '465'],

['Tobio Kageyama', 'https://i.ibb.co/jWNRVnp/a1cc09b21772.png', '53', '466'],

['Toge Inumaki', 'https://i.ibb.co/92ZXHR2/b1ce08951c48.png', '65', '467'],

['Tohka Yatogami', 'https://i.ibb.co/G0NGKvQ/3b9812f06da2.png', '35', '468'],

['Tohru', 'https://i.ibb.co/P6DCbwS/863f1ddc6e6f.png', '7', '469'],

['Toko Fukawa', 'https://i.ibb.co/rp9XjDS/9be8f3cdb613.png', '54', '470'],

['Tony Tony Chopper', 'https://i.ibb.co/P9ZQvXp/36dcf2c261eb.png', '10', '471'],

['Toshiro Hitsugaya', 'https://i.ibb.co/4T7gfpL/aaefc82c23be.png', '11', '472'],

['Touka Kirishima', 'https://i.ibb.co/yFKtpbN/c01c8e4d4238.png', '6', '473'],

['Trafalgar D Law', 'https://i.ibb.co/Tv1mwrh/c08fb7110816.png', '10', '474'],

['Trunks', 'https://i.ibb.co/K7zPHTw/cf5469cff58c.png', '29', '475'],

['Tsubaki Kasugano', 'https://i.ibb.co/TW3ZLR5/769b61f847a4.png', '31', '476'],

['Tsukasa Shishio', 'https://i.ibb.co/yfsxsmx/0c02c6362ccb.png', '28', '477'],

['Tsukuyo', 'https://i.ibb.co/JvQz47B/02dfdd71c813.png', '52', '478'],

['Tsumugi Kotobuki', 'https://i.ibb.co/fFRFGVC/164e68457b8e.png', '21', '479'],

['Tsunayoshi Sawada (Tsuna)', 'https://i.ibb.co/5RzVhqD/633c7576d343.png', '30', '480'],

['Ukyo Saionji', 'https://i.ibb.co/wBQqN84/3c6d970be0f7.png', '28', '481'],

['Ulquiorra Schiffer', 'https://i.ibb.co/8c1bfgL/913714e2438e.png', '11', '482'],

['Usagi Tsukino (Sailor Moon)', 'https://i.ibb.co/VYp8hYy/4b902712aeef.png', '37', '483'],

['Usopp', 'https://i.ibb.co/2y4wFdb/c0cfb88bc5e9.png', '10', '484'],

['Uzu Sanageyama', 'https://i.ibb.co/122y1P8/81bf0a6ecc1c.png', '45', '485'],

['Vegeta', 'https://i.ibb.co/8PdmL5L/8f8d48553f77.png', '29', '486'],

['Vicious', 'https://i.ibb.co/N22bPxn/12c41ca03d7d.png', '60', '487'],

['Violet Evergarden', 'https://i.ibb.co/TLxvwNn/7ec335985eee.png', '0', '488'],

['Wave', 'https://i.ibb.co/RSys4P7/701d7ff972f2.png', '24', '489'],

['Wendy Marvell', 'https://i.ibb.co/Jsdpprf/7c232c7c9ea5.png', '27', '490'],

['Wiz', 'https://i.ibb.co/TcjyN5L/3cbc80f774fc.png', '18', '491'],

['Wolf', 'https://i.ibb.co/LxbmF28/3e47676cb00d.png', '40', '492'],

['Yami Sukehiro', 'https://i.ibb.co/rtMY0G6/1d12243af4c8.png', '3', '493'],

['Yato', 'https://i.ibb.co/Ss4Cg0T/2389136202d4.png', '47', '494'],

['Yin', 'https://i.ibb.co/rQGzY7w/50b78fe983ac.png', '8', '495'],

['Yoichi Saotome', 'https://i.ibb.co/bzNNwVV/693de3f85211.png', '39', '496'],

['Yoko Kurama', 'https://i.ibb.co/QXzs7rN/f041282073da.png', '66', '497'],

['Yoshino', 'https://i.ibb.co/GtdrZ9v/55156fef6d67.png', '35', '498'],

['Yotsuba Nakano', 'https://i.imgur.com/HBeoXM5.png', '63', '499'],

['Yui', 'https://i.ibb.co/jyWMw04/fe31d44e47f3.png', '14', '500'],

['Yuichiro Hyakuya', 'https://i.ibb.co/3BJNv6C/3eeaea78c111.png', '39', '501'],

['Yui Hirasawa', 'https://i.ibb.co/8zfhRHr/1aa314975f9f.png', '21', '502'],

['Yu Ishigami', 'https://i.ibb.co/64s13Yb/28fdf84aacdd.png', '61', '503'],

['Yuji Itadori', 'https://i.ibb.co/WxtMDXB/8ec7348d6443.png', '65', '504'],

['Yukichi Fukuzawa', 'https://i.ibb.co/kMtg94W/c564ee9b5500.png', '64', '505'],

['Yukina', 'https://i.ibb.co/gts5hfB/a90e2b972bf1.png', '66', '506'],

['Yukine', 'https://i.ibb.co/rbSHdM5/359c5d60782f.png', '47', '507'],

['Yuki Nonaka', 'https://i.ibb.co/NTtjqVH/0e31c1dd5fed.png', '38', '508'],

['Yukio Okumura', 'https://i.ibb.co/q9qdr28/4c890ffa1c7e.png', '44', '509'],

['Yukiteru Amano', 'https://i.ibb.co/Snq8sLr/d2d7e4734db6.png', '31', '510'],

['Yumeko Jabami', 'https://i.ibb.co/Tv6fY9C/7818fc337ed8.png', '62', '511'],

['Yu Nishinoya', 'https://i.ibb.co/Vvfth6j/ebd6a8253236.png', '53', '512'],

['Yuno', 'https://i.ibb.co/HFzZgYy/05d6b75ee2a6.png', '3', '513'],

['Yuno Gasai', 'https://i.ibb.co/7vHTYKy/11a3d94ff547.png', '31', '514'],

['Yunyun', 'https://i.ibb.co/x2DJcCx/e0b44bc3a040.png', '18', '515'],

['Yuri', 'https://i.ibb.co/YpWVst2/16690ec1eb4e.png', '0', '516'],

['Yuriko Nishinotouin', 'https://i.ibb.co/wRwRvPx/d00ead942bd1.png', '62', '517'],

['Yuri Nakamura', 'https://i.ibb.co/98mWBzB/ca8ac2e35fd8.png', '14', '518'],

['Yusuke Urameshi', 'https://i.ibb.co/Yfc63qJ/f8fb861cea53.png', '66', '519'],

['Yuta Okkotsu', 'https://i.ibb.co/Q965nPv/2dcecbd614c6.png', '65', '520'],

['Yuzuru Otonashi', 'https://i.ibb.co/tpy15BZ/ef10ed24e5a8.png', '14', '521'],

['Zenitsu Agatsuma', 'https://i.ibb.co/XLvN6ZX/3e298e0db95e.png', '23', '522'],

['Zero Two', 'https://i.ibb.co/qxqzw8r/4f5d6cd512e6.png', '32', '523'],

['Zest', 'https://i.ibb.co/LRGZNvq/9002a3c9a925.png', '38', '524'],

['Zombieman', 'https://i.ibb.co/cwvtLSq/c5470847a8b3.png', '36', '525'],

['Zora Ideale', 'https://i.ibb.co/M94bfc7/eab1e173040e.png', '3', '526']
            
            ]
        var rarities = [[1,'Common',0],[2,'Uncommon',0],[3,'Rare',0],[4,'Super Rare',0],[5,'Ultra Rare',0]]  
        if (arguments[0]) {
            if (arguments[0].toLowerCase() === 'epic' || arguments[0].toLowerCase() === 'e') {
                if (arguments[1]) {
                    if (arguments[1].toLowerCase() === 'pack') {
                        //message.channel.send(`Works`)

                        counter1 = -1
                        for (let eachword of arguments) {
                            counter1++
                            if (eachword.toLowerCase()==='-loc' || eachword.toLowerCase()==='-location' || eachword.toLowerCase()==='loc' || eachword.toLowerCase()==='location' ) {
                                if (eachword[counter1]+1) {
                                    var reqLoc = arguments.map(words => parseInt(words)).filter(words => !isNaN(words))[0];
                                    console.log(reqLoc)
                                }
                            }
                        }


                        let cardRarityNo = 0
                        var gotRarities = []
                        let allCardIdRecieved = []
                        let cardListLoc = []
                        if (reqLoc) {
                            if (reqLoc >=0 && reqLoc <= 67) {
                                for (const card of imageList) {
                                    if (parseInt(card[2]) === reqLoc) {
                                        cardListLoc.push([card[0],card[1]])
                                    }
                                }
                            }
                        }

                        function getUniueNumber(array) {
                            var cardIds = Math.floor((Math.random()*526))
                            if (reqLoc) {
                                cardIds = Math.floor((Math.random()*(cardListLoc.length)))
                            }
                            if (array.includes(cardIds)) return getUniueNumber(array);
                            array.push(cardIds);
                        }

                        console.log(cardListLoc)
                        for (let i=0; i<5; i++) {
                            let chance = Math.floor((Math.random()*1004)+1)
                            getUniueNumber(allCardIdRecieved)
                            //allCardIdRecieved.push(cardIds)
                            //console.log(cardId)
                            //console.log(i)
                            if (chance>=1 && chance<=500) {
                                cardRarityNo = 3
                            } else if (chance>=501 && chance<=1000) {
                                cardRarityNo = 4
                            } else if (chance>=1001 && chance<=1004) {
                                cardRarityNo = 5
                            }
                            gotRarities.push(cardRarityNo)
                        }
                        for (let Id of allCardIdRecieved) {
                            if (Id === 1 || Id === 2) { Id =3 }
                            if (Id === 44 || Id === 122 || Id === 123 || Id === 126 || Id === 141 || Id === 158 || Id === 180 || Id === 315 || Id === 318 || Id === 330 || Id === 341 || Id === 348 || Id === 364 || Id === 396 || Id === 403 || Id === 433 || Id === 437 || Id === 488 || Id === 516 ) {
                                Id = Id+1
                            }
                        }

                        for (let words of arguments) {
                            if (words.toLowerCase() === 'ur' && (message.author.id === '439541365580365835' || message.author.id === '724554117833293896')) {
                                gotRarities[0] = 5
                            }
                        }
                        let rarityRecieved = ''
                        let allRarityRecieved = []
                        for(let eachCardRarity of gotRarities) {
                            //console.log(eachCardRarity)
                            for (let eachLog of rarities) {
                                if (parseInt(eachCardRarity) === parseInt(eachLog[0])) {
                                    rarityRecieved = eachLog[1]
                                    //console.log(rarityRecieved)
                                    allRarityRecieved.push(`${rarityRecieved}`) 
                                }
                            }
                        }

                        let allCardsRecieved = []
                        let allCardsRecievedIMG = []
                        if (!reqLoc) {
                            cardId = -1
                            for (let eachCard of imageList) {
                                cardId++
                                for (let eachId of allCardIdRecieved) {
                                    if (parseInt(cardId) === parseInt(eachId)) {
                                        cardReceived = eachCard[0]
                                        cardReceivedIMG = eachCard[1]
                                        allCardsRecieved.push(`${cardReceived}`)
                                        allCardsRecievedIMG.push(`${cardReceivedIMG}`)
                                    }
                                }
                            }
                        } else if (reqLoc) {
                            let cardIdloc = -1
                            for (let eachcardloc of cardListLoc) {
                                cardIdloc++
                                for (let eachId of allCardIdRecieved) {
                                    if (parseInt(cardIdloc) === parseInt(eachId)) {
                                        cardReceived = eachcardloc[0]
                                        cardReceivedIMG = eachcardloc[1]
                                        allCardsRecieved.push(`${cardReceived}`)
                                        allCardsRecievedIMG.push(`${cardReceivedIMG}`)
                                    }
                                }
                            }
                        }
                        message.channel.send(`Summoner, you have totally not spent __50000__ gold and received...`)

                        // Image Formation

                        const canvas = Canvas.createCanvas(700, 190);
                        const ctx = canvas.getContext('2d');
                        const image1 = await Canvas.loadImage(allCardsRecievedIMG[0])
                        ctx.drawImage(image1, 0, 0, 150, canvas.height)
                        const image2 = await Canvas.loadImage(allCardsRecievedIMG[1])
                        ctx.drawImage(image2, 140, 0, 150, canvas.height)
                        const image3 = await Canvas.loadImage(allCardsRecievedIMG[2])
                        ctx.drawImage(image3, 280, 0, 150, canvas.height)
                        const image4 = await Canvas.loadImage(allCardsRecievedIMG[3])
                        ctx.drawImage(image4, 420, 0, 150, canvas.height)
                        const image5 = await Canvas.loadImage(allCardsRecievedIMG[4])
                        ctx.drawImage(image5, 560, 0, 150, canvas.height)

                        //console.log(canvas.toBuffer())

                        const attachment = new MessageAttachment(canvas.toBuffer(), 'pack.png')

                        var PackEmbed = new MessageEmbed()
                            .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic:true}))
                            .setTitle(`**Pack Opened!**`)
                            .setDescription(`The following cards have totally not been added to your inventory.\n\n\n${allRarityRecieved[0]} **${allCardsRecieved[0]}** \n\n\n${allRarityRecieved[1]} **${allCardsRecieved[1]}**  \n\n\n${allRarityRecieved[2]} **${allCardsRecieved[2]}**  \n\n\n${allRarityRecieved[3]} **${allCardsRecieved[3]}** \n\n\n${allRarityRecieved[4]} **${allCardsRecieved[4]}**`)
                            .setThumbnail(client.user.displayAvatarURL({dynamic:true}))
                            .setColor(`0x00FFFF`)
                            .setImage('attachment://pack.png')
                            //.setImage(`https://images-ext-1.discordapp.net/external/f_JUHSZMo_iIBjEw-8BuZUV87jxszrgaId1EYIsrWv8/https/images-ext-2.discordapp.net/external/5h8Ft5MRCb9FmYlUsT220MGfh7i7yrDp2mPbKXJLlsU/https/images-ext-1.discordapp.net/external/UB5EKO5TGAFdE2UHSkTz_GKEMMV_ZgYRQ5pmhK0XnME/https/images-ext-2.discordapp.net/external/RbeQMn91CZtIgt0CRTw5_VGQ3H-PT4QTj-h6FZ-MmI8/https/images-ext-2.discordapp.net/external/HD0NjjqqY_xfttHZYBQ3qxy4jZvhh8QsWsPZcoUriSg/https/images-ext-2.discordapp.net/external/8NJyq6wOTFhB7sV5aZZPM0sxVFu-OqbqA_r3_ICuWjQ/https/images-ext-2.discordapp.net/external/AobYlw89XPgp-M3JO6iaFil57Kebob1IiEI1Gj-WsYM/https/images-ext-1.discordapp.net/external/kkksUy6_ndRNH4FMfF_HjdKdj9cSdzTQ3tTgS_s1yyM/https/images-ext-2.discordapp.net/external/1pMUJZCNS-yfcutpPnM2eDIUcgjdUb8wq-LAlZM2fR0/https/images-ext-1.discordapp.net/external/4HwlXd41JDHUSGTnM-ce-QhnskgFaRyjDeMQRfD5YSo/https/images-ext-1.discordapp.net/external/xSNDHHsVGgPyY-f-9G_3Uak_N45Fy8GCo4NqmE29qPs/https/images-ext-2.discordapp.net/external/V48ALmFdzKnukxMTxmOM5k_F8LwvUn8k2PZAr6gpNS4/https/images-ext-2.discordapp.net/external/_gXH4EtzH7OhPK-qv2YtLP0Q_J-PEVoXX6JgonG9YC8/https/media.discordapp.net/attachments/784430986532356106/833002587774255144/image0.png`)

                        message.channel.send({ embeds : [PackEmbed] , files: [attachment] })
                        // console.log(allRarityRecieved)
                        // console.log(allCardIdRecieved)
                        // console.log(allCardsRecieved)
                    }
                }
            }
        }
    }
}