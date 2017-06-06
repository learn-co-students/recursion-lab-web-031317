function printString(string){
  console.log(string[0])
  if(string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else{
    return true
  }
}
function addToCart(){
    return undefined
}

function getCart(){
    return [{item: undefined}]
}

// 	let lastLetter = "";
// function reverseString(string){
// 	if (string.length > 1){
// 		lastLetter += string[string.length-1]
// 		let rString = string.substring(0, string.length-1)
// 		reverseString(rString)
// 	} 
// 	return lastLetter + string[0]
// }

function reverseString(string){
	if (string.length === 1){
		return string
	} else {
		// console.log(string.substring(0,string.length-1))
		return string[string.length-1] + reverseString(string.substring(0,string.length-1))
	}
}



function isPalindrome(string){
	if(string.length <= 1){
		return true
	} else if (string[0] === string[string.length-1]){
		let newString = string.substring(1,string.length-1)
		return isPalindrome(newString)
	} else { 
		return false
	}
}

function addUpTo(array, index){
	if (index < 1){
		return array[0]
	} else {
		return array[0] + addUpTo(array.slice(1, array.length), index -1 )
	}
}
		
function maxOf(array){
	if (array.length === 1){
		return array[0]
	} else if(array[0] > array[1]) {
			return maxOf([array[0]].concat(array.slice(2)))
	} else if (array[1] > array[0]) {
			let newArr = array.slice(1)
			return maxOf(newArr)
	} return array[0]	
}

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


