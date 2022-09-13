var Bacon = require("baconjs");
Bacon
    .interval(1000)   //  create an event stream, Event stream/observable ->state change-> publish...
    .onValue(         // Subscriber/ observer 
                      // cold observable demanding - immediate subscriber without not publish
    ()=> console.log(new Date())
);


// .interval() is used to create an event streams where events happen at a certain "x" interval. 

// .onValue() - refers to an observable subscribe method which listens to an event stream. 


// all observer - dependent
// observable - dependency

