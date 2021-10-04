// The function in an object is called a method
const normalPerson = {
    firstName: 'Asif Ur',
    lastName: 'Rahman',
    getFullName: function() { // this is called method
        console.log(this.firstName + ' ' + this.lastName); // we can call any value of an object key from a built in function or method  by this keyword.
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(normalPerson);
console.log(normalPerson.firstName);
console.log(normalPerson.lastName);
console.log(normalPerson.getFullName());

const result = normalPerson.getFullName();
console.log(result);