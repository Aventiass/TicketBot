const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket-kurulum',
    usage: 'Şablon',
    category: "mod",
    description: ``,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: '🤝 | Genel',
							description: 'Bir ortaklık bileti açın.',
							value: 'ortalık',
						},
						{
							label: '💲 | Satın Alım',
							description: 'Satın alım bileti aç ',
							value: 'satınalım',
						},
                        {
							label: '👥 | Yetkili Alım',
							description: 'Yetkili alım başvurusunda bulunmak için bir bilet açın',
							value: 'yetkili',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: 'Bilet Açın',
                description: '**__Bir Bilet Nasıl Açılır :__**\nLütfen açmak istediğiniz bilet türünü seçin.',
                color: "BLURPLE",
                footer: {text: 'Revan Ticket'}
            }],
            components: [row]
        })
    }
}
