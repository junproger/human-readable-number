module.exports = function toReadable (number) {
	let input = number;
	let transform = input.toString();
	let output = ``;
	const units = [``, `one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `zero`];
	const teens = [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`];
	const tentyes = [``, ``, `twenty`, `thirty`, `forty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`];
	const hundred = [`hundred`];
	const thousand = [`thousand`];
		if (transform.length === 4) {
			let first;
				if (transform[0] === `0`) {
					first = ``;
				} else {
					first = `${units[transform[0]]} ${thousand} `;
				};
			let second;
				if (transform[1] === `0`) {
					second = ``;
				} else {
					second = `${units[transform[1]]} ${hundred} `;
				};
			let third;
			let fours;
				if (transform[2] === `0`) {
					third = ``;
					fours = `${units[transform[3]]}`;
				} else if (transform[2] === `1`) {
					third = `${teens[transform[3]]}`;
					fours = ``;
				} else if (transform[2] !== `1`) {
					third = `${tentyes[transform[2]]} `;
					fours = `${units[transform[3]]}`;
				};
			output = (first + second + third + fours).trim();
		} else if (transform.length === 3) {
			let first;
				if (transform[0] === `0`) {
					first = ``;
				} else {
					first = `${units[transform[0]]} ${hundred} `;
				};
			let second;
			let third;
				if (transform[1] === `0`) {
					second = ``;
					third = `${units[transform[2]]}`;
				} else if (transform[1] === `1`) {
					second = `${teens[transform[2]]}`;
					third = ``;
				} else if (transform[1] !== `1`) {
					second = `${tentyes[transform[1]]} `;
					third = `${units[transform[2]]}`;
				};
			output = (first + second + third).trim();
		} else if (transform.length === 2) {
			let first;
			let second;
				if (transform[0] === `0`) {
					first = ``;
					ssecond = `${units[transform[1]]}`;
				} else if (transform[0] === `1`) {
					first = `${teens[transform[1]]}`;
					second = ``;
				} else if (transform[0] !== `1`) {
					first = `${tentyes[transform[0]]} `;
					second = `${units[transform[1]]}`;
				};
			output = (first + second).trim();
		} else if (transform.length === 1) {
			let first;
				if (transform[0] === `0`) {
					first = `${units[10]}`;
				} else if (transform[0] !== `0`) {
					first = `${units[transform[0]]}`;
				};
			output = (first).trim();
		};
	return output;
};