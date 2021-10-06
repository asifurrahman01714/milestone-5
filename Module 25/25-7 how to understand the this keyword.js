const myObj = {
    name: 'Asif Ur Rahman',
    getFullName: function(name) {
        console.log(this);
        return "Md. "+this.name;
    }
}

const anotherObj ={
    name: "Sakib Ur Rahman",
}
anotherObj.getFullName = myObj.getFullName; // without bind, call, apply

console.log(myObj.getFullName());
console.log(anotherObj.getFullName());