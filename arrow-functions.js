/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers (a, b) {
    // Code Block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code Block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;


// Implicit Returns

const saySomething = messange => console.log(message);
saySomething("Hello!");

// Returning Multiple Lines
const retunMultipleLines = () => (
    `<p>
        This is a multiline String!
    </p>`
)

console.log(returnMultipleLines());