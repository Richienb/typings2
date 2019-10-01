import fs from "fs-extra"
import { PackageJson } from "type-fest"
import Promise from "bluebird"
import * as path from "path"

/**
* Get the currently installed types packages.
*/
export default function installedTypes(): Promise<string[]> {
    return new Promise((resolve): void => {
        fs.readJSON(path.join(process.cwd(), "package.json"))
            .then(({ devDependencies }: PackageJson) => {
                if (devDependencies == null) resolve([])
                else resolve(Object.keys(devDependencies).filter((val: string) => val.startsWith("@types/")))
            }).catch(() => resolve([]))
    })
}
