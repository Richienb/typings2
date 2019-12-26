/**
* Parse the command arguments into a string of packages to install for passing to package managers.
*/
module.exports = function parsePackages({ name, _: otherArgs }) {
    return `@types/${[name, ...otherArgs.slice(1)].join(" @types/")}`.split(" ")
}
