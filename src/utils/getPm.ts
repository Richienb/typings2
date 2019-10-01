import whichpm from "which-pm"
import Promise from "bluebird"

/**
* Get the current package manager name.
*/
export default function getPm(): Promise<whichpm.Result["name"]> {
    return new Promise((resolve, reject): void => {
        whichpm(process.cwd())
            .then(({ name }) => resolve(name))
            .catch(reject)
    })
}
