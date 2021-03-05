 
console.log("Types of user defined function \n");
var counter=1;
// Named function
function one(){
    counter++;
    console.log("From one -: "+ counter);
}

one();
// Named (or) Anonymous function
var two = function(){
    counter++;
    console.log("From two -:"+ counter);
}

two();

// Fat Arrow function
var three = () =>{
    counter++;
    console.log("From three -: "+ counter);
}

three();

// Parameterless Arrow function using single statement
var four = () => console.log("From four -: "+ (++counter));


four();