const _ = require("lodash")

/**
* Parse the command arguments into a string of packages to install for passing to package managers.
*/
module.exports = function parsePackages({ name, _: otherArgs }) {
    return `@types/${[name, ..._.slice(otherArgs, 1)].join(" @types/")}`
}
