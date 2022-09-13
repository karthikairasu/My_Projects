var Rx = require('rx');

var observable = Rx.Observable.from([0,1,2]); 

observable.subscribe((a)=>console.log('first subscriber receives => '+a));

setTimeout(()=>{
    observable.subscribe((a)=>console.log('second subscriber receives => '+a));
},1000);





// All observables created from this method are cold observables. As discussed before, this
// means it fires the same sequence for all the observers. To test this behavior, create an
// observable and add an Observer to it; add another observer to it after a second:

