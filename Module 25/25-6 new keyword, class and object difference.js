class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Asif ur', 'Rahman', 20000); // new keyword used to create an object from class
console.log(heroPerson)