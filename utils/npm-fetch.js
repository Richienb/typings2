const fetchNicePackage = require("fetch-nice-package")
const removeMarkdown = require("remove-markdown")
const toBluebird = require("to-bluebird")

/**
* Fetch data from the NPM API.
*/
module.exports = function npmFetch(name) {
    return toBluebird(fetchNicePackage(name).then((data) => ({
        ...data,
        readme: removeMarkdown(data.readme),
    })))
}
