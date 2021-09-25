// simple function
function doubleIt1(x) {
    return x*2;
}
const result1 = doubleIt1(5);
console.log(result1);

// function declaration as variable
const doubleIt2 = function (x) {
    return x*2;
}
console.log(doubleIt2(3));

const doubleIt3 = function asif(x) {
    return x*2;
}
console.log(doubleIt3(4));

// Function with ES6 and arrow functions

// Single line arrow function
const addNumbers1 = (x, y) => x + y;
console.log(addNumbers1(2,3));

const doubleIt4 = x => 3*2;
console.log(doubleIt4(3));

