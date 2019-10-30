import Promise from "bluebird"

/**
* Get the currently installed types packages.
*/
declare function installedTypes(): Promise<string[]>

export = installedTypes
