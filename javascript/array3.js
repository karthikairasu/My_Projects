var item = [
                {name:"Apple", price:200, qty:5},
                {name:"Mouse", price:300, qty:10},
                {name:"Bag", price:500, qty:6},
                {name:"Laptop", price:5000, qty:30},
                {name:"Mobile", price:6000, qty:3},
                {name:"Moniter", price:4000, qty:1}
           ];

console.log("The Total Items Are : "+ item.length);
for(var i=0; i<item.length; i++){
    console.log("----------------");
    console.log("Name is : "+ item[i].name);
    console.log("Price is : "+ item[i].price);
    console.log("Qty is : "+ item[i].qty);
}