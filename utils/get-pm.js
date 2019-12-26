const whichpm = require("which-pm")

/**
* Get the current package manager name.
*/
module.exports = async function getPm() {
    const { name } = await whichpm(process.cwd())
    return name
}
