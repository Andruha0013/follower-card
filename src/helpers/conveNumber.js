export default function convertNum(num) {
	if (num >= 1000 && num < 1000000) {
		let x = num / 1000;
		x = x.toString();
		let res = x.split(".");
		res = res.join(",");
		return res;
	}
	if (num >= 1000000 && num < 1000000000) {
		let x = num / 1000;
		let y = Math.trunc(x) / 1000;
		x = x.toString();
		y = y.toString();

		let res = x.split(".");
		let resY = y.split(".");

		let newNum = [];
		newNum.push(resY[0]);
		newNum.push(resY[1]);
		newNum.push(res[1]);
		newNum = newNum.join(",");
		return newNum;
	}
	return num;
}
