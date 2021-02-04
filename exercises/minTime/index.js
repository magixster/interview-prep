function minTime(files, numCores, limit) {
  files
  numCores
  limit
  let result = 0, hasDividedWorkForFilesCount = 0;
  if (numCores === 1) return files.reduce((acc, val) => acc + val, 0);
  for (let fileLines of files) {
    let fileCanBeDividedEqually = fileLines >= numCores && fileLines % numCores === 0;
    if (fileCanBeDividedEqually && hasDividedWorkForFilesCount < limit) {
      result += fileLines / numCores;
      hasDividedWorkForFilesCount++;
    } else {
      result += fileLines;
    }
  }
  return result;
}