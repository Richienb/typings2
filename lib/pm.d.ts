import Bluebird from "bluebird"

/**
* Install a package.
*/
export function add(name: string): Bluebird<NodeJS.WriteStream>

/**
* Uninstall a package.
*/
export function remove(name: string): Bluebird<NodeJS.WriteStream>
