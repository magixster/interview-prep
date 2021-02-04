// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
  return str.split('').reverse().join('');
}

// function reverse(str) {
//   const strInArray = str.split('');
//   return strInArray.reduce((acc, val) => val + acc, '');
// }

// function reverse(str) {
//   const strInArray = str.split('');
//   return strInArray.reduce((acc, val) => val + acc, '');
// }

// function reverse(str) {
//   let reversed = '';
//   for (let char of str){
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   let revStr = '';
//   for (let i= str.length - 1; i >= 0; i--) {
//     revStr += str[i];
//   }
//   return revStr;
// }

module.exports = reverse;
