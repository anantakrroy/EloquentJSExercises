// Write Math.min function

function min(a, b) {
	return a < b ? a : a === b ? a : b;
}


// Check if even using recursion

function isEven(n) {
	if(n === 0){
		return 'Even number';
	} else if(n === 1) {
		return 'Odd number';
	}
	while(n >= 0) {
		n -= 2;
		isEven(n);
	}
}