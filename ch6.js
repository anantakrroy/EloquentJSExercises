// PROBLEM 1 -
// Write a Vector class with methods - plus , minus
// and a getter - length


class Vec {
	constructor(x,y) {
		this.x = x;
		this.y = y;
	}

	plus(vec) {
		return new Vec(vec.x + this.x, vec.y + this.y);
	}

	minus(vec) {
		return new Vec(vec.x - this.x, vec.y - this.y);
	}

	get length() {
		return Math.sqrt(this.x**2 + this.y**2);
	}
}

// let vec1 = new Vec(1,2)
// console.log(vec1.plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(1, 2).length);



// PROBLEM 2 -
// Write an implementation of Set using your own class Group which has methods - add, delete and has
// Also, implement static method from which creates Group instances from any iterable object

class Group {

	constructor() {
		this.collection = [];
	}

	add(elem) {
		this.collection.includes(elem) ? -1 : this.collection.push(elem);
	}

	delete(elem) {
		const delID = this.collection.indexOf(elem);
		this.collection.splice(delID,1);
	}

	has(elem) {
		return this.collection.includes(elem);
	}

	static from(iterObj) {
		let newGroup = new Group();
		for(let o of iterObj) {
			newGroup.add(o);
		}
		return newGroup;
	}
}

// let group = Group.from([10,20]);
// console.log(group.has(10));
// console.log(group.has(30));
// group.add(10);
// group.delete(10);
// console.log(group.has(10));