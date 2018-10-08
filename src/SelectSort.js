'use strict';

/**
 * Select Search
 * 配列された要素から、最大値やまたは最小値を探索し配列最後の要素と入れ替えをおこなうアルゴリズム
 */

module.exports = class SelectSort {
	constructor(array) {
		this.array = array;
		this.hit_count = 0;
	}
	bsort() {
		let array = this.array;
		let len = array.length;
		for (let i = 0; i < len; i++) {
			let val_base    = array[i];
			let tmp_val_j   = val_base;
			let tmp_count_j = 0;
			for (let j = i; j < len; j++) {
				let val_j =  array[j];
				if (val_j < (this.mod(val_base) && this.mod(tmp_val_j))) {
					tmp_count_j = j;
					tmp_val_j   = val_j;
				}
			}
			if (tmp_count_j) {
				array[i] = tmp_val_j;
				array[tmp_count_j] = val_base;
				this.hit_count     = i + 1;
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
