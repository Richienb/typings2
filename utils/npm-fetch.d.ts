import { Options as RegistryOptions } from "npm-registry-fetch"

/**
* Fetch data from the NPM API.
*/
declare function npmFetch(url: string, opts?: RegistryOptions): Promise<object | Record<string, unknown>>

export = npmFetch
