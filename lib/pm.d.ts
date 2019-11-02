import Promise from "bluebird"

/**
* Install a package.
*/
export function add(name: string): Promise<NodeJS.WriteStream>

/**
* Uninstall a package.
*/
export function remove(name: string): Promise<NodeJS.WriteStream>
