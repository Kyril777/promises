Source: WebDevSimplified

// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a == 3) { 
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// });

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message)
// })

const userLeft = false
const userWatchingCatMeme = true

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//    errorCallback({
//      name: 'User Left',
//       message: ':('
//     })
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'User Watching Cat Meme',
//       message: 'WebDevSimplified < Cat'
//     })
//   } else {
//    callback('Thumbs up and Subscribe') 
//   }
// }

// watchTutorialCallback((message) => {
//   console.log('Success: ' + message)
// }, (error) => {
//   console.log(error.name + ' ' + error.message)
// })

function watchTutorialCallback() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
              name: 'User Left',
              message: ':('
            })
          } else if (userWatchingCatMeme) {
            reject({
              name: 'User Watching Cat Meme',
              message: 'WebDevSimplified < Cat'
            })
          } else {
           resolve('Thumbs up and Subscribe') 
          }
    })
  }

  watchTutorialCallback().then((message) => {
    console.log('Success: ' + message)
  }).catch((error) => {
    console.log(error.name + ' ' + error.message)
  })
