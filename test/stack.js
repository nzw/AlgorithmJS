'use strict';

/**
 * Test script
 * @list
 * @push2
 * @pop2
 */

//import Stack from '../src/Stack';
const Stack = require('../src/Stack');

const arr = new Stack();

console.log('arr.list() => ', arr.list());
console.log('arr.push2(9) => ', arr.push2(9));
console.log('arr.push2(7) => ', arr.push2(7));
console.log('arr.push2(12) => ', arr.push2(12));
console.log('arr.push2(22) => ', arr.push2(22));
console.log('arr.list() => ', arr.list());
console.log('arr.pop2() => ', arr.pop2());
console.log('arr.list() => ', arr.list());
