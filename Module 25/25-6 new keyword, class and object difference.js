class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Asif ur', 'Rahman', 20000); // new keyword used to create an object from class
console.log(heroPerson);

// object was created with function before ES6
function Student(firstName,lastName,id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
}
const student1 = new Student('Asif', 'Ur Rahman', 17702062);
console.log(student1)
