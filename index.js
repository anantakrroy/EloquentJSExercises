function loop(val, test, update, body) {
	if(test(val)) {
		body(val);
	} else {
		return false;
	}
	update
}