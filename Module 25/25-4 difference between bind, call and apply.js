// Call is to use a method of another object directly on a an object

const normalPerson = {
    name: 'John',
    salary: 1200,
    chargeSalary: function (amount, tips, tax){
        return this.salary = this.salary - amount - tips - tax; // please don't forget to use this.salary
    }
}
const normalChargeSalary = normalPerson.chargeSalary(400, 50, 50);
console.log(normalChargeSalary);

const heroPerson = {
    name: 'hero',
    salary: 2500
}

normalPerson.chargeSalary.call(heroPerson, 400, 50,50);
console.log(heroPerson.salary);

// no change in normalPerson
console.log(normalChargeSalary);

const friendlyPerson ={
    name: 'Hero',
    salary: 25000
}
normalPerson.chargeSalary.apply(friendlyPerson,[400,50,50]);
console.log(friendlyPerson.salary);

