//1 write a function that takes and returns an argument
var identifier = function(x) {
	return x;
};

//2 write a function that takes in two args, returns them added
var add = function(a, b) {
	return a + b;
};
//write a function that takes in two args, returns them multiplied
var mul = function(a, b) {
	return a * b;
};

//3 - write a functino that takes an argument, returns a function that returns
//that argument

var idf = function(x) {
	return function() {
		return x;
	};
};

var test = idf('x');
console.log(test()); // x

//4- Write a function that adds from two invocations
// addf(3)(4); //7

var addf = function(x) {
	return function(y) {
		return x + y;
	};
};

console.log(addf(3)(4));

//5- write a function that takes in a binary function and is
//callable from two invocations

var superFunc= function(binaryFunc) {
	return function(x) {
		return function(y) {
			return binaryFunc(x, y);
		};
	};
};

console.log(superFunc(mul)(4)(5));//20