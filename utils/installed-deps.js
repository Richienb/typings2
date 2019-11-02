const Promise = require("bluebird")
const _ = require("lodash")
const pkgConf = require("pkg-conf")

/**
* Get the currently installed dependencies.
*/
module.exports = function installedDeps(type = "dependencies") {
    return new Promise((resolve) => pkgConf(type)
        .then((deps) => {
            if (deps == null) return resolve([])
            else return resolve(_.keys(deps))
        })
        .catch(() => resolve([])))
}
