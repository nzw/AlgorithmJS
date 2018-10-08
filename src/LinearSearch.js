'use strict';

/**
 * Linear Search(線型探索)
 * リストや配列に入ったデータに対する検索を行うにあたって、 先頭から順に比較を行うアルゴリズム
 */

//export default class LinearSearch {
module.exports = class LinearSearch {
	constructor(array, num) {
		this.array = array;
		this.num = num;
		this.hit_count = 0;
	}
	find() {
		let array = this.array;
		let num   = this.num;
		let hit_count = 0;
		for (let i = 0; i < array.length; i++) {
			let val = parseInt(array[i]) || array[i];
			console.log(val);
			this.hit_count = i + 1;
			if (val === num) return true;
		}
		return false;
	}
	hitCount() {
		return this.hit_count;
	}
}
