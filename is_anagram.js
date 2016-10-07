(() => {
  let is_anagram = function(a, b){
    if(typeof a === 'string' && typeof b === 'string'){
      return arrayDifference(wordCharArray(a), wordCharArray(b)).length == 0
    } else {
      throw "Invalid arguments"
    }
  }

  let wordCharArray = (str) => {
    return str.toLowerCase().replace(/\W/g, '').split('')
  }

  let arrayDifference = function(a, b) {
    return a.filter((item) => {
      return b.indexOf(item) === -1
    })
  }

  console.log(is_anagram('cover', 'cover'))
  console.log(is_anagram('carve', null))
})()
