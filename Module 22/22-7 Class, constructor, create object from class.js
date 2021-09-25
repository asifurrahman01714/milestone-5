class Student{
    constructor(id, name){
        this.ID = id;
        this.Name = name;
    }
}

const student1 = new Student(12, 'Asif');
const student2 = new Student(13, "Sakib");
console.log(student1, student2);

console.log(student1.Name)
console.log(student2.Name)
