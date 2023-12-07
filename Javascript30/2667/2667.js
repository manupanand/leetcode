/**
 * @return {Function}
 */

var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello world"
    }
};

/*
var createHelloWorld = function() {
    
    ()=>"Hello world"
};*/


/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
const f = createHelloWorld();
f();
console.log(f(null));