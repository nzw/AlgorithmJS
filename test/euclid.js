'use strict';

/**
 * Test script
 * node test/euclid.js 77 22
 * @run
 */

const Euclid = require('../src/Euclid');

let arg1 = Number(process.argv[2]);
let arg2 = Number(process.argv[3]);
if (!arg1 && !arg2) return console.log('引数がありません');
console.log(arg1 + 'と' + arg2,'の最大公約数');
let result = new Euclid(arg1, arg2);
console.log('最大公約数は', result.run());
