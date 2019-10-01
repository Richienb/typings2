import whichpm from 'which-pm'
import Promise from "bluebird"

export default function getPm() {
    return new Promise((resolve, reject) => {
        whichpm(process.cwd())
            .then(({ name }) => resolve(name))
            .catch(reject)
    })
}
