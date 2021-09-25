const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i] * 2;
    console.log(element);
    output.push(element);
}
console.log(output);