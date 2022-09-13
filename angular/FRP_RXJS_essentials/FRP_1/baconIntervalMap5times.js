var Bacon = require("baconjs");

Bacon
    .interval(1000) // Event Stream/Dependency -> state change -> pub...

    .take(5) // subscriber/Dependent & Dependency/Pub.... hybird operator

    .map(()=>new Date()) // subscriber/Dependent & Dependency/Pub....Date/Data   hybird operator

    .onValue((currentDate)=>console.log(currentDate));


    // Our new code is that simple. We don't need to change the stream source, the mapping
    // function, nor the subscription function; we just need to take only five events from the
    // stream.This is the idea of adding operators between event streams & 
    // observables. 








