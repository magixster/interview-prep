// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let counters = [0];
  let tempArr = [root, 's'];

  while(tempArr.length > 1) {
    let traversedNode = tempArr.shift();
    if (traversedNode === 's') {
      counters.push(0);
      tempArr.push('s');
    } else {
      tempArr.push(...traversedNode.children);
      counters[counters.length - 1] += 1;
    }
  }
  return counters;
}

module.exports = levelWidth;
