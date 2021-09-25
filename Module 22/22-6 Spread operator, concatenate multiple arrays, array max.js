const array1 = [12,13,14,15]
const array2 = [21,22,23,24];
const array3 = [31,32,33,34];

// Previous system
const allArrays1 = array1.concat(array2).concat(5).concat(array3);
console.log(allArrays1);


// spreading array
const spreadArray1 = [...array1];
console.log(spreadArray1);

const allArrays2 = [...array1, ...array2,'asif',...array3];
console.log(allArrays2)
