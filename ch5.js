// Flatten an array using the reduce method

function flattenArr(arr) {
	return arr.reduce((acc,curr) => acc.concat(curr));
}

flattenArr([[1,2,3],[5,6,7]]);

// Implement "every" array method using Loop
function every(arr, callback) {
    for(let el of arr) {
        if(!callback(el)) {
            return false;
        }
    }
    return true;
}

// Implement "every" array method using the method "some"
function everyUsingSome(arr, cb) {
   let cbArr = arr.map(el => {
        let temp = [];
        temp.push(el);
        return temp.some(el => cb(el));
    })
    return cbArr.indexOf(false) === -1 ? true : false;  
}

