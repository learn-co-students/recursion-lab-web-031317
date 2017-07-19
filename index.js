function printString(string){
  console.log(string[0])
  if(string.length > 1){
    // let addToCart = string.substring(1, string.length)
    let substring = string.substring(1, string.length)
    printString(substring)
  } else{
    // printString(addToCart);
    return true
  }
}

function reverseString (str) {
    if (str.length === 1){
      return str;
    } else {
      return str.slice(-1) + reverseString(str.slice(0,-1))
    }
}

function isPalindrome(str){
  if (str.length === 1){
    return true
  } else {
    if(str[0] === str.slice(-1)){
      return isPalindrome(str.slice(1,-1))
    } else {
      return false
    }
  }
}

function addUpTo(array,index){
  if(index < 1){
    return array[0]
  } else {
    return array[0] + addUpTo(array.slice(1), index - 1)
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } else {
    if (array[0] >= array.slice(-1)){
      array.splice(-1,1)
      return maxOf(array)
    }else{
      return maxOf(array.slice(1))
    }
  }
}

function includesNumber(array, num){
  if(array.length === 0){
    return false
  } else if (array[0] === num){
    return true
  }else{
    return includesNumber(array.slice(1), num)
  }
}
