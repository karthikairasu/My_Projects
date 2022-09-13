var Rx = require('rx');

var observableFromArgumentsFactory = function(){
    return Rx.Observable.from(arguments);
};
observableFromArgumentsFactory(0,1,2)
    .subscribe((a)=>console.log(a));

//_____________________________________________________________________

// We can also use this method to create an observable from an arguments object. To do this,
// we need to run from() in a function. This way, we can access the arguments object of the
// function. We can implement it with the following code:

