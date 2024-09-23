// ALL types of conversion

// Converting Values to Strings

let v1 = 123;
let v2 = 333;
	
// Conversion of number to string
console.log("Type Of v1 before conversion: " + typeof v1 + 
" and Type of v2 before conversion: " + typeof v2);

console.log("Type Of v1 after conversion: " + typeof String(v1) + 
" and Type of v2 after conversion: " + typeof v2.toString());


//Converting Boolean into String

console.log("Type Of false before conversion: " + typeof false + 
    " and Type of true before conversion: " + typeof true);
    
    // Converting types explicitly to string
    console.log("Type Of false after conversion: " + typeof String(false) + 
    " and Type of true after conversion: " + typeof (true).toString());
    