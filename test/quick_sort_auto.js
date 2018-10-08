'use strict';

/**
 * Test script
 * node test/quick_sort_auto.js 100
 */
const QuickSortAuto = require('../src/QuickSortAuto');

let data_max = process.argv[2];
if (!data_max) return console.log('引数がありません');
new QuickSortAuto(data_max);
