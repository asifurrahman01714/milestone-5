// WIndow is a global scope in which all code of javascript is run.       
// document === window.document 

// As there is no used var before the variable result1 and result 2. So this two variable is made as global variable
function add(num1, num2) {
    result1 = num1 + num2;
    // console.log(result2); Giving error as the function double() is not called.
    function double(result1) {
        result2 = result1*2;
        console.log('result2',result2);
        return result2;
    }

    double(23);
}
// console.log(result1) Giving error as the function add() is not called.
add(12,23);
console.log('result1',result1)
console.log('result2',result2);