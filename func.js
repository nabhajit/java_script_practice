//if arguments are given the pameters are not executed
function sum(a =5,b= 7)     //parameters
{
    console.log(a+b);
}

sum(null,20);               //Arguments

function add(num1,num2)
{
    return num1+num2;
}

console.log("Results: -",add(5,4));

const Results = add(5,4)

console.log(Results)

function login(username) {
  console.log(`${username} just logged in`); // Correct string interpolation
}

login("Nabhajit"); // Pass the username as a string

function loginUserMsg(username) {
  return `${username} just logged in`;
}

console.log(loginUserMsg("nabhajit"));      //if no value is passed it will shown undefined.

//we dont know the number of parameters we are getting

function Calprice(...num1){           //rest operator
  return num1;
}

console.log(Calprice(425,5626,592))

//calling objects using functions

const user = {
  username: "Nabhajit",
  price: 500
};

function handleobj(anyobj) {
  console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

handleobj(user);          //if obj is not passed it will show undefined

const myNewarr = [200,400,700]

function arracc(getArray)
{
  return getArray[1]
}

console.log(arracc(myNewarr));



