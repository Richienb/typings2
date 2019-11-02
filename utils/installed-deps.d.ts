import Promise from "bluebird"

/**
* Get the currently installed dependencies.
*/
declare function installedDeps(type: "dependencies" | "devDependencies"): Promise<string[]>

export = installedDeps
