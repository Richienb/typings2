const getPm = require("../utils/get-pm")
const execa = require("execa")

/**
* Install a package.
*/
exports.add = async function add(name) {
    const pm = await getPm()
    return execa(pm, [pm === "npm" ? "install" : "add", name, "-D"])
}

/**
* Uninstall a package.
*/
exports.remove = async function remove(name) {
    const pm = await getPm()
    return execa(pm, [pm === "npm" ? "uninstall" : "remove", name])
}
