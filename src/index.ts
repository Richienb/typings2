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

import parsePackages from "./utils/parsePackages"
import { add, remove } from "./utils/pm"
import search from "libnpmsearch"
import installedTypes from "./utils/installedTypes"
import chalk from "chalk"
import _ from "lodash"
import yaml from "js-yaml"
import dot from "dot-prop"
import npmFetch from "./utils/npmFetch"

require('yargs')
    .command('add [name]', 'add a typings package', (yargs) => {
        yargs
            .positional('name', {
                describe: 'name of typings package'
            })
    }, (args) => {
        add(parsePackages(args))
    })
    .command('remove [name]', 'remove a typings package', (yargs) => {
        yargs
            .positional('name', {
                describe: 'name of typings package'
            })
    }, (args) => {
        remove(parsePackages(args))
    })
    .command('search [name]', 'search for a typings package by name', (yargs) => {
        yargs
            .positional('name', {
                describe: 'name of typings package'
            })
    }, (args) => {
        installedTypes().then((installed: string[]) => search(`@types/${args.name}`, { limit: 5 })
            .then(res => res.forEach(({ name, description }, i) => {
                if (name.startsWith("@types/")) {
                    const toLog = `${name.slice("@types/".length)}: ${_.truncate(description, {
                        'length': 64
                    })}`
                    if (installed.includes(name)) console.log(chalk.grey(toLog))
                    else if (i === 0) console.log(chalk.blue(toLog))
                    else console.log(toLog)
                }
            }))
        )
    })
    .command('info [name] [part]', 'retreive package info', (yargs) => {
        yargs
            .positional('name', {
                describe: 'name of typings package'
            })
            .positional('part', {
                describe: 'the part of the information to display',
                default: 'all'
            })
    }, (args) => {
        npmFetch(`/@types/${args.name}`).then((data: object) => {
            if (args.part !== "all") data = dot.get(data, args.part)
            console.log(yaml.safeDump(data))
        })
    })
    .demandCommand()
    .argv
