const user ={
    username : 'nabhajit',
    price : 999,
    welcomeMsg : function()
    {
        console.log(`${this.username} , welcome to the course`)
    }
}

// browser global object---------------------- windows object

//we can't use this in function normally use in object only

//arrow function-----

user.welcomeMsg();
user.username =`sam`;
console.log(user.username)

//this talks about current context..........if declared outside scope it it will point to empty.

const hello =()=>{
    let username=`helloworld`
    console.log(this.username);
}
hello();

function hello1(){
    let name = `hello`
    console.log(this.name)
}
// hello1()

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

const addtwo =() =>{                    //explicit return
    return 3+6;
}
console.log(addtwo())


const addtwoo =() =>   (3+6);                           //implicit return

console.log(addtwoo())