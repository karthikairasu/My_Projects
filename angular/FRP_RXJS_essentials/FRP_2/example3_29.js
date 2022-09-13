var Rx = require('rx');

Rx.Observable.create(function(source){ // source= new Rx.Subject(); -> "Pusable Observables" - onNext(), onError(), onCompleted()
    source.onNext(0); // 0  -> stange change -> pub...
    // source.onNext(1);
    // source.onNext(2);
    // source.onCompleted();
}).subscribe((i)=> console.log(i));