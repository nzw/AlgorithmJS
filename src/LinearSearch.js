'use strict';

/**
 * Linear Search
 * node src/LinearSearch.js 3,4,9,0,99,2,3,1 1
 */

//export default class LinearSearch {
//module.exports = class LinearSearch {
class LinearSearch {
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
let arg1 = process.argv[2].split(',');
let arg2 = Number(process.argv[3]) || process.argv[3].toString();
if (!arg1 && !arg2) return console.log('引数がありません');
console.log('[' + arg1 + '] から' + arg2,'が存在するか探します');
let result = new LinearSearch(arg1, arg2);
console.log(arg2 + ' は' + (result.find() ? '見付かりました。' : '見付かりませんでした'));
console.log('検索回数は ' + result.hitCount() + ' 回です');
