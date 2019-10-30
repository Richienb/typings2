const npmFetch = require("../utils/npm-fetch")
const yaml = require("js-yaml")
const dot = require("dot-prop")
const _ = require("lodash")

/**
* Display the information about a package.
*/
module.exports = function info(name, part) {
    npmFetch(`/@types/${name}`).then((data) => {
        if (_.isString(part) && part !== "all") data = dot.get(data, part)
        console.log(yaml.safeDump(data))
    })
}
