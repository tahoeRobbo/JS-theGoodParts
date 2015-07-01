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

//