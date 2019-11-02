const npmFetch = require("../utils/npm-fetch")
const dot = require("dot-prop")
const _ = require("lodash")

/**
* Display the information about a package.
*/
module.exports = function info(name, part) {
    return npmFetch(`/@types/${name}`).then((data) => {
        if (_.isString(part) && part !== "all") data = dot.get(data, part)
        return data
    })
}
