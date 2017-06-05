function printString(string){
  if (string.length > 1){
    console.log(string[0])
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    console.log(string[0])
  }
}

function reverseString(string){
  return string.length === 1 ? string : reverseString(string.slice(1)) + string.charAt(0)
}


function isPalindrome(string){
  if (string.length === 1 ) {
    return true
  } else {
    if (string[0] === string[string.length - 1]){
      let sliced = string.slice(1, string.length - 1)
      return isPalindrome(sliced)
    } else {
      return false
    }
  }
}


function addUpTo(array, index){
  if (index < 1){
    return array[0]
  } else {
    let slicedArr = array.slice(1)
    return addUpTo(slicedArr, index - 1) + array[0]
  }
}

function maxOf(array){
  if (array.length === 2){
    return array[0] > array[1] ? array[0] : array[1]
  } else {
    let halfArr = Math.round(array.length/2)
    let firstHalf = array.slice(0, halfArr)
    let secondHalf = array.slice(halfArr)

    let newFirstHalf = []
    if (firstHalf.length > 1) {
      if (firstHalf[0] > firstHalf[firstHalf.length]) {
        newFirstHalf = firstHalf.slice(1)
      } else {
         newFirstHalf = firstHalf.slice(0, firstHalf.length - 1 )
      }
    } else {
      newFirstHalf = secondHalf
    }
    let newSecondHalf = []
    if (secondHalf.length > 1){
      if (secondHalf[0] > secondHalf[secondHalf.length]) {
        newSecondHalf = secondHalf.slice(1)
      } else {
        newSecondHalf = secondHalf.slice(0, secondHalf.length - 1 )
      }
    } else {
      newSecondHalf = secondHalf
    }
    return maxOf(newFirstHalf.concat(newSecondHalf))
  }
}

function includesNumber(array, num){
  if (array.length === 1) {
    return array[0] === num ? true : false
  } else {
    if (array[0] === num) {
      return true
    } else {
      return includesNumber(array.slice(1), num)
    }
  }
}
