const npmFetch = require("../utils/npm-fetch")
const dot = require("dot-prop")
const is = require("@sindresorhus/is")

/**
* Display the information about a package.
*/
module.exports = async function info(name, part) {
    const data = await npmFetch(`/@types/${name}`)
    if (is.string(part) && part !== "all") return dot.get(data, part)
    return data
}
