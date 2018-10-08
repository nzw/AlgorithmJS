'use strict';

/**
 * Test script
 * node test/select_sort.js 2,3,4,5,9,1
 * @bsort
 * @hitCount
 */

const SelectSort = require('../src/SelectSort');

let arr = process.argv[2].split(',');
if (!arr) return console.log('引数がありません');
console.log(arr, 'を昇順にします');
let list = new SelectSort(arr);
console.log(list.bsort(), 'を昇順に並べ替えました');
console.log('交換回数は ', list.hitCount(), ' 回です');
