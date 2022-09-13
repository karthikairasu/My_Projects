var Rx = require('rx');

var myAsyncComputation = function(name,callback){
    setTimeout(()=>{
        callback(null,'Finished computation for '+name);
},100);
};

var observableFromCallback = Rx.Observable.fromCallback(myAsyncComputation);

observableFromCallback('John Doe')
        .subscribe((result)=> console.log(result));

        // Creating an observable from callbacks
        // In JavaScript, we have a lot of APIs that use callbacks to let you control the flow of the
        // application. We can use functional reactive programming to have better control of it. We
        // can use observables to wrap callbacks (following the Node.js callback pattern). This way,
        // we can reuse and compose these callbacks.
        // To do so, we can use the fromCallback() method. It has the following signature:
        //  Rx.Observable.fromCallback(func,[context],[selector]);
        // The first argument is mandatory and the next two are optional. They are as follows:
        // func: This is the function that usually receives a callback when it finishes
        // context: This is the context to be used in the callback
        // selector: This is a function that takes the arguments from the callback to
        // produce a single item to be propagated by this observable

    

