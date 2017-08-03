// Code your solution here!
function printString(string){
  console.log(string[0])
  if (string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length === 1){
    return string
  } else {
    let length = string.length - 1
    return string[length] + reverseString(string.substring(0, string.length - 1))
  }
}

function isPalindrome(string){
  if (string.length <=1){
    return true
  } else if (string[0] === string[string.length-1]){
    return isPalindrome(string.substring(1, string.length-1))
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (index < 1){
    return array[0]
  } else {
    return array[0] + addUpTo(array.slice(1), index-1)
  }
}

function maxOf(array){
  if (array.length === 1) {
    return array[0]
  } else if (array[0] > array[1]) {
    return maxOf([array[0]].concat(array.slice(2)))
  } else {
    return maxOf(array.slice(1))
  }
}

function includesNumber(array, number) {
  if (array[0] === number){
    return true
  } else if (array.length === 1 && array[0] !== number) {
    return false
  } else {
    return includesNumber(array.slice(1), number)
  }
}
