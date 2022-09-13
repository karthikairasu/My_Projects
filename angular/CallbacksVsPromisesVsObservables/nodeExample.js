
let fs = require("fs");  // file system  

function rFile(filename) { // "example.txt"
    return new Promise(function(resolve, reject) {  

        // trigger the asynchronous operation
        fs.readFile(filename, { encoding: "utf8" }, function(err, contents) { 

            // check for errors
            if (err) {
                reject(err);
                return;
            }

            // the read succeeded
            resolve(contents);  

        });
    });
}

let p = rFile("example.txt"); //fulfilled

// listen for both fulfillment and rejection
p.then(function(contents) {
    // fulfillment
    console.log(contents); 
}, function(err) { //null
    // rejection
    console.error(err.message);   
});


