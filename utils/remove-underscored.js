const _ = require("lodash")

/**
* Remove keys beginning with `_` from the provided object.
*/
module.exports = function removeUnderscored(obj) {
    if (_.isArray(obj)) return _.map(obj, removeUnderscored)
    else if (_.isPlainObject(obj)) return _.mapValues(_.pickBy(obj, (_value, key) => !key.startsWith("_")), removeUnderscored)
    return obj
}
