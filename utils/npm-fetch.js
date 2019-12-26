const fetchNicePackage = require("fetch-nice-package")
const removeMarkdown = require("remove-markdown")

/**
* Fetch data from the NPM API.
*/
module.exports = async function npmFetch(name) {
    const data = await fetchNicePackage(name)
    return {
        ...data,
        readme: removeMarkdown(data.readme),
    }
}
