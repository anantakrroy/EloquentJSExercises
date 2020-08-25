// Flatten an array using the reduce method

function flattenArr(arr) {
	return arr.reduce((acc,curr) => acc.concat(curr));
}

flattenArr([[1,2,3],[5,6,7]]);