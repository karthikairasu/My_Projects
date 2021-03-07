var a = 100;
var b = 200;
var c = 300;
    console.log("A :" + a);
    console.log("B :" + b);
    console.log("C :" + c);
    console.log("-------------------------");
    
    if( (a>b) && (a>c) ){
        console.log("The higher value is : "+a);  
    }
    else if( (b>a) && (b>c) ){
        console.log("The higher value is : "+b);
    }
    else{
        console.log("The higher value is : "+c);
    }