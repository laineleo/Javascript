/* Task 1
    DOCU: This function filters an array based on a given callback function.  
    Function name- customFilter
    @param {Array} arr - An array to be filtered.  
    @param {Function} callback - A function that determines if an element should be included.  
    @returns {Array} - A new array containing only elements that pass the callback condition.   
*/
function customFilter(arr, callback) {
    result=[];      //store filtered values
    for (let i=0; i<arr.length;i++){
        if(callback(arr[i])){
            result.push(arr[i]);
        }
    }return result;
}

function isEven(num) {
    return num % 2 === 0;
}

var numbers = [1, 2, 3, 4, 5, 6];
var evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers);  // Output: [2, 4, 6]

/* Task 2
    DOCU: This function counts down from a starting number and calls a callback function with each number, pausing 1 second between each call.
    Function name- countdown
    @param {number} start - The number to start counting down from.  
    @param {Function} callback - A function to call with each number.  
*/
function countdown(start, callback) {
    let interval= setInterval(()=>{
        callback(start);
        start--;    // Decrease the number by 1

        if(start<0){
            clearInterval(interval);
        }
    }, 1000);
}

function displayNumber(num) {
    console.log(num);
}

countdown(5, displayNumber);  // Output: 5 4 3 2 1 0 (with 1-second delay between each)

/* Task 3
    DOCU: This function attaches a click event listener to a button and executes a callback function when the button is clicked.
    Function name- createButton
    @param {string} buttonId - The ID of the button element.
    @param {Function} callback - The function to execute when the button is clicked.
*/
function createButton(buttonId, callback) {
    let button= document.getElementById(buttonId);      // Get the button element by its ID
    button.addEventListener("click", callback);         // Attach the click event listener
    };

function buttonClicked() {
    console.log("Button Clicked!");
}

createButton("clickMe", buttonClicked);  

/* Task 4
    DOCU: This function runs a list of tasks one after another with a 1-second delay between each task.
    Function name- runTasks
    @param {Array} tasks - An array of functions to be executed in sequence.  
*/
function runTasks(tasks) {
    let index= 0;

    function executeNextTask() {
        if (index < tasks.length) { // Check if there are still tasks left
            tasks[index](); // Execute the current task
            index++; // Move to the next task
            setTimeout(executeNextTask, 1000); // Wait 1 second before calling the next task
        }
    }
    executeNextTask();
}

function task1() {
    console.log("Task 1 completed");    
}

function task2() {
    console.log("Task 2 completed");
}

function task3() {
    console.log("Task 3 completed");    
}

runTasks([task1, task2, task3]);  

/* Task 5
    DOCU: This function asks a question and checks the user’s answer through a callback.
    Function name- askQuestion
    @param {string} question - The question being asked.
    @param {Array} choices - An array of possible answers.
    @param {string} correctAnswer - The correct answer to the question.
    @param {Function} callback - A function that handles the result of the answer check.
*/
function askQuestion(question, choices, correctAnswer, callback) {
    console.log(question);
    console.log("choices: ", choices.join(","))

    let userAnswer = "4";       //user's choice
    let isCorrect = userAnswer === correctAnswer; // Check if the answer is correct
    callback(isCorrect); // Call the callback function with the result
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }
}

askQuestion("What is 2 + 2?", ["1", "2", "3", "4"], "4", checkAnswer);
