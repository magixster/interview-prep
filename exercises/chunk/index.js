// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let result = [];
    let idx = 0;
    while (idx < array.length) {
      result.push(array.slice(idx, idx + size))
      idx += size;
    }
    return result
  }

  // function chunk(array, size) {
  //   let result = [];
  //   for (let element of array) {
  //     const lastChunk = result[result.length - 1];
  //     if (!lastChunk || lastChunk.length === size) {
  //       result.push([element])
  //     } else {
  //       lastChunk.push(element)
  //     }
  //   }
  //   return result
  // }

// function chunk(array, size) {
//   let result = [];
//   const subArrayCanBeAdded = Math.floor(array.length / size);
//   let lastElIndex, firstElIndex;
//   for (let i = 1; i <= subArrayCanBeAdded; i++) {
//     lastElIndex = size * i;
//     firstElIndex = lastElIndex - size;
//     result.push(array.slice(firstElIndex, lastElIndex))
//   }
//   if (lastElIndex !== array.length) result.push(array.slice(lastElIndex, array.length))
//   return result
// }

module.exports = chunk;
