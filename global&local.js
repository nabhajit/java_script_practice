let a = 20
var b = 30
const c = 50

console.log(a); 
console.log(b)
console.log(c)

//var------------------------------------------------------------------------------------
// Scope: Function-scoped (accessible within the function where it's declared).
// Hoisting: var declarations are hoisted to the top of their scope, but the initialization stays in place, resulting in undefined if accessed before assignment.
// Re-declaration: Can be re-declared and updated within the same scope.
// Usage: Generally discouraged in modern JavaScript due to potential bugs caused by function scope and hoisting.

//nexted scope
// child function can access parent variables
function one(){
    const username = 'nabhajit'
    function two(){
        const web ='youtube'
        console.log(username)
    }
    //console.log(web)
    two()
}

one();

//hoisting
console.log(myVar);  // Output: undefined (because 'myVar' is hoisted but not initialized yet)
var myVar = 5;
console.log(myVar);  // Output: 5 (after initialization)

myFunc();  // Output: "Hello from myFunc" (functions are fully hoisted)
function myFunc() {
    console.log("Hello from myFunc");
}

// Example of hoisting with let and const
console.log(myLet);  // ReferenceError: Cannot access 'myLet' before initialization
let myLet = 10;

console.log(myConst);  // ReferenceError: Cannot access 'myConst' before initialization
const myConst = 20;
