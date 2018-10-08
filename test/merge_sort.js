'use strict';

/**
 * Test script
 * node test/merge_sort.js 2,13,19,7,1,18,16,15
 * @run
 */
const MergeSort = require('../src/MergeSort');

let arr  = process.argv[2].split(',');
let type = Number(process.argv[3]);
if (!arr) return console.log('引数がありません');
console.log(arr + ' を昇順にします');
let len  = Number(arr.length);
let list = new MergeSort(len, type);
if (type) {
	console.log('[' + list.run(arr, 0, Number(arr.length - 1)) + '] を降順に並べ替えました');
} else {
	console.log('[' + list.run(arr, 0, Number(arr.length - 1)) + '] を昇順に並べ替えました');
}
