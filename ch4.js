// SUM OF A RANGE

function range(start, end) {
	let arr = [];
	for(let i = start; i <= end; i++){
		arr.push(i);
	}
	return arr;
}

range(2,12);

function sum(arr) {
	return arr.reduce((acc,curr) => acc + curr);
}

sum([1,2,3,4,5,6,7,8,9,10]);

function range(start,end,step=1){
	let arr = [];
	if(step > 0){
		for(let i = start; i <= end; i += step){
			arr.push(i);
		}
	} else {
		for(let i = start; i >= end; i += step){
			arr.push(i);
		}
	}
	return arr;
}

range(5,2,-1);

//  REVERSE AN ARRAY
function reverseArray(arr) {
	let resultArr = [];
	for(let i = arr.length - 1; i >= 0; i--){
		resultArr.push(arr[i]);
	}
	return resultArr;
}


function reverseArrayInPlace(arr) {
	let copyArr = arr.slice();
	for(let i = 0; i < copyArr.length; i++){
		arr[i] = copyArr[copyArr.length - 1 - i];
	}
	return arr;
}


// CONVERT AN ARRAY TO A LIST

function arrayToList(arr) {
	for(let i = 0; i < arr.length; i++){
		if(arr.length === 1) {
			return {
				value : arr[i],
				rest : null
			}
		}
		return {
			value : arr[i],
			rest : arrayToList(arr.slice(i + 1, arr.length))
		}
	}
}

arrayToList([1,2,3])


// CONVERT LIST TO ARRAY
function listToArray(li){
	let arr = [];
	for(let node = li; node; node = node.rest){
		console.log('End of list');
		arr.push(node.value);
	}
	return arr;
}

listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })

// Write function prepend to add to list in beginning
function prepend(element, list) {
	return {
		value : element,
		rest : list
	}
}

prepend(4, { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });


// Write function nth which takes list and number n, find the nth item in the list
function nth(list, n) {
	if(!list) {
		return undefined;
	} else if(n === 0){
		return list.value;
	} else {
		return nth(list.rest, n-1);
	}
}

nth({}, 2);


// DEEP EQUAL function to compare objects
function deepEqual(a, b) {
		if(typeof a === 'object' && typeof b === 'object') {
			let aKeys = Object.keys(a);
			let bKeys = Object.keys(b);
			if(aKeys.length !== 0 && bKeys.length !== 0){
				for(let aK of aKeys){
					if(!bKeys.includes(aK)) {
						return false;
					} else {
						if(a[aK] !== b[aK]){
							console.log('false should print');
							return false;
						}
					}
				}
				return true;
			}
		} else if (a === b) {
			return true;
		}
		return false;
}

// Alternative BETTER logical solution to DEEP EQUAL
function deepEqual(a,b){
	if(a === b)
		return true;
	if(a == null || typeof a !== 'object' || b == null || typeof b !== 'object')
		return false;
	let aKeys = Object.keys(a);
	let bKeys = Object.keys(b);
	if(aKeys.length !== bKeys.length)
		return false;
	for(let aK of aKeys){
		if(!bKeys.includes(aK) || !deepEqual(a[aK], b[aK]))
			return false;
	}
	return true;
}

deepEqual({},{});