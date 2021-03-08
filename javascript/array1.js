var item = ["Mouse", 300, "computer", "mobile", "Bag"];
/*
    Array : is collection of similar data type 
    All the value inside array is called : element
    All the elements will have some index position
    Array elements start from 0 index position by default
    Example : item[0] = Mouse
              item[1] = 300
              item[item.length-1] = Bag
*/
for(var i=0; i<item.length; i++){
    console.log( item[i] );
}

console.log("Array in desc order");
for( var i=item.length-1; i>=0; i--){
    console.log( item[i] +" is Available on :"+i);
}