(() => {
  let diff = (a,b) => {
    let sortedBySize = [a,b].sort(arr => arr.length)
    return sortedBySize[0].filter(
      (item) => {
        return (sortedBySize[1].indexOf(item) == -1)
      }
    )
  }

  console.log(diff([1,2,3,4],[1,2,5,3,4]))
})()
