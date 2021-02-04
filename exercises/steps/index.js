// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n, row = 0, str = '') {
  if (row === n) {
      return;
  }
  if (n === str.length) {
      console.log(str);
      return steps(n, row + 1);
  }
  if (str.length <= row) {
      str += '#';
  } else {
      str += ' ';
  }
  steps(n, row, str);
}

// function steps(n) {
//   if (n < 1) return;
//   for (let row = 0; row < n; row++) {
//     let str = '';
//     for(let col = 0; col < n; col++) {
//         if (row >= col) str += '#';
//       else str += ' ';
//     }
//     console.log(str);
//   }
// }

module.exports = steps;
