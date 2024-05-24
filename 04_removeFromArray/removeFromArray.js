const removeFromArray = function() {
	// // const index = array.indexOf(toRemove);
	// let toRemove = arguments[1];
	// const array = arguments[0];
	// let toReturn = [];
	// for (let i = 0; i < array.length; i++) {
	// 	if(array[i] != toRemove) {
	// 		toReturn.push(array[i]);
	// 	}
	// }
	// return toReturn;
	const array = arguments[0];
	const toRemove = (arguments) => {
		for(let i = 1; i < arguments.length; i++) {
			list += arguments[i];
		}
		return list;
	}
	for (let i = 0; i < toRemove.length; i++) {
		console.log(toRemove[i]);
	}
};

// Do not edit below this line
module.exports = removeFromArray;
