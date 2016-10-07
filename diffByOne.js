function diffByOne(a,b) => {
  return [a,b]
    .sort(arr => arr.length)[0]
    .filter(item => sortedBySize[1].indexOf(item) == -1)
}
