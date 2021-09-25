function AddNumbers(num1, num2 = 0,num3) {
    num3 = num3 || 0;
    return num1+num2+num3;
}
const result =AddNumbers(10);
console.log(result)