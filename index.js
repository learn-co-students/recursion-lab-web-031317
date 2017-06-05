function printString(string){
  console.log(string[0])
  if(string.length > 1 ){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string){
  if (string.length > 1) {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1))
  } else {
    return string[string.length - 1]
  }
}

function isPalindrome(string){
  if (string.length > 1){
    if (string[0] === string[string.length -1]){
      return isPalindrome(string.slice(1, -1))
    } else {
      return false
    }
  } else {
    return true
  }
}

function addUpTo(array, index){
  if ( array.length > index ) {
    return array[0] + addUpTo(array.slice(1), index)
  } else {
    return array[0]
  }
}

// function maxOf(array){
//   if ( array.length > 1 ) {
//     if (array[0] < maxOf(array.slice(1))) {
//       return maxOf(array.slice(1))
//     } else {
//       return array[0]
//     }
//   } else {
//     return array[0]
//   }
// } // called 11 times instead of 4

function maxOf(array){
  if (array.length > 1){
    if (array[1] > array[0]){
      return maxOf(array.slice(1))
    } else {
      return maxOf(array.slice(0,1).concat(array.slice(2,array.length)))
    }
  } else {
    return array[0]
  }
}

function includesNumber(array, element){
  if ( array.length > 1 ) {
    if (array[0] != element) {
      return includesNumber(array.slice(1), element)
    } else {
      return true
    }
  } else {
    return false
  }
}
