function isPalindrome(str){
  let arr = str.toLowerCase().replace(/\W/g, '').split('')
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[(arr.length-1)-i])
      return false
  }
  return true
}
