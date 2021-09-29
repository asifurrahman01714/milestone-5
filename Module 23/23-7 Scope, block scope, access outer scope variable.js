// Scope variable = let and constant. Wresting is not supported for this two variable declarations
// var is some flexible in this case. It can wrest it's declaration in one upper level.

function sum(result) {
    if (result>9) {
        console.log(hoisting ); // This will not give error. Because var hoist it's declaration to an upper step
        var hoisting  = result;
        console.log(hoisting );
    }
}
// console.log(hoisting ); -- This will give error
sum(10);


// global scope for let and const 
let sakib = 10;
let asif = 15;
function add(params) {
    console.log(sakib);
}
console.log(sakib);
add();

// Block scop in let and const 
function blockScope(params) {
    let block = 10;
}
// console.log(block); -- This will give an error
blockScope();


