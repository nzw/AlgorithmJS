'use strict';

/**
 * FIFO(First In, First Out) データ構造
 * not use Array.prototype.unshift() & Array.prototype.shift
 */

//export default class Queue {
module.exports = class Queue {
	constructor(array) {
		this.array = Array.isArray(array) ? array : [];
		return this;
	}
	list() {
		return this.array;
	}
	unshift2(data) {
		let len = this.array.length + 1;
		let new_array = [];
		for (let i = 0; i < len; i++) {
			if (i == 0) {
				new_array[i] = data;
			}
			else {
				let val = this.array[i - 1];
				new_array[i] = val;
			}
		}
		this.array = new_array;
		return this.array;
	}
	shift2() {
		let len  = this.array.length- 1;
		let data = this.array[0];
		delete this.array[0];
		let new_array = [];
		for (let i = 0; i < len; i++) {
			new_array[i] = this.array[i + 1];
		}
		this.array = new_array;
		return data;
	}
}
