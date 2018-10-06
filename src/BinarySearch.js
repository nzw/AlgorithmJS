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
		let array  = this.array;
		let num    = this.num;
		let max    = array.length - 1;
		let min    = 0;
		let center = parseInt(max / 2);
		let pivot  = 0;
		let next_center = 0;
		let hit_count   = 0;
		let i = 0;
		array.sort((a, b) => {
			let _a = Number(a) || a;
			let _b = Number(b) || b;
			return ( _a < _b ? -1 : 1);
		});
		while (i < array.length) {
			center = next_center || center;
			if (max === 1) center = 0;
			pivot  = parseInt(array[center]) || array[center];
			this.hit_count = ++i;
			if (pivot === num) {
				return true;
			}
			if (pivot > num) {
				next_center = Math.round((center - min) / 2);
				max = center;
			} else {
				next_center = Math.round((max - center) / 2) + center;
				min = center;
			}
		}
		return false;
	}
	hitCount() {
		return this.hit_count;
	}
}
let arg1 = process.argv[2].split(',');
let arg2 = Number(process.argv[3]) || process.argv[3].toString();
if (!arg1 && !arg2) return console.log('引数がありません');
console.log('[' + arg1 + '] から' + arg2,'が存在するか探します');
let result = new BinarySearch(arg1, arg2);
console.log(arg2 + ' は' + (result.find() ? '見付かりました。' : '見付かりませんでした'));
console.log('検索回数は ' + result.hitCount() + ' 回です');
