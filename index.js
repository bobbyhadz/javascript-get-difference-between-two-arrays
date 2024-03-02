// EXAMPLE 1 - Get the Difference between two Arrays in JavaScript

const arr1 = ['a', 'b', 'c', 'd'];
const arr2 = ['a', 'b'];

function getDifference(a, b) {
  return a.filter(element => {
    return !b.includes(element);
  });
}

// 👇️ ['c', 'd']
console.log(getDifference(arr1, arr2));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the complete difference between two arrays

// const arr1 = ['a', 'b'];
// const arr2 = ['a', 'b', 'c', 'd'];

// function getDifference(a, b) {
//   return a.filter(element => {
//     return !b.includes(element);
//   });
// }

// const difference = [
//   ...getDifference(arr1, arr2),
//   ...getDifference(arr2, arr1),
// ];

// console.log(difference); // 👉️ ['c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the difference between two arrays using a `Set` object

// function getDifference(a, b) {
//   const setB = new Set(b);

//   return a.filter(element => !setB.has(element));
// }

// function getSymmetricDifference(a, b) {
//   return getDifference(a, b).concat(getDifference(b, a));
// }

// const arr1 = ['a', 'b'];
// const arr2 = ['a', 'b', 'c', 'd'];

// const diff = getDifference(arr1, arr2);
// console.log(diff); // 👉️ []

// const symmetricDifference = getSymmetricDifference(arr1, arr2);
// console.log(symmetricDifference); // 👉️ ['c', 'd']

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Difference between two Arrays using Lodash

// import _ from 'lodash';

// const arr1 = ['a', 'b'];
// const arr2 = ['a', 'b', 'c', 'd'];

// const diff = _.difference(arr1, arr2);
// console.log(diff); // 👉️ []

// const symmetricDifference = _.xor(arr1, arr2);
// console.log(symmetricDifference); // 👉️ ['c', 'd']
