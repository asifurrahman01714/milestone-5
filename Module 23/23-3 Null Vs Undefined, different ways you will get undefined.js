// we can find undefined in many ways but we have to set null to empty anythings

// 1
let name;
console.log(name)

// 2
let array =[12,34];
console.log(array[34])

// 3 = If we don't return a function but we want to get result and 
// if we dont pass all parameters but we want to read
function undefinedFunction(num1, num2) {
    console.log(num1, num2);
}
const result = undefinedFunction(23);
console.log(result);

// getting null
let num = null;
console.log(num)