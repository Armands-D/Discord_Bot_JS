const fs = require('fs')
let stats = require("../variables/stats.json");

module.exports.run = async(bot, msg, args) => {
    console.log("Start spam")
    stats = false
    fs.writeFile("./variables/stats.json", JSON.stringify(stats), (err) => {
        if (err) console.log(err)
    })
    user = msg.mentions.users.first()
    if (user) {
        victim = "<@" + msg.guild.member(user).id + ">"

        try {

            var interval = setInterval(timerfunction, 5000);

            function timerfunction() {
                stats = require("../variables/stats.json")
                if (stats == true) {
                    console.log("spam stopped")
                    clearInterval(interval)
                } else {
                    for (x = 0; x < 5; x++) {
                        msg.channel.send("Wake up " + victim)
                    }
                }
            }

        } catch (e) {
            console.log(e.stack);

        }
    }
}