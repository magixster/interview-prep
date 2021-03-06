// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverseNum = n.toString().split('').reverse().join('');

  return parseInt(reverseNum) * Math.sign(n);
}

// function reverseInt(n) {
//   const reverseNum = (num) => parseInt(num.toString().split('').reverse().join(''))
//   if (n < 0) {
//     return parseInt('-' + reverseNum(Math.abs(n)))
//   }
//   return reverseNum(n);
// }

module.exports = reverseInt;
