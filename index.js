function printString(string) {
  console.log(string[0])
  if(string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
    //return string[0]
  }
}

//addToCart('pizza');//???

////


//got this from here and refactored: https://stackoverflow.com/questions/4859208/recursive-string-reversal-function-in-javascript
function reverseString(string) {
    if (string.length > 1) {
        return reverseString(string.substr(1)) + string.charAt(0)
    } else {
      return string.charAt(0) //first letter
    }
}



//got this here: https://gist.github.com/marufsiddiqui/9938268
function isPalindrome(string) {
    if (string.length === 0 || string.length === 1) {
        return true;
    }

    if (string[0] === string[string.length - 1]) {
         return isPalindrome( string.slice(1, string.length - 1) )
      //  return isPalindrome( string.substr(1, strLen - 1) )
    }
    return false
}



///

//got this from classmate:

//expect(addUpTo([1, 4, 5, 3], 2)).toEqual(10)

function addUpTo(array, index) {
    if (index < 1) {
        return array[0]
    }
    else {
      //array.splice( (index+1), 1) //remove 1 item at index position
      //return array.shift() + addUpTo(array) //shift() method removes the first element from an array and returns that element
      return array[0] + addUpTo(array.slice(1, array.length), index -1 )
    }
}



//got this from here: https://stackoverflow.com/questions/33534790/finding-maximum-value-in-array-recursively
  function maxOf(numArray)
  {
      // copy the given array
      let nums = numArray.slice();

      // base case: if we're at the last number, return it
      if (nums.length == 1) { return nums[0]; }

      // check the first two numbers in the array and remove the lesser
      if (nums[0] < nums[1]) { nums.splice(0,1); }
      else { nums.splice(1,1); }

      // with one less number in the array, call the same function
      return maxOf(nums);
  }




  ////

//  includesNumber([1, 4, 5, 3], 5)).toEqual(true)

//  includesNumber([1, 4, 2, 3], 5)).toEqual(false)



//if array includes number, return true
//else, return false
  // function includesNumber(array, number) {
  //   if ( array.includes(number) ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

//got this from classmate:
function includesNumber(array, number){
  console.log(array, number)
  if (array[0] === number){
    return true
  } else if (array.length === 1 && array[0] !== number) {
    return false
  }else if (array[0]!== number){
    let arr = array.slice(1)
    return includesNumber(arr, number)
  }
}
