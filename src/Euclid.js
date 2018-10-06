'use strict';

/**
 * ユークリッドの互除法
 * M と N の最大公約数を求める
 * node src/Euclid.js 77 22
 */

//export default class Euclid {
//module.exports = class Euclid {
class Euclid {
	constructor(arg1, arg2) {
		this.arg1 = arg1;
		this.arg2 = arg2;
	}
	run() {
		let m = this.arg1;
		let n = this.arg2;
		if (m > n) {
			let tmp = m;
			m = n;
			n = tmp;
		}
		while (1) {
			let d = m % n;
			m = n;
			n = d;
			if (!d) break;
		}
		return m;
	}
}
let arg1 = Number(process.argv[2]);
let arg2 = Number(process.argv[3]);
if (!arg1 && !arg2) return console.log('引数がありません');
console.log(arg1 + 'と' + arg2,'の最大公約数');
let result = new Euclid(arg1, arg2);
console.log('最大公約数は', result.run());
