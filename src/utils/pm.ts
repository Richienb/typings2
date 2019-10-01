import getPm from "./getPm"
import execa from "execa"
import Bluebird from "bluebird"
const toBluebird = Bluebird.resolve

/**
* Install a package.
*/
export function add(name: string): Bluebird<NodeJS.WriteStream> {
    console.log(`Adding ${name}...`)
    return toBluebird(getPm().then((pm: string) => execa(pm, [pm === "npm" ? "install" : "add", name, "-D"]).stdout.pipe(process.stdout)))
}

/**
* Uninstall a package.
*/
export function remove(name: string): Bluebird<NodeJS.WriteStream> {
    console.log(`Removing ${name}...`)
    return toBluebird(getPm().then((pm: string) => execa(pm, [pm === "npm" ? "uninstall" : "remove", name]).stdout.pipe(process.stdout)))
}
