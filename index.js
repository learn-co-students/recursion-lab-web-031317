function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
  } else {
    return string
  }
}

function isPalindrome(string){
  if (string.length > 1) {
    if (string[0] === string[string.length - 1]) {
      let substring = string.substring(1, string.length - 1)
      return isPalindrome(substring)
    } else {
      return false
    }
  } else {
    return true
  }
}

function addUpTo(array, n){
  if (n > 0) {
    let subarray = array.slice(1)
    let index = n - 1
    return array[0] + addUpTo(subarray, index)
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if ( array.length > 1 ) {
    if ( array[0] <= array[array.length - 1]) {
      let subarray = array.slice(1, array.length)
      return maxOf(subarray)
    } else {
      let subarray = array.slice(0, array.length -1)
      return maxOf(subarray)
    }
  } else {
    return array[0]
  }
}

function includesNumber(array, element){
  if (array.length > 0) {
    if ( array[0] === element ) {
      return true
    } else {
      let subarray = array.slice(1, array.length)
      return includesNumber(subarray, element)
    }
  } else {
    return false
  }
}
