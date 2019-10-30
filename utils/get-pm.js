const whichpm = require("which-pm")
const Promise = require("bluebird")
const toBluebird = require("to-bluebird")

/**
* Get the current package manager name.
*/
module.exports = function getPm() {
    return toBluebird(whichpm(process.cwd())
        .then(({ name }) => name))
}
