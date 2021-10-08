async function hello(name) {
    return "hello "+ name;
}

const promise = hello("Asif");
console.log(promise);

promise.then(response => {
    console.log(response);
})