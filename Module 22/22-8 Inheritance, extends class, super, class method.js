// class Parent{
//     constructor(parent){
//         this.parentName = parent;
//     }
// }
class Parent{
    constructor(){
        this.parentName = 'Motiur Rahman';
    }
}


class Student extends Parent{
    // constructor(parent,name){
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.parentName;
    }
}

// const student = new Student("Motiur Rahman","Asif");
const student = new Student("Asif");
console.log(student);
console.log(student.getFullName())