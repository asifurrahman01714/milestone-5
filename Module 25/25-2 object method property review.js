// The function in an object is called a method
const normalPerson = {
    firstName: 'Asif Ur',
    lastName: 'Rahman',
    getSalary: 12000,
    getFullName: function() { // this is called method
        console.log(this.firstName + ' ' + this.lastName); // we can call any value of an object key from a built in function or method  by this keyword.
        return this.firstName + ' ' + this.lastName;
    },
    chargeSalary: function (amount) {
        return this.getSalary = this.getSalary - amount;
    }

}

console.log(normalPerson);
console.log(normalPerson.firstName);
console.log(normalPerson.lastName);
console.log(normalPerson.getFullName());

const result = normalPerson.getFullName();
console.log(result);

// we can call the new salary by this given two way
const salaryAfterCharge = normalPerson.chargeSalary(200);
console.log(salaryAfterCharge);
console.log(normalPerson.getSalary);