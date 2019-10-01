import { json, Options } from "npm-registry-fetch"
import removeUnderscored from "./removeUnderscored"
import _ from "lodash"
import cacheDir from "./cacheDir"

/**
* Fetch data from the NPM API.
*/
export default function npmFetch(url: string, opts?: Options): Promise<object | Record<string, unknown>> {
    return json(url, { cache: cacheDir, ...opts }).then((data: object) => Promise.resolve(_.pickBy(removeUnderscored(data))))
}
