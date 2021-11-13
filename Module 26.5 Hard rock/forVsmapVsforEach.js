const myArray = [{id:12, name: 'Asif'},{id:13, name: 'Tamanna'},{id:14, name: 'Noori'}];
console.log("foreach");
myArray.forEach(element => {
    console.log(element)
});

console.log("for")
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}
console.log("map");
const singleElement = myArray.map(student => student.id)
console.log(singleElement)