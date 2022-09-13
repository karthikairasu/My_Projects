var Rx = require('rx');

Rx.Observable
    .of(0,1,2)
    .subscribe((i)=>console.log(i));

//     Creating an observable from arbitrary arguments
// You have already learned how to create an observable from a sequence using the from()
// method, but there is a way to create an observable from an arbitrary sequence of arguments.
// We can do this using the of() method.
// This method creates an observable that emits each argument passed to it.
// The of() method has the following signature:
// Rx.Observable.of(...args);

