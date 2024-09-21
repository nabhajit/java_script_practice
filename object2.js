//Singleton objects means dynamically created objects on real time using new operator

const myObj = new Object();

myObj.age = 45;
myObj.IsLoggedIn = false;

const reg_user = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            name: "nabhajit"
        }
    }
}

console.log(reg_user.fullname.userfullname.name);  // This will print "nabhajit"

const obj1 ={
    1 : "a",
    2 : "b",
}

const obj2  = {
    3 : "c",
    4 : "d",
}

const obj3 ={...obj1,...obj2}
console.log(obj3);

//arrya of objects

const users = [
    {
        id :1,
        name :"hello"
    },
    {
        id :1,
        name :"hello"
    },
    {
        id :1,
        name :"hello"
    },
    {
        id :1,
        name :"hello"
    }
]

console.log(users[1].name);

//Get all the keys-----(arrays) similr like enties & values

console.log(Object.keys(obj1));


