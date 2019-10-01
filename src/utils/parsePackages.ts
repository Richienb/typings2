/**
* Parse the command arguments into a string of packages to install for passing to package managers.
*/
export default function parsePackages({ name, _ }: { name: string, _: string[] }): string {
    return `@types/${[name, ..._.slice(1)].join(" @types/")}`
}
