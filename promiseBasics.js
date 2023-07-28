/* Basic Program with Promise. */

let count = new Promise(function (resolve, reject) {
  resolve("Promise kept");
});

// Execute after promise is resolved
count
  .then(function success(result) {
    console.log(result);
  })

  .then(function success() {
    console.log("More multiple functions...");
  });

/*
Promise kept
More multiple functions...
*/


/* Simple program with a promise. */
const statement = false;

let evalStatement = new Promise(function (resolve, reject) {
    try {
        if (statement) {  
            resolve("The statement is true.");
        } else {
            reject("The statement is false.")
        };
    } catch {
        ("ERROR");
    }
});

console.log(evalStatement);

/*
Promise { <rejected> 'The statement is false.' }
node:internal/process/promises:288
            triggerUncaughtException(err, true );
            ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "The statement is false.".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
node:internal/process/promises:288
            triggerUncaughtException(err, true  fromPromise );
            ^
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "The statement is false.".] {
  code: 'ERR_UNHANDLED_REJECTION'
}

*/
