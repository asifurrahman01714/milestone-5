// Const with simple variable
const name = 'Asif Ur Rahman';
console.log(name);
// name = 'sakib ur rahman'-- It is not possible

// const with array variable
const studentID = [10,13]
studentID.push(12)
console.log(studentID)
studentID[1]=45
console.log(studentID);
// everything change is possible in a array const variable. But you can't change the overall array
// studentID=['asif','sakib']

// This is true for also object.
const student ={
    Id: 12,
    name: 'Asif',
}
student.Id = 13;
console.log(student)
// student = student.Id;-- Not possible

// Var vs Let. Let is a scope variable. It will not leak it's value outer space in scope.

for (var i = 0; i < 10; i++) {
  console.log(i) ;
}
console.log(i)

for (let j = 0; j < 10; j++) {
    console.log(j) ;
  }
//console.log(j) - j is not defined


