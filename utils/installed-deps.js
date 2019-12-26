const pkgConf = require("pkg-conf")

/**
* Get the currently installed dependencies.
*/
module.exports = async function installedDeps(type = "dependencies") {
    try {
        const deps = pkgConf(type)
        if (deps == null) return []
        return Object.keys(deps)
    } catch (err) {
        return []
    }
}
