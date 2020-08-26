// Flatten an array using the reduce method

function flattenArr(arr) {
	return arr.reduce((acc,curr) => acc.concat(curr));
}

flattenArr([[1,2,3],[5,6,7]]);

// higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function

function loop(currVal, test, update, body) {
	for(let val = currVal;test(val);update(val)) {
		body(val);
	}
}

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

// Find the dominant script direction in a given text
function dominantDirection(text) {
	let scripts = countBy(text, ch => {
		let code = ch.codePointAt(0);
		let script = characterScript(code);
		return script ? script.direction : "none";
	}).filter(({propName}) => propName != "none");
	let total = scripts.reduce((acc,curr) => acc + curr.count,0);
	if(total === 0) return "No scripts found !";
	let result = scripts.reduce((a, b) => {return a.count > b.count ? a : b});
	return `Dominant direction in the given text: ${result.propName}`;
}

function countBy(items, groupDir) {
	let counts = [];
	for(let item of items) {
		let propName = groupDir(item);
		let found = counts.findIndex(el => el.propName == propName);
		if(found === -1) {
			counts.push({propName, count : 1});
		} else {
			counts[found].count++;
		}
	}
	return counts;
}

function characterScript(code) {
	for(let script of SCRIPTS) {
		if(script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			console.log(`Character with code ${code} has script direction ${script.direction}`)
			return script;
		}
	}
	return null;
}

dominantDirection('英国的狗说"woof"');