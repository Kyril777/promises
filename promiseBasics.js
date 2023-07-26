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
