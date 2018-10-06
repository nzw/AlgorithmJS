'use strict';

/**
 * Bubble Sort
 * node src/BubbleSort.js 2,3,4,5,9,1
 */

//export default class BubbleSort {
//module.exports = class BubbleSort {
class BubbleSort {
	constructor(array) {
		this.array = array;
		this.hit_count = 0;
	}
	bsort() {
		let array = this.array;
		let len = array.length;
		for (let i = 0; i < len; i++) {
			for (let j = i; j < len; j++) {
				let val_i = parseInt(array[i]) || array[i];
				let val_j = parseInt(array[j]) || array[j];
				this.hit_count = i + j + 1;
				if (val_i > val_j) {
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
}
let arr = process.argv[2].split(',');
if (!arr) return console.log('引数がありません');
console.log(arr + ' を昇順にします');
let list = new BubbleSort(arr);
console.log('[' + list.bsort() + '] を昇順に並べ替えました');
console.log('交換回数は ' + list.hitCount() + ' 回です');
