const sumAll = function () {

    if (typeof (arguments[0]) !== 'number' || typeof (arguments[1]) !== 'number') {
        return 'ERROR';
    }

    let smallest = Math.min(arguments[0], arguments[1]);
    const largest = Math.max(arguments[0], arguments[1]);

    if (smallest <= 0 || largest <= 0) {
        return "ERROR";
    }

    let total = 0;

    for (smallest; smallest <= largest; smallest++) {
        total += smallest;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
