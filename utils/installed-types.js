const fs = require("fs-extra")
const Promise = require("bluebird")
const _ = require("lodash")
const path = require("path")

/**
* Get the currently installed types packages.
*/
module.exports = function installedTypes() {
    return new Promise((resolve) => {
        fs.readJSON(path.join(process.cwd(), "package.json"))
            .then(({ devDependencies }) => {
                if (devDependencies == null) return resolve([])
                else return resolve(_.keys(_.pickBy(devDependencies, (_value, key) => key.startsWith("@types/"))))
            }).catch(() => resolve([]))
    })
}
