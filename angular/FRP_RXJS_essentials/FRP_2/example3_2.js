var Rx = require('rx');

Rx.Observable
    .from([0,1,2], (a) => a*2)
    //.from([0,1,2], 
    // map(a) => a*2)
    .subscribe((a)=>console.log(a));

//_______________________________________________

// Now let's introduce a minor change in our code, to add the mapFunction argument to it,
// instead of creating an observable to propagate the elements of this array. Let's use
// mapFunction to propagate the double of each element of the following array:




