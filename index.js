function printString(string){
  console.log(string[0])
  if(string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  }else{
    return true
  }
}

function reverseString(string){
  if (string.length === 1) {
    return string
  }else{
    return string.slice(-1) + reverseString(string.slice(0, string.length - 1))
  }
}

function isPalindrome(string){
  if (string.length === 1){
    return true
  }else{
    if (string[0] === string[string.length - 1]){
      return isPalindrome(string.slice(1, string.length - 1))
    }else{
      return false
    }
  }
}

function addUpTo(array, index){
  if (index < 1){
    return array[0]
  }else{
    return array[0] + addUpTo(array.slice(1), index - 1)
  }
}

function maxOf(array){
  if (array.length === 1){
    return array[0]
  }else{
    if (array[0] >= array[array.length - 1]){
      array.splice(-1, 1)
      return maxOf(array)
    }else{
      return maxOf(array.slice(1))
    }
  }
}

function includesNumber(array, number){
  if (array.length === 0){
    return false
  }else if (array[0] === number){
    return true
  }else{
    return includesNumber(array.slice(1), number)
  }
}
