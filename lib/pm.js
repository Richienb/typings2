const getPm = require("../utils/get-pm")
const execa = require("execa")
const toBluebird = require("to-bluebird")

/**
* Install a package.
*/
exports.add = function add(name) {
    console.log(`Adding ${name}...`)
    return toBluebird(getPm().then((pm) => execa(pm, [pm === "npm" ? "install" : "add", name, "-D"]).stdout.pipe(process.stdout)))
}

/**
* Uninstall a package.
*/
exports.remove = function remove(name) {
    console.log(`Removing ${name}...`)
    return toBluebird(getPm().then((pm) => execa(pm, [pm === "npm" ? "uninstall" : "remove", name]).stdout.pipe(process.stdout)))
}
