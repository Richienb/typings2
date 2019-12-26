import yargs from "yargs"

/**
* Parse the command arguments into a string of packages to install for passing to package managers.
*/
declare function parsePackages({ name, _: otherArgs }: yargs.Arguments): string[]

export = parsePackages
