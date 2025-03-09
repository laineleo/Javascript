//Exercise 1
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

console.log(calculate(5, 3, subtract));      // Output: 2
console.log(calculate(4, 2, divide)); // Output: 2

//Exercise 2
// function delayedMessage(message, delay, beforeCallback, callback) {
//     beforeCallback();
//     setTimeout(() => {
//         callback(message);
//     }, delay);
// }

// delayedMessage("Hello, world!", 2000, 
//     function() {
//         console.log("delay started...");
//     },
//     function(msg){
//         console.log(msg);
//     }
// );

//Exercise 3

// function repeatTask(times, callback) {
//     for (let i = 0; i < times; i++) {
//         if (callback(i)=== false){
//             break;
//         };
//     }
// }

// repeatTask(5, function(index) {
//     console.log("Iteration:", index);
//     if( index===3) return false;
// });