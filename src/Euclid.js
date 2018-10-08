'use strict';

/**
 * ユークリッドの互除法
 * M と N の最大公約数を求める
 */

//export default class Euclid {
module.exports = class Euclid {
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
