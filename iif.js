//immediately invoked function (IIF)

//think of a function wrap in a ----------------------()

(function hello(){              //named IIF
    console.log(`Hello`);
})();


(function hello1(name) {
    console.log(`${name}`);
})(`Nabhajit`);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Note--->if 2 or more IIF is called then ; should be given to terminate the previouse once

// IIFEs are used to encapsulate code and avoid polluting the global scope.
// They help create private variables and prevent naming collisions.
// They are useful for asynchronous operations, initialization, and keeping code organized.