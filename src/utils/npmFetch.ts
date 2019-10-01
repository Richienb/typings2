import { json, Options } from "npm-registry-fetch"
import removeUnderscored from "./removeUnderscored"
import _ from "lodash"
import cacheDir from "./cacheDir"

export default function npmFetch(url: string, opts?: Options): Promise<Record<string, unknown>> {
    return json(url, { cache: cacheDir, ...opts }).then((data: object) => Promise.resolve(_.pickBy(removeUnderscored(data))))
}
