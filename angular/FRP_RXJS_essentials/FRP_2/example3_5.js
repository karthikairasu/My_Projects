var Rx = require('rx');

var map = new Map([['key0',0],['key1',1],['key2',2]]);
Rx.Observable
    .from(map)
    .subscribe((a)=>console.log(a));


        // Creating an Observable from Map() 
    // We can implement it for a set as follows:

    

