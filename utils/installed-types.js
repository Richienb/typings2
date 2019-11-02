const installedDeps = require("./installed-deps")
const _ = require("lodash")

/**
* Get the currently installed types packages.
*/
module.exports = function installedTypes() {
    return installedDeps("devDependencies").then((res) => _.filter(res, (val) => val.startsWith("@types/")))
}
