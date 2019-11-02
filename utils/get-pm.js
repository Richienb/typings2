const whichpm = require("which-pm")
const toBluebird = require("to-bluebird")

/**
* Get the current package manager name.
*/
module.exports = function getPm() {
    return toBluebird(whichpm(process.cwd())
        .then(({ name }) => name))
}
