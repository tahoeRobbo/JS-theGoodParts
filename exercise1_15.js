//**ALL PROBLEMS BUILD ON THE ONES BEFORE**\\

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

//6 Write a function that takes in a binary function and an argument
//and returns a second function that can supply a second argument

var curry = function(binaryFunc, firstArg) {
	return function(secondArg) {
		return binaryFunc(firstArg, secondArg);
	};
};

var add3 = curry(add, 3);
console.log(add3(4)); //7
var mul3 = curry(mul, 3);
console.log(mul3(4)); //12

//7- Without writing any new functions, show three ways to write the inc function
//NOT WRITING ANYTHING NEW, JUST CALL WHAT's ABOVE ^^
// inc(5); // 6;

var inc = addf(1);//

var inc2 = superFunc(add) (1);

var inc3 = curry(add, 1);

console.log(inc(4));//5
console.log(inc2(5));//6
console.log(inc3(6));//7

//8- write (methodize), a function that converts a binary function
// to a method
//Number.prototype.add = methodize(add);
//(3).add(4); // 7

var methodize = function(binaryFunc) {
	return function(y) {
		return binaryFunc(this, y);
	};
};

Number.prototype.add = methodize(add);
console.log('methodize ',(3).add(4)); //7

//9- write (demethodize), a function that converts a method  
//to a binary function
//demethodize(Number.prototype.add)(5, 8); //13
//**BRAIN BUSTER**

var demethodize = function(method) {
	return function(that, y){
		return method.call(that, y);
	};
};

console.log('demethodize ', demethodize(Number.prototype.add)(6, 9));  // 15



//10-  Write a function (twice) that takes in a binary function and 
//returns a unary function that passes its argument to the 
//binary function twice
 
var twice = function(binaryFunc) {
	return function(a) {
		return binaryFunc(a, a);
	};
};

var double = twice(add);
console.log(double(20));

var square = twice(mul);
console.log(square(3));

// 11- Write a function compseu that takes two unary
//functions and returns a unary function that calls both of
//them.


var composeU = function(unaryFunc1, unaryFunc2) {
	return function(num) {
		return unaryFunc2(unaryFunc1(num));
	};
};

console.log('composeU ', composeU(double, square)(3)); //36


//12- write a function (composeB) that takes in two binary func
// and returns a function that calls both of them
//composeB(add, mul)(2, 3, 5); // 25

var composeB = function(binaryFunc1, binaryFunc2) {
	return function(a,b,c) {
		return binaryFunc2(binaryFunc1(a, b), c);
	};
};


console.log('composeB ', composeB(add, mul)(2, 3, 5)); //25


//13 - write a function that allows another function to only be
//called once

//addOnce = once(add);
//addOnce(3, 4); //7
//addOnce(3, 4); //Throw!

var once = function(func) {
	return function() {
		var f = func;
		func = null;
		return f.apply(this, arguments);
	};
};

var addOnce = once(add);
console.log('addOnce ', addOnce(4,5)); //9
//console.log('addOnce ', addOnce(4,5)); //ERROR! 'cannot read
//property 'apply' of null



//14 - write a factory function that takes in a value and returns
//two functions to implement a counter
//counter = counterF(10);
//counter.inc() = 11;
//counter.dec() = 10;

var counterF = function(value) {
	return {
		inc : function(){
		value +=1;
		return value;},
		
		dec : function() {
			value -=1;
		return value;}
	
	};

};
var counter = counterF(10);
console.log('counter inc ', counter.inc()); //11;
console.log('counter dec ', counter.dec());// 10;

//15 write a revokable function that takes in a nice function 
//and allows it to be called until a revoke function is called
//after which the invoke function will no longer work\

//var temp = revokable(square);
//temp.invoke(7); // 49
//temp.revoke(); //
//temp.invoke(7); // Throw!

var revokable = function(func) {
	return {
		invoke : function() {
			return func.apply(this, arguments);
		},
		revoke : function() {
			func = null;
		}
	};
};

var temp = revokable(square);
console.log(temp.invoke(7)); // 49
console.log(temp.invoke(8)); // 64
temp.revoke(); //
console.log(temp.invoke(7)); // Throw!
















































