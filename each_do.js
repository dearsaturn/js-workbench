(() => {

  let randomString = () => {
    return Math.random().toString(36).substr(2, 5)
  }

  let arrayOf = (length, generatorFn) => {
    return [...new Array(length)].map(generatorFn)
  }

  let splitArray = (array, splitAt) => {
    if(array.length <= splitAt)
      return array

    let head = array.slice(0, splitAt)
    let tail = array.slice(splitAt, array.length)

    if (tail.length > splitAt)
      return [head, ...splitArray(tail, splitAt)]
    else
      return [head, tail]
  }

  console.log(splitArray(arrayOf(10, randomString), 3))
})()
