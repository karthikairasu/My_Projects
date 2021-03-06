console.log("Function with required parameter");

function one(a , b){
    var c = a+b;
    console.log("The function one say : "+ c);
}


one(100 , 200);
one(100);


// function with optional parameter

function two(a=null , b=null){
    var c = a+b;
    console.log("The function two say : "+ c);
}

two(100 , 200);
two(100);
two();