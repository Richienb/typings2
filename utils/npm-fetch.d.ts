/**
* Fetch data from the NPM API.
*/
declare function npmFetch(name: string): Promise<object>

export = npmFetch
