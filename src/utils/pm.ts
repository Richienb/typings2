import getPm from "./getPm"
import execa from "execa"
import Promise from "bluebird"
const toBluebird = Promise.resolve

export function add(name: string) {
    console.log(`Adding ${name}...`)
    return toBluebird(getPm().then((pm: string) => execa(pm, [pm === "npm" ? "install" : "add", name, "-D"]).stdout.pipe(process.stdout)))
}

export function remove(name: string) {
    console.log(`Removing ${name}...`)
    return toBluebird(getPm().then((pm: string) => execa(pm, [pm === "npm" ? "uninstall" : "remove", name]).stdout.pipe(process.stdout)))
}
