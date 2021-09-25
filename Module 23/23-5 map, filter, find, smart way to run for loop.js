const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i] * 2;
    console.log(element);
    output.push(element);
}
console.log(output);


// const secondResult =numbers.map(function(element) {
//     return element * 2;
// })
const secondResult =numbers.map(element => element * 2);
console.log(secondResult);


//  const bigger = numbers.filter(function(element){
//      return element > 8;
//  })
const bigger = numbers.filter(element => element >10)
 console.log(bigger)

const finder = numbers.find(element =>element > 10);
console.log(finder);