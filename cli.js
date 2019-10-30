/**
 * @license
 *
 * MIT License
 *
 * Copyright (c) 2019 Richie Bendall
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const parsePackages = require("./utils/parse-packages")
const { add, remove, search, info } = require(".")
const yargs = require("yargs")

yargs
    .command("add [name]", "add a typings package", (yargs) => {
        yargs
            .positional("name", {
                describe: "name of typings package",
            })
    }, (args) => {
        add(parsePackages(args))
    })
    .command("remove [name]", "remove a typings package", (yargs) => {
        yargs
            .positional("name", {
                describe: "name of typings package",
            })
    }, (args) => {
        remove(parsePackages(args))
    })
    .command("search [name]", "search for a typings package by name", (yargs) => {
        yargs
            .positional("name", {
                describe: "name of typings package",
            })
    }, (args) => {
        search(args.name)
    })
    .command("info [name] [part]", "retrieve package info", (yargs) => {
        yargs
            .positional("name", {
                describe: "name of typings package",
            })
            .positional("part", {
                describe: "the part of the information to display",
                default: "all",
            })
    }, (args) => {
        info(args.name, args.part)
    })
    .demandCommand()
    .argv
