const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "hello"];

console.log(myArr[11]);  // Prints "hello"

// Shallow copy explanation - Objects like arrays are passed by reference
const names = ["Rahul", "Rohan", "Deep", "Golu", "Molu"];

// Correct way to concatenate arrays
const concatenatedArr = myArr.concat(names);

console.log(concatenatedArr);



myArr.push(10);

myArr.unshift(-1);  //add elements at first

myArr.shift();      //delete elements at first

const b =myArr.includes(4);

const x = myArr.indexOf(0);

const new_ar = myArr.join();    //Convert array into strings

console.log("A" , myArr);

const myn1 = myArr.slice(1,3);

console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3);

console.log(myn2);

console.log("C", myArr);

// 2 Difference between slice and splice---------
/*
slice---------
* It does not include the last element of the array.
* It does not the manipulate the origianl array.
spilce--------
* It does include the last element of the given index.
* It does manipulate the original array.
*/

 
//Concat vs Spread operator

const heros =["sup","iron","cap"];
const vill = ["oct","vul","kill"];

console.log(...heros , ...vill);     //Advantage can add more than 2 array

const arr = [1, 2, 3,[4,5,6],7,[6,7,[4,5]]]

console.log(arr.flat(Infinity));            //decomposes the array

console.log(Array.isArray("Nabhajit"))
console.log(Array.from("nabhajit"));
console.log(Array.from({name : "nabhajit"}));

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s2));
