const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
const { kategori, yetkili } = require('../config.json');
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
  
	const row = new MessageActionRow()
    
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('kilit')
                    .setPlaceholder('Bileti Kilitler!')
					.addOptions([
						{
							label: '🗑️ Silinen Bilet',
							description: 'Kanalı sil',
							value: 'del',
						}
					])
                );
                
                
        let catégorie = kategori
        let roleStaff = interaction.guild.roles.cache.get(yetkili)

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        if(interaction.customId === "sil"){
            if (interaction.values[0] == "del") {
                const channel = interaction.channel;
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '<:bluecross:932702832065392740> Sunucuda zaten açık bir biletiniz var.', ephemeral: true})
            if (interaction.values[0] == "yetkili") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const yetkili = new MessageEmbed()
                    .setTitle('Yetkili alım başvurusu yapmak için bilet')
                    .setDescription('Lütfen başvurunuzu detaylandırın, böylece bir sunucu moderatörü sorumluluğu üstlenecek.')
                    .setFooter('RevanCraft Ticket')	
                    .setColor("DARK_NAVY")			
                    c.send({embeds: [yetkili], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:mavitick:931993701834711150> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "satınalım") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const satınalım = new MessageEmbed()
                    .setTitle('Satın alım için bilet')
                    .setDescription('Lütfen satın alımı detaylandırın ki bir sunucu moderatörü gelip ilgilensin.')
                    .setFooter('RevanCraft Ticket')
                    .setColor("LIGHT_GREY")	
                    c.send({embeds: [satınalım], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:mavitick:931993701834711150> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ortalık") {
                interaction.guild.channels.create(`ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `${catégorie}`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('Genel için bilet')
                    .setDescription('Lütfen başvurunuzu detaylandırın, böylece bir sunucu moderatörü sorumluluğu üstlenecek.')
                    .setFooter('RevanCraft Ticket')
                    .setColor("BLURPLE")	
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `<:mavitick:931993701834711150> Biletiniz başarıyla açıldı. <#${c.id}>`, ephemeral: true})
                })
                
            
                
            
            }
        }
    }
}
