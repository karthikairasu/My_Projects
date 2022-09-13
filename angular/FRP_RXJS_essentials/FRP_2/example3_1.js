var Rx = require('rx');

Rx.Observable
    .from([0,1,2]) // Observable -> state change -> pub....
    .subscribe((a)=>console.log(a)); // Oberserver / Subscriber

//_____________________________________________

// Creating an observable from iterable objects: 

// We can create an observable from iterable objects using the from() method. An iterable in
// JavaScript can be an array (or an array-like object) or other iterates added in ES6 (such as
// Set() and map()).

// All observables created "from"  method are cold observables. As discussed before, this
// means it fires the same sequence for all the observers.


// ___________________________________________________


// The from() method has the following signature:

// Rx.Observable.from(iterable,[mapFunction],[context],[scheduler]);
// ___________________________________________________

// Usually, you will pass only the first argument. Others arguments are optional; you can see
// them here:

// iterable: This is the iterable object to be converted into an observable (can be
//            an array, set, map, and so on)

// mapFunction: This is a function to be called for every element in the array to
//             map it to a different value

// context: This object is to be used when mapFunction is provided

// scheduler: This is used to iterate the input sequence



// ___________________________________________________





