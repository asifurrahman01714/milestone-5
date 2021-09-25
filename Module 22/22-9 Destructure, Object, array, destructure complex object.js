const student ={
    id : 12,
    info : {
        address : "Chittagong"
    },
    phone : 121212
}

const {id,phone} =student;
console.log(id,phone);


const {address} = student.info;
console.log(address)

const friends =[12,23,435,22]
const [first,second,...rest]=friends
console.log(first,second,...rest)
console.log(first,second,rest)