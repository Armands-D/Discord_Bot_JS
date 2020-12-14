const fs = require('fs')
let stats = require("../variables/stats.json");

module.exports.run = async(bot, msg, args) => {
    stats = true
    fs.writeFile("./variables/stats.json", JSON.stringify(stats), (err) => {
        if (err) console.log(err)
    })

}