const removeFromArray = function(array, toRemove) {
	// const index = array.indexOf(toRemove);
	let toReturn = [];
	for (let i = 0; i < array.length; i++) {
		if(array[i] != toRemove) {
			toReturn.push(array[i]);
		}
	}
	return toReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
