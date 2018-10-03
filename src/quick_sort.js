'use strict';

class QuickSort {

	constructor(data_max_num ) {
		let sort = new Array(data_max_num);
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
new QuickSort(10);
