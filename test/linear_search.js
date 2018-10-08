'use strict';

/**
 * Test script
 * node src/LinearSearch.js 3,4,9,0,99,2,3,1 1
 * @find
 * @hitCount
 */
const LinearSearch = require('../src/LinearSearch');

let arg1 = process.argv[2].split(',');
let arg2 = Number(process.argv[3]) || process.argv[3].toString();
if (!arg1 && !arg2) return console.log('引数がありません');
console.log('[' + arg1 + '] から' + arg2,'が存在するか探します');
let result = new LinearSearch(arg1, arg2);
console.log(arg2 + ' は' + (result.find() ? '見付かりました。' : '見付かりませんでした'));
console.log('検索回数は ' + result.hitCount() + ' 回です');
