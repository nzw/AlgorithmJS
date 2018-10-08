'use strict';

/**
 * Merge Sort
 * 既に整列してある複数個の列を1個の列にマージする際に、小さいものから先に新しい列に並べれば、
 * 新しい列も整列されている、というボトムアップの分割統治法
 */

module.exports = class MergeSort {
	constructor(length, type) {
		this.length = length;
		this.type   = this.mod(type) || 0;
	}
	run(array, start, end) {
		let tmp = [];
		if (start >= end) {
			return;
		}
		//  startとendの中間地点を分割点とする
		let pivot = this.mod((start + end) / 2);
		//  前半部分を再帰的に整列
		this.run(array, start, pivot);
		//  後半部分を再帰的に整列
		this.run(array, pivot + 1, end);
		let cnt = 0;
		//  仮想領域のデータをマージしながらコピーする。
		for (let i = start; i <= pivot; i++) {
			tmp[cnt] = array[i];
			cnt++;
		}
		for (let j = end; j >= pivot + 1; j--) {
			tmp[cnt] = array[j];
			cnt++;
		}
		// 末端からデータを取得して、マージしていく。
		let a = 0;
		let b = end - start;
		for (let i = start; i <= end ; i++) {
			if ((this.type && this._basort(tmp[a], tmp[b])) || (!this.type && this._absort(tmp[a], tmp[b]))) {
				array[i] = tmp[a];
				a++;
			} else {
				array[i] = tmp[b];
				b--;
			}
		}
		return array;
	}
	_basort(a, b) {
		return this.mod(a) >= this.mod(b);
	}
	_absort(a, b) {
		return this.mod(a) < this.mod(b);
	}
	mod(data) {
		if (!data) return 0;
		return Math.floor(data);
	}
}
