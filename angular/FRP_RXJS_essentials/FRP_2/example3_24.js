var Rx = require('rx');

Rx.Observable
    .throw(new Error('AN ERROR HAPPENED'))
    .subscribe((data)=>console.log(data)); 

//     Creating an observable from an error:

//     We can use an observable to wrap an error; this way, we will have all the operators and
//     compositions of the concerned observable.
//     RxJS gives us two methods to wrap an error. Both work in exactly the same way and are
//     basically aliases of each other.
//     The methods to wrap an error to an observable are throw() and throwError(). We also
//     have a method called throwException(), but this method is deprecated and should not be
//     used anymore.

//     Both methods have the same signature, as follows:
// Rx.Observable.throw(err,[scheduler]);
// Rx.Observable.throwError(err,[scheduler]);
// The first method is the error you want to wrap around the observable and it is mandatory;
// the second is optional:
// err: This is any object representing an error
// scheduler: This is used to generate the sequence of the observable

