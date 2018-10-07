'use strict';

/**
 * Select Search
 * node src/SelectSort.js 2,3,4,5,9,1
 */

//export default class SelectSort {
//module.exports = class SelectSort {
class SelectSort {
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
let arr = process.argv[2].split(',');
if (!arr) return console.log('引数がありません');
console.log(arr, 'を昇順にします');
let list = new SelectSort(arr);
console.log(list.bsort(), 'を昇順に並べ替えました');
console.log('交換回数は ', list.hitCount(), ' 回です');
