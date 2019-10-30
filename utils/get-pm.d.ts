import whichpm from "which-pm"
import Promise from "bluebird"

/**
* Get the current package manager name.
*/
declare function getPm(): Promise<whichpm.Result["name"]>

export = getPm
