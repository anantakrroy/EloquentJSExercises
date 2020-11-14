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