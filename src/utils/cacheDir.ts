import findCacheDir from "find-cache-dir"

/**
* The cache directory.
*/
const cacheDir = findCacheDir({ name: "typings2" })

export default cacheDir
