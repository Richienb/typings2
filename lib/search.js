const installedTypes = require("../utils/installed-types")
const searchNPM = require("libnpmsearch")
const _ = require("lodash")
const chalk = require("chalk")
const Promise = require("bluebird")

/**
* Search for a package.
*/
module.exports = function search(name) {
    Promise.all([installedTypes(), searchNPM(`@types/${name}`, { limit: 5 })])
        .then(([installed, res]) => _.forEach(res, ({ name, description }, i) => {
            if (_.startsWith(name, "@types/")) {
                const toLog = `${name.slice(_.size("@types/"))}: ${_.truncate(description, {
                    length: 64,
                })}`
                if (_.includes(installed, name)) console.log(chalk.grey(toLog))
                else if (i === 0) console.log(chalk.blue(toLog))
                else console.log(toLog)
            }
        }))
}
