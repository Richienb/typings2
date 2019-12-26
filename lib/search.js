const installedTypes = require("../utils/installed-types")
const installedDeps = require("../utils/installed-deps")
const searchNPM = require("libnpmsearch")
const { fromTyping } = require("convert-typing-name")
const _ = require("lodash")

/**
* Search for a package.
*/
module.exports = async function search(name) {
    const [types, deps, res] = await Promise.all([
        installedTypes(),
        installedDeps(),
        searchNPM(`@types/${name}`, { limit: 5 }),
    ])

    return _.compact(res.map(({ name, description }, i) => {
        if (name.startsWith("@types")) {
            const withoutTypesPrefix = fromTyping(name)

            let status = "other"
            if (types.includes(name)) status = "installed"
            else if (deps.includes(withoutTypesPrefix)) status = "recommended"
            else if (i === 0) status = "relevant"

            return {
                name,
                description: _.truncate(description, {
                    length: 64,
                }),
                status,
            }
        }
    }))
}
