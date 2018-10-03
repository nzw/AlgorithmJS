'use strict';

class QuickSort {

	constructor(data_max_num ) {
		let sort = new Array(data_max_num);
<<<<<<< HEAD
		for (let i = 0; i < data_max_num; i++) {
			sort[i] = Math.ceil(Math.random()*data_max_num);
		}
		console.log('ソート前 =>', sort);
		this.sort(0, data_max_num - 1, sort);
		console.log('結果 => ', sort);
	}
	sort(bottom, top, data) {
		let lower = bottom, upper = top;
		if (bottom >= top) {
			return;
		}
		let tmp = 0;
		let center = data[bottom];
		console.log(`center => ${center}`);
		while (lower < upper) {
			while (lower <= upper && data[lower] <= center) {
				lower++;
			}
			while (lower <= upper && data[upper] > center) {
				upper--;
			}
			console.log(`lower(${lower}) : upper(${upper})`);
=======
		console.log('ソート準備');
		for (let i = 0; i < data_max_num; i++) {
			sort[i] = Math.ceil(Math.random()*data_max_num);
			console.log('sort[i]', sort[i]);
		}
		console.log('ソート開始');
		this.sort(0, data_max_num - 1, sort);
		console.log('ソート終了');
		for (let i = 0; i < data_max_num; i++) {
			console.log('sort[i]', sort[i]);
		}
	}
	sort(bottom, top, data) {
		let lower = bottom, upper = top, div = 0, tmp = 0;
		if (bottom >= top) {
			return;
		}
		div = data[bottom];
		while (lower < upper) {
			while (lower <= upper && data[lower] <= div) {
				lower++;
				console.log('lower => ', lower);
			}
			while (lower <= upper && data[upper] > div) {
				upper--;
				console.log('upper => ', upper);
			}
>>>>>>> origin/master
			if (lower < upper) {
				tmp = data[lower];
				data[lower] = data[upper];
				data[upper] = tmp;
			}
		}
		tmp = data[bottom];
		data[bottom] = data[upper];
		data[upper] = tmp;

		this.sort(bottom, upper - 1, data);
		this.sort(upper + 1, top, data);
	}
}
<<<<<<< HEAD
new QuickSort(10);
=======

let quick = new QuickSort(10);
>>>>>>> origin/master
