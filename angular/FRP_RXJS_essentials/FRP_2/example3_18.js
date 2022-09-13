var Rx = require('rx');

Rx.Observable
    .just('Hello World')
        .subscribe((i)=> console.log(i));

        // Creating an observable from a single value

        
