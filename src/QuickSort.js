'use strict';
/**
 * Quick Sort Auto
 * リストにおいてピボットと呼ぶ要素を軸に分割を繰り返して整列を行うアルゴリズム
 */
module.exports = class QuickSort {
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
