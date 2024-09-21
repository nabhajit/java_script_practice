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

function login(username) {
    console.log(`${username} just logged in`); // Correct string interpolation
}

login("Nabhajit"); // Pass the username as a string

