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

