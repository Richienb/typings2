const installedTypes = require("../utils/installed-types")
const installedDeps = require("../utils/installed-deps")
const searchNPM = require("libnpmsearch")
const Promise = require("bluebird")
const { fromTyping } = require("convert-typing-name")
const _ = require("lodash")

/**
* Search for a package.
*/
module.exports = function search(name) {
    return Promise.all([installedTypes(), installedDeps(), searchNPM(`@types/${name}`, { limit: 5 })])
        .then(([types, deps, res]) => _.compact(_.map(res, ({ name, description }, i) => {
            if (_.startsWith(name, "@types")) {
                const withoutTypesPrefix = fromTyping(name)

                let status = "other"
                if (_.includes(types, name)) status = "installed"
                else if (_.includes(deps, withoutTypesPrefix)) status = "recommended"
                else if (i === 0) status = "relevant"

                return {
                    name,
                    description: _.truncate(description, {
                        length: 64,
                    }),
                    status,
                }
            }
        })))
}

