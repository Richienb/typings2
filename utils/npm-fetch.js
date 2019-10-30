const { json: registry } = require("npm-registry-fetch")
const removeUnderscored = require("./remove-underscored")
const _ = require("lodash")
const cacheDir = require("find-pkg-cache")

/**
* Fetch data from the NPM API.
*/
module.exports = function npmFetch(url, opts) {
    return registry(url, { cache: cacheDir, ...opts }).then((data) => Promise.resolve(_.pickBy(removeUnderscored(data))))
}
