/* Task 1: Custom Map Function
    DOCU: This function processes each element of an array using a provided callback
    and returns a new array with the transformed results.
    Function name - customMap
        @param {Array} array - The array to be processed.
        @param {Function} callback - A function that transforms each element.
        @return {Array} - A new array with transformed elements.
*/
// function customMap(array, callback) {
//     let result = [];     

//     for (let i = 0; i < array.length; i++) { 
//         result.push(callback(array[i])); 
//     }
//     return result; 
// }

// let numbers = [1, 2, 3];
// let doubled = customMap(numbers, function(num) { return num * 2; });
// console.log(doubled); // Should output: [2,4,6]

/* Task 2: Filter Function
    DOCU: This function filters elements of an array based on a condition specified in a callback.
    Function name - filter
        @param {Array} array - The array to be filtered.
        @param {Function} callback - A function that returns true for elements to keep.
        @return {Array} - A new array with elements that satisfy the condition.
*/
// function filter(array, callback) {
//     let result = []; 
//     for (let i = 0; i < array.length; i++) { 
//         if (callback(array[i])) { 
//             result.push(array[i]); 
//         }
//     }
//     return result; 
// }

// let result = filter([1,2,3,4,15], function(val) { return val<10; });
// console.log(result); // Should output: [1,2,3,4]


/* Task 3: Some Function
    DOCU: This function checks if any element in the array meets the condition specified in the callback.
    Function name - some
        @param {Array} array - The array to be checked.
        @param {Function} callback - A function that checks the condition.
        @return {Boolean} - True if any element meets the condition, otherwise false.
*/
// function some(array, callback) {
//     for (let i = 0; i < array.length; i++) { 
//         if (callback(array[i])) { 
//             return true;
//         }
//     }
//     return false; 
// }

// let result = some([1,2,3,4], function(val) { return val>5; });
// console.log(result); // false

/* Task 4: Every Function
    DOCU: This function checks if all elements in the array meet the condition specified in the callback.
    Function name - every
        @param {Array} array - The array to be checked.
        @param {Function} callback - A function that checks the condition.
        @return {Boolean} - True if all elements meet the condition, otherwise false.
*/
// function every(array, callback) {
//     for (let i = 0; i < array.length; i++) { 
//         if (!callback(array[i], i, array)) { 
//             return false;
//         }
//     }
//     return true; 
// }

// let result = every([1,2,3], function(val) { return val > 0; });
// console.log(result); // Should output: true

/* Task 5: Reduce Function
    DOCU: This function accumulates elements in the array through a provided callback and returns the accumulated result.
    Function name - reduce
        @param {Array} array - The array to be processed.
        @param {Function} callback - A function that accumulates values.
        @param {*} initialValue - The initial value for the accumulation.
        @return {*} - The accumulated result.
*/
// function reduce(array, callback, initialValue) {
//     let accumulator = initialValue !== undefined ? initialValue : array[0]; 
//     let startIndex = initialValue !== undefined ? 0 : 1;

//     for (let i = startIndex; i < array.length; i++) { 
//         accumulator = callback(accumulator, array[i], i, array); 
//     }
//     return accumulator; 
// } 

// let sum = reduce([1,2,3], function(acc, num) { return acc + num; }, 0);
// console.log(sum); // Should output: 6

/* Task 6: Includes Check
    DOCU: This function checks if any element in the array meets the condition specified in the callback.
    Function name - includes
        @param {Array} array - The array to be checked.
        @param {Function} callback - A function that checks the condition.
        @return {Boolean} - True if the element is included, otherwise false.
*/
function includes(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

let resultIncludes = includes([1,2,3], function(val) { return val === 2; });
console.log(resultIncludes); // Should output: true
