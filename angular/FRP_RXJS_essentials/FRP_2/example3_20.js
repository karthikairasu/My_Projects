var Rx = require('rx');

Rx.Observable
    .defer(function(){
        return Rx.Observable.just('Hello World');
    })
    .subscribe((data)=>console.log(data));

    // Creating an observable from a factory function
    // There is a method in RxJS where you can create an observable from a function that returns
    // an observable or an observable factory function; it is called defer(). The signature of this
    // method is as follows:
    // Rx.Observable.defer(factoryFunction);
    // It receives only one parameter, and this parameter is mandatory:
    // factoryFunction: This is a function that returns an observable

    