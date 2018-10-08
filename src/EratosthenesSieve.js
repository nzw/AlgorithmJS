'use strict';

/**
 * エラトステネスふるい
 * ある自然数nまでの素数をすべて求めるための方法
 */

//export default class EratosthenesSieve {
module.exports = class EratosthenesSieve {
	constructor(number) {
		let data = [];
		for (let i = 0; i < number + 1; i++) {
			data[i] = 1;
		}
		// 0 と 1 は除外
		data[0] = 0;
		data[1] = 1;
		this.data   = data;
		this.number = number;
	}
	run() {
		let result = [];
		let m = 2, n = 0;
		let data = this.data;
		let number = this.number;
		while (1) {
			// 素数の倍数をリストから削除
			for (let i = 2 * m; i < number + 1; i+=m) {
				data[i] = 0;
			}
			result[n++] = m;
			// 次の素数の候補を探す
			while (1) {
				m++;
				if (data[m]) break;
				if (m > number + 1) break;
			}
			if (m >= number + 1) break;
		}
		return result;
	}
}
