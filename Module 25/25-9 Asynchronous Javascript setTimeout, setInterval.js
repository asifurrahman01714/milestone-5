// Synchronous: means all the function will be executed with one after one.
// Asynchronous: means all the function will not be executed one after one. The asynchronous function will be executed later.
// We can also set a time to execute the function
// Like: setTimeout and setInterval.
// setTimeout: It will be executed for once just after the given time.
// setInterval: It will be executed again and again between the time interval.
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

setInterval(() => {
    console.log("set Interval")
}, 1000);

// stop the iteration by pressing ctrl+c.