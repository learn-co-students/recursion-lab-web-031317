function printString(str) {
  console.log(str[0])
  if (str.length > 1) {
    let substr = str.substring(1, str.length)
    printString(substr)
  } else {
    return true
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
  }

  return str[0]
}

function isPalindrome(str) {
  if (str.length > 1){
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.substring(1, str.length - 1))
    } else {
      return false
    }
  }
  return true
}

function addUpTo(arr, i) {
  if (i > 0) {
    return arr.shift() + addUpTo(arr, i - 1)
  }

  return arr[0]
}

function includesNumber(arr, num) {
  if (arr.length > 0) {
    if (arr.shift() === num) {
      return true
    } else {
      return includesNumber(arr, num)
    }
  }
  return false
}

function maxOf(arr) {
  if (arr.length > 1) {
    if (arr[0] > arr[1]) {
      arr.splice(1, 1)
      return maxOf(arr)
    } else {
      arr.splice(0, 1)
      return maxOf(arr)
    }
  } else {
    return arr[0]
  }
}
