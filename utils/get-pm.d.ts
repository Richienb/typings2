import whichpm from "which-pm"

/**
* Get the current package manager name.
*/
declare function getPm(): Promise<whichpm.Result["name"]>

export = getPm
