'use strict';

/**
 * Bubble Sort
 * 隣り合う要素の大小を比較しながら整列させるアルゴリズム
 */

//export default class BubbleSort {
module.exports = class BubbleSort {
	constructor(array) {
		this.array = array;
		this.hit_count = 0;
	}
	bsort() {
		let array = this.array;
		let len = array.length;
		for (let i = 0; i < len; i++) {
			for (let j = i; j < len; j++) {
				let val_i = array[i];
				let val_j = array[j];
				this.hit_count = i + j + 1;
				if (this.mod(val_i) > this.mod(val_j)) {
					array[i] = val_j;
					array[j] = val_i;
				}
			}
		}
		return array;
	}
	hitCount() {
		return this.hit_count;
	}
	mod(data) {
		return Number(data) || data.trim();
	}
}
