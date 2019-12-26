const installedDeps = require("./installed-deps")

/**
* Get the currently installed types packages.
*/
module.exports = async function installedTypes() {
    const deps = await installedDeps("devDependencies")
    return deps.filter((value) => value.startsWith("@types/"))
}
