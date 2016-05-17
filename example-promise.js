// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Scottsdale', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Scottsdale').then(function (temp) {
//   console.log('promise success', temp)
// }, function (err) {
//   console.log('promise err', err)
// })

// Challenge Area

function addPromise (a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
    resolve(a + b);
  } else {
    reject('You cannot add what is not a number');
  }
  });
}

addPromise(6, 36).then(function(sum) {
  console.log('promise success', sum)
}, function(err) {
  console.log('promise err', err)
})

addPromise(6, 'hi').then(function(sum) {
  console.log('promise success (should not show up)', sum)
}, function(err) {
  console.log('promise err (should show)', err)
})
