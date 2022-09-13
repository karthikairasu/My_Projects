var Rx = require('rx');

Rx.Observable
    .range(0, 4)
    .subscribe((i)=>console.log(i)); 



//     Creating an observable using range ():

// Another common source of data for observables are ranges. With the range() method, we
// can easily create an observable for a sequence of values in a range. The range() method
// has the following signature:

// Rx.Observable.range(first, count, [scheduler]);

// The last parameter in the following list is the only optional parameter in this method:

// first: This is the initial integer value in the sequence

// count: This is the number of sequential integers to be iterated from the beginning
// of the sequence

// scheduler: This is used to generate the values

