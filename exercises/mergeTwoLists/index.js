var mergeTwoLists = function(l1, l2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < l1.length || j < l2.length) {
    if (l1[i] <= l2[j]) {
      result.push(l1[i])
      result.push(l2[j])
    } else {
      result.push(l2[j]);
      result.push(l1[i]);
    }
    i++;
    j++;
  }
  return result;
};