/* globals gauge*/
"use strict";

const _ = require('lodash')
const assert = require("assert");
const solution = require('../submission/solution')

step("generate fibonacci number <table>", async (table) => {

    _.forEach(table.rows, async (row) => {
        console.log(row.cells)
        const Sequence = row.cells[0]
        const Value = row.cells[1]
        console.log(`testing: generate fibonacci number <${Sequence}> for <${Value}>`)
        assert.equal(await solution.calculateFibonacci(Sequence), Value)
    })
    
    console.log('done')
});

step("validate fibonacci number <table>", async (table) => {
    
    _.forEach(table.rows, async (row) => {
        const Number = row.cells[0]
        const isValid = (row.cells[1].toLowerCase() == 'true' ? true : false)
        console.log(`testing: generate fibonacci number <${Number}> for <${isValid}>`)
        assert.equal(await solution.isFibonacci(Number), isValid);
    })
    console.log('done')
});
