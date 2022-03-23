const getFlagValue = require("./flags")

console.log(`${getFlagValue("--name")}, ${getFlagValue("--greeting")}`)