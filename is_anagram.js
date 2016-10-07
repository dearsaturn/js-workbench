function is_anagram(a, b){
  if(typeof a === 'string' && typeof b === 'string'){
    return arrayDifference(wordCharArray(a), wordCharArray(b)).length == 0
  } else {
    throw "Invalid arguments"
  }
}

function wordCharArray(str){
  return str.toLowerCase().replace(/\W/g, '').split('')
}

function arrayDifference(a, b) {
  return a.filter(item => return b.indexOf(item) === -1)
}
