var a = "1234A";
if(isNaN(a)){ //isNaN is enter value string (not a number)
    console.log( a + " is string and no of char are : "+ a.length);
}else{
        if(a%2==0){
            console.log(a + " is number and it is even");
        }else{
            console.log(a + " is number and it is odd");
        }
}

var b = 100;
var c = parseInt(a)+b; //parseInt is convert string to number
console.log(c);