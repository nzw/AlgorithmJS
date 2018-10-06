'use strict';

/**
 * Binary Search
 * node src/BinarySearch.js 3,4,9,0,99,2,3,1 1
 */

//export default class BinarySearch {
//module.exports = class BinarySearch {
class BinarySearch {
	constructor(array, num) {
		this.array = array;
		this.num = num;
	}
	find() {
		let array = this.array;
		let num   = this.num;
		let pivot = 0;
		let hit_count = 0;
		array.sort((a, b) => {
			return (a < b ? -1 : 1);
		});
		for (let i = 0, max = array.length; i < max; i++) {
			pivot = parseInt(array[parseInt((pivot || array.length) / 2)]);
			this.hit_count = i;
			if (num === pivot) return true;
		}
		return false;
	}
	hitCount() {
		return this.hit_count;
	}
}
let arg1 = process.argv[2].split(',');
let arg2 = Number(process.argv[3]);
if (!arg1 && !arg2) return console.log('引数がありません');
console.log(arg1 + 'から' + arg2,'が存在するか探します');
let result = new BinarySearch(arg1, arg2);
console.log(arg2 + ' は' + (result.find() ? '見付かりました。' : '見付かりませんでした'));
console.log('検索回数は ' + result.hitCount() + ' 回です');
