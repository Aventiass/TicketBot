module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} Giriş Yaptım`)

        var KARISIKDURUM = 1
        setInterval(async () => {
            status =  [`RevanCraft Destek Sistemi`, ``, ``]
            KARISIKDURUM = (KARISIKDURUM + 2) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[KARISIKDURUM]}`,
                    type: "PLAYING",
                  }],
                  status: "idle"})
        }, 5000);
    }
}
