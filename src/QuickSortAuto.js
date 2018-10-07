'use strict';
/**
 * 第一引数(必須): ソートしたい配列をカンマ区切りで渡す
 * node src/QuickSortAuto.js 1,2,9,8,3,7
 */

class QuickSort {
	constructor(data_max_num) {
		let list = new Array(data_max_num);
		for (let i = 0; i < data_max_num; i++) {
			list[i] = Math.ceil(Math.random()*data_max_num);
		}
		console.log('ソート前 =>', list);
		this._sort(0, data_max_num - 1, list);
		console.log('結果 => ', list);
	}
	_sort(bottom, top, data) {
		let lower = bottom, upper = top;
		if (bottom >= top) {
			return;
		}
		let tmp = 0;
		let center = data[bottom];
		while (lower < upper) {
			while (lower <= upper && data[lower] <= center) {
				lower++;
			}
			while (lower <= upper && data[upper] > center) {
				upper--;
			}
			if (lower < upper) {
				tmp = data[lower];
				data[lower] = data[upper];
				data[upper] = tmp;
			}
		}
		tmp = data[bottom];
		data[bottom] = data[upper];
		data[upper] = tmp;

		this._sort(bottom, upper - 1, data);
		this._sort(upper + 1, top, data);
	}
}
let data_max = process.argv[2];
if (!data_max) return console.log('引数がありません');
new QuickSort(data_max);
