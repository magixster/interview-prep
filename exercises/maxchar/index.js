// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charCountMap = {};
  for (let char of str) {
    charCountMap[char] = charCountMap[char] + 1 || 1;
  }
  return Object.entries(charCountMap).reduce((acc, val) => {
    return acc[1] > val[1] ? acc : val
  })[0]
}

// function maxChar(str) {
//   const charCount = {};
//   for (let char of str) {
//     if (!charCount[char]) {
//       charCount[char] = 1;
//     } else {
//       charCount[char]++;
//     }
//   }
//   return Object.entries(charCount).reduce((acc, val) => {
//     return acc[1] > val[1] ? acc : val
//   })[0]
// }

// function maxChar(str) {
//   const charCount = {};
//   for (let char of str) {
//     if (char in charCount) {
//       charCount[char] = charCount[char] + 1;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   return Object.entries(charCount).reduce((acc, val) => {
//     return acc[1] > val[1] ? acc : val
//   })[0]
// }

module.exports = maxChar;
