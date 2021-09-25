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

// 4 
let num1 = NaN;
console.log(num1)
// getting null
let num = null;
console.log(num);

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  console.log(getVowels('sky'));
  // expected output: 0


  function getVowels1(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
  }
  console.log(getVowels1('asif'));