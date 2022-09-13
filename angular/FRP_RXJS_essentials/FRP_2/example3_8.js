var Rx = require('rx');

Rx.Observable.generate(
    0,
    (i) => i<3,
    (i) => i+1,
    (i) => i
).subscribe((i) => console.log(i)); 





// Creating an observable from a sequence factory(eg loop): 

// Now that we have discussed how to create an observable from a sequence, let's see how we
// can create an observable from a sequence factory.

// RxJS has a built-in method called
// generate() that lets you create an observable from an iteration (such as a for() loop).

// This method has the following signature:

// Rx.Observable.generate(initialState, conditionFunction, iterationFunction,
// resultFactory, [scheduler]);


// In this method, the only optional parameter is the last one. A brief description of all the
// parameters is as follows:

// initialState: This can be any object, it is the first object used in the iteration

// conditionFunction: This is a function with the condition to stop the iteration

// iterationFunction: This is a function to be used on each element to iterate

// resultFactory: This is a function whose return is passed to the sequence

// scheduler: This is an optional scheduler

// Before checking out an example code for this method, let's see some code that implements
// one of the most basic constructs in a program: a for() loop. This is used to generate an
// array from an initial value to a final value. We can produce this array with the following
// code:

// var resultArray=[]; 
// for(var i=0;i < 3;i++){
//  resultArray.push(i)
// }
// console.log(resultArray);


// This code prints the following output:
//  [0,1,2]

// When you create a for() loop, you basically give to it the following: an initial state (the
// first argument), the condition to stop the iteration (the second argument), how to iterate
// over the value (the third argument), and what to do with the value (block). Its usage is very
// similar to the generate() method. Let's do the same thing, but using the generate()
// method and creating an observable instead of an array:



