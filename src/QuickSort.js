'use strict';
/**
 * 第一引数(必須): ソートしたい配列をカンマ区切りで渡す
 * node src/QuickSort.js 1,2,9,8,3,7
 */ 
class QuickSort {
	constructor(sort_data, start, end) {
		console.log('ソート開始 => ', sort_data);
		this._sort(sort_data, start, end);
		console.log('ソート完了 => ', sort_data);
	}
	_sort(data_arr, start, end) {
		if (start >= end) return;
		let i     = start;
		let j     = end;
		let pivot = parseInt(data_arr[ parseInt((start + end) / 2) ]);

		while ( 1 ) {
			while ( data_arr[i] < pivot ) { ++i; }; // 枢軸以上の値が見つかるまで右方向へ進めていく
			while ( data_arr[j] > pivot ) { --j; }; // 枢軸以下の値が見つかるまで左方向へ進めていく
			if (i >= j) break; // 軸が見つかったらソート終了

			 // 入れ替え
			let tmp = data_arr[i];
			data_arr[i] = data_arr[j];
			data_arr[j] = tmp;
			i++;
			j--;
		}
		// 軸の左側をソート
		if (start < i - 1) {
			this._sort(data_arr, start, i - 1);
		}
		// 軸の右側をソート
		if (end > j + 1) {
			this._sort(data_arr, j + 1, end);
		}
	}
}

/**
 * @arg[0]：nodeのpath
 * @arg[1]：file name
 * @arg[2]以降：コマンドから渡される引数
 */
let sort_data = process.argv[2].split(',');
if (!sort_data) return console.log('引数がありません');
let data_len  = parseInt(sort_data.length - 1);
new QuickSort(sort_data, parseInt(0), data_len);
