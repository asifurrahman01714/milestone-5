// Bind give a function as a return
// The goal of bind method is to use a method of one object to another object.
// In this case this bind method does not change the main object value.
// Just like to use a Spade of another neighbor to create a hole in your home.

const normalPerson = {
    firstName: 'Asif Ur',
    lastName: 'Rahman',
    salary: 12000,
    getFullName: function() { // this is called method
        console.log(this)
        console.log(this.firstName + ' ' + this.lastName); // we can call any value of an object key from a built in function or method  by this keyword.
        return this.firstName + ' ' + this.lastName;
    },
    chargeSalary: function (amount) {
        //console.log(this)
        return this.salary = this.salary - amount;
    }

}


// result is same for this function call
normalPerson.chargeSalary(300);
normalPerson.getFullName();


// bind will give you a function

const heroPerson ={
    name: 'Hero',
    salary: 25000
}

// using chargeSalary method to this heroPerson
const heroChargeSalary = normalPerson.chargeSalary.bind(heroPerson);
// It will give a function named heroChargeSalary. So we have to call it to use.
heroChargeSalary(300);
console.log(heroPerson.salary)

