/* First promise. */

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Delivered!"); 
  }, 5000);
});

firstPromise.then((punchlineMessage) => {
  console.log(`Promises... ${punchlineMessage}`);
});

// (5 second later) "Promises... Delivered!"
