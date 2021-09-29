const nums = [1, 2, 3, 4, 5]
const slicing = nums.slice(0,2);
console.log(slicing);

// The main array is not changed after slicing is applied
console.log(nums);


const names = ['asif', 'sakib', 'rakib', 'arif', 'hasib']
// const splicing = names.splice(0,2); // here 0 is the index number and 2 is the counting delete number
const splicing = names.splice(0,2, 'ahmad', 'bangladesh'); // we can added another things in splicing
console.log(splicing);
//The main array is  changed after splicing is applied on the array. It will remove the splicing number from the main array
console.log(names)