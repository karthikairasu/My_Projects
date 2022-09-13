var Rx = require('rx');

Rx.Observable
    .fromPromise(Promise.resolve('Hello World'))
.subscribe((result)=> console.log(result));

// Creating an observable from a promise:

// The promises are objects that hold the result of an asynchronous computation. They are
// becoming more common now. One of the cool things about promises is that you can
// compose them with other promises or synchronous values, giving you an extra layer of
// abstraction over asynchronous computations. We can wrap a promise into an observable.
// This provides us a lot more power to handle the result of our computation using the
// operators from RxJS.

// This method has the following signature:
// Rx.Observable.fromPromise(promise);
// It receives only one parameter:
// promise: This is a Promises/A+ object or a factory function that returns an A+
// Promise object.





