//Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number, etc. when different types of operators are applied to the values
// The Number 10 is converted to
// string '10' and then '+'
// concatenates both strings 
let x = 10 + '20';
let y = '20' + 10;

let z = true + '10';

console.log(x);
console.log(y);
console.log(z);

console.log(typeof z);   //All are converted to string here !!


/*
When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) is performed, all the values that are not numbers are converted into the number data type, as these operations can be performed between numbers only.
 Some examples of this are shown below.
 */


// The string '5' is converted
// to number 5 in all cases
// implicitly
let w = 10 - '5';
let a = 10 * '5';
let b = 10 / '5';
let c = 10 % '5';

console.log(w);
console.log(a);
console.log(b);
console.log(c);

console.log(typeof w);   //All are converted to number here !!

//Boolean to number

// The Boolean value true is
// converted to number 1 and
// then operation is performed
let k = true + 2;

// The Boolean value false is
// converted to number 0 and
// then operation is performed
let l = false + 2;

console.log(k);
console.log(l);


//The equality operator (==) can be used to compare values irrespective of their type. This is done by coercing a non-number data type to a number.
// Some examples of this are shown below:

// Should output 'true' as string '10'
// is coerced to number 10
let g = (10 == '10');

// Should output 'true', as boolean true
// is coerced to number 1
let n = (true == 1);

// Should output 'false' as string 'true'
// is coerced to NaN which is not equal to
// 1 of Boolean true
let i = (true == 'true');

console.log(g);
console.log(n);
console.log(i);

//It will convert any non-number to number  !!