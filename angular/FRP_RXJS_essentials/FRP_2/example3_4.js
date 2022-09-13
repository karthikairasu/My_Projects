var Rx = require('rx');

var set = new Set([0,1,2]);

Rx.Observable
    .from(set)
    .subscribe((a)=>console.log(a));



    // Creating an Observable from Set() 
    // We can implement it for a set as follows:


