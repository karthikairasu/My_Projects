var Rx = require('rx');

var promiseFactory = () => Promise.resolve('Hello World')
Rx.Observable
    .fromPromise(promiseFactory)
    .subscribe((result)=> console.log(result));

    // We can also use this method to create an observable from a factory function returning a
    // promise, as you can see in the following code:


