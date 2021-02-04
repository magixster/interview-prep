// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  return JSON.stringify(cleanStringA.split('').sort()) === JSON.stringify(cleanStringB.split('').sort())
}


// function getCharMap(string) {
//   let charMap = {};
//   for (let char of string) {
//     if (char in charMap) {
//       charMap[char] = charMap[char] + 1;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const cleanStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   const cleanStringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   if (cleanStringA.length !== cleanStringB.length) return false;

//   let stringACharMap = {}, stringBCharMap = {};

//   stringACharMap = getCharMap(cleanStringA);
//   stringBCharMap = getCharMap(cleanStringB);


//   for (let char in stringACharMap) {
//     if (stringACharMap[char] !== stringBCharMap[char]) return false
//   }
//   return true;
// }

module.exports = anagrams;
