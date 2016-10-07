function chunkifyArray(array, chunkSize) {
  if(array.length <= chunkSize || chunkSize == 1)
    return array

  let head = array.slice(0, chunkSize)
  let tail = array.slice(chunkSize, array.length)

  if (tail.length > chunkSize)
    return [head, ...chunkifyArray(tail, chunkSize)]
  else
    return [head, tail]
}

console.log(chunkifyArray([2,3,4,6,2,3,4], 1))
