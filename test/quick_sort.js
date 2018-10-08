'use strict';

/**
 * Test script
 * node src/QuickSort.js 100, 3.2,19,334,11,0,9
 */
/**
 * @arg[0]：nodeのpath
 * @arg[1]：file name
 * @arg[2]以降：コマンドから渡される引数
 */
let sort_data = process.argv[2].split(',');
if (!sort_data) return console.log('引数がありません');
let data_len  = parseInt(sort_data.length - 1);
new QuickSort(sort_data, parseInt(0), data_len);
