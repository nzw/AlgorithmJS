'use strict';

/**
 * LIFO(Last In, First Out) データ構造
 * not use Array.prototype.pop() & Array.prototype.push
 */

//export default class Stack {
module.exports = class Stack {
	constructor(array) {
		this.array = Array.isArray(array) ? array : [];
		return this;
	}
	list() {
		return this.array;
	}
	push2(data) {
		let current = this.array.length;
		this.array[current] = data;
		return this.array.length;
	}
	pop2() {
		let current = this.array.length - 1;
		let data    = this.array[current];
		delete this.array[current];
		let new_array = [];
		for (let i = 0; i < current; i++) {
			let val = this.array[i];
			new_array[i] = val;
		}
		this.array = new_array;
		return data;
	}
}
