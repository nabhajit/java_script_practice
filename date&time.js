//started from jan 1st 1970

let mydate = new Date()         //obejcts

console.log(mydate.toDateString());

console.log(mydate.toString())

console.log(mydate.toISOString())

let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January is 0

//Add 12 hours to convert to PM time
myCreatedDate.setHours(myCreatedDate.getHours() + 12);

console.log(myCreatedDate.toLocaleString());

let newDate = new Date("08-12-2023")

// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log(myCreatedDate.getTime());

let new_Date = new Date()

console.log(new_Date);
console.log(new_Date.getMonth());

