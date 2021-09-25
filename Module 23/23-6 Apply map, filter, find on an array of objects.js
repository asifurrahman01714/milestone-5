const students=[
    {id:21, name:'Asif'},
    {id:22, name:'Sakib'},
    {id:23, name:'Arif'},
    {id:24, name:'Hasan'}
];
const AllNames = [];
for (let i = 0; i < students.length; i++) {
    const element = students[i].name;
    AllNames.push(element);
}
console.log(AllNames);

const AllStudentNames =students.map(singleObject => singleObject.name);
console.log(AllStudentNames);

const filterAllStudentNames = students.filter(singleObject => singleObject.id > 22);
console.log(filterAllStudentNames);

const findAllStudentNames = students.find(singleObject => singleObject.id >23);
console.log(findAllStudentNames);

