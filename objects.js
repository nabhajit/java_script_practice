//Singelton ----------Object from a constructor

//Object Literals
const mySym = Symbol("key1");  // Declare a symbol

const myObj = {
    name: "jhonny",       // All the values are considered as strings where needed
    age: 20,              // Number value
    [mySym]: "mykey1",    // Symbol as key
    "Full name": "Nabhajit", // Special case with space in the key
    greet: function() {
        console.log('Hello');
    }
};

console.log(myObj.name);            // Dot notation
console.log(myObj["Full name"]);    // Bracket notation for special cases
console.log(myObj[mySym]);          // Access symbol-based key

myObj.greet();                      // Call the greet method

// Overwrite age
myObj.age = 30;
console.log(myObj.age);             // Shows 30

// Freeze the whole object, not just a single property
Object.freeze(myObj);

myObj.name = "hello";               // Attempt to overwrite name (will not work)
myObj.age = 40;                     // Attempt to change age (will not work)

console.log(myObj.name);            // Still "jhonny" after freeze
console.log(myObj.age);             // Still 30 after freeze

myObj.country = "USA";              //Adding new properties dynamically
console.log(myObj.country);   // Output: "USA"

delete myObj.age;
console.log(myObj.age)  //undifined

console.log("name" in myObj);               // Output: true(check property)

const newObj2 = { ...myObj };               //coping from  1 obj to another
console.log(newObj2);

console.log(Object.isFrozen(myObj));   // Output: true (if it was frozen earlier)

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj);   // Output: { a: 1, b: 3, c: 4 }

// Getting Propertyy names ,Values & Entities

const keys = Object.keys(myObj);
console.log(keys);  // Output: [ 'name', 'Full name', Symbol(key1) ]

const values = Object.values(myObj);
console.log(values);  // Output: [ 'jhonny', 'Nabhajit', 'mykey1' ]

const entries = Object.entries(myObj);
console.log(entries);      // Output: [ ['name', 'jhonny'], ['Full name', 'Nabhajit'], [Symbol(key1), 'mykey1'] ]
