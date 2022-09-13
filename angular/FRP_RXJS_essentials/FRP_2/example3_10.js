var Rx = require('rx');

Rx.Observable
    .interval(1000)
    .subscribe((i)=> console.log(i)); 



//     Creating an observable using period of time
// In the previous chapter, we discussed how to create timed sequences in bacon.js. In RxJS,
// we have two different methods to implement observables emitting values with a given
// interval. The first method is interval(). This method emits an infinite sequence of
// integers starting from one every x milliseconds; it has the following signature:

// Rx.Observable.interval(interval, [scheduler]);

// The interval parameter is mandatory, and the second argument is optional:
// interval: This is an integer number to be used as the interval between the
// values of this sequence
// scheduler: This is used to generate the values