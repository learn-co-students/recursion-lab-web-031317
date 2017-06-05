function printString(string) {
  console.log(string[0])
  if(string.length > 1) {
    printString(string.substring(1, string.length))
  }
}

function reverseString(string) {
  if( string.length > 1 ) {
    return string[string.length - 1] + reverseString(
      string.substring(0, string.length - 1)
    )
  }
  return string[0]
}

function isPalindrome(string) {
  if(string.length > 1) {
    if(string[0] === string[string.length - 1]) {
      isPalindrome(string.substring(1, string.length - 1))
    } else {
      return false
    }
  }
  return true
}

function addUpTo(array, i) {
  if(i > 0) {
    return array[0] + addUpTo( array.slice(1), i - 1 )
  }
  return array[0]
}

function maxOf(array) {
  if( array.length > 1 ) {
    if( array[0] > array[1] ) {
      array.splice(0,2, array[0])
    } else {
      array.splice(0,2, array[1])
    }
    return maxOf(array)
  }
  return array[0]
}

function includesNumber(array, n) {
  if(array.length > 0) {
    if( array[0] === n ) {
      return true
    }
    return includesNumber(array.slice(1), n)
  }
  return false
}
