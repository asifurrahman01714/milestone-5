console.log(2222)
console.log(3333);
function name() {
    console.log("asif")
}
name();

setTimeout(name);
setTimeout(function() {
    console.log("lazy for 5 second")
},5000);

setTimeout(()=> {
    console.log("lazy for 10 second");
},10000);
