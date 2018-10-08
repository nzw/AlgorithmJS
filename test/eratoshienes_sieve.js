'use strict';

/**
 * Test script
 * node test/eratosthenes_sieve.js 77
 * @run
 */
const EratosthenesSieve = require('../src/EratosthenesSieve');

let number = Number(process.argv[2]);
if (!number) return console.log('引数がありません');
console.log(number, 'までの素数');
let Sieve = new EratosthenesSieve(number);
console.log(Sieve.run());
