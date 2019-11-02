import Promise from "bluebird"

interface SearchResults {
    [key: string]: "installed" | "recommended" | "relevant" | "other"
}

/**
* Search for a package.
*/
declare function search(name: string): Promise<SearchResults>

export = search
