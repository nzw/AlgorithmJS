'use strict';

/**
 * Test script
 * @list
 * @unshift2
 * @shift2
 */

//import Queue from '../src/queue';
const Queue = require('../src/queue');

const arr = new Queue();
console.log('arr.list() => ', arr.list());
console.log('arr.unshift2(9) => ', arr.unshift2(9));
console.log('arr.unshift2(7) => ', arr.unshift2(7));
console.log('arr.unshift2(12) => ', arr.unshift2(12));
console.log('arr.unshift2(22) => ', arr.unshift2(22));
console.log('arr.list() => ', arr.list());
console.log('arr.shift2() => ', arr.shift2());
console.log('arr.list() => ', arr.list());
