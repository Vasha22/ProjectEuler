
var multiply = function (limit) {
	var sum = 0;
	for (var i = 0; i < limit; i++) {
		if (i % 5 === 0 || i % 3 === 0) {
			sum += i;
		}
	}
	document.getElementById('result').innerHTML = sum;
}