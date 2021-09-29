
// The task of break is to stop running of a loop
const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    console.log(element);
    if (element > 3) {
        break;
    }
    console.log(element);
}

// The task of continue is to skip some specific value of a loop
const numbers = [1,-1, 2,-2, 3,-3, 4,-4, 5,-5, 6,-6, 7,-7, 8,-8];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < 0) {
        continue;
    }
    console.log(element)
}