function printString(string) {
  console.log(string[0])
  if(string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

function addToCart() {
	return undefined
}

function getCart() {
	return [{item: undefined}]
}

function reverseString(string) {
	if (string.length <= 1) {
		return string
	} else {
		return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
	}
}

function isPalindrome(string) {
	let x = 0
	let y = string.length - 1
	if (string.length <= 1) {
		return true
	} else if (string[x] === string[y]) {
		return isPalindrome(string.substring(1, string.length - 1))
	} else {
		return false
	}
}

function addUpTo(arr, idx) {
	if( idx < 1 ) {
		return arr[idx]
	} else {
		return arr[0] + addUpTo(arr.slice(1, arr.length ), (idx - 1) )
	}
}

function maxOf(array) {
	if(array.length < 2) {
		return array[0]
	} else if (array[0] > array[1]) {
		return maxOf([array[0]].concat(array.slice(2)))
	} else if (array[0] < array[1]) {
		return maxOf(array.slice(1))
	}
}

function includesNumber(array, num) {
	if(array.length < 1 && array[0] !== num) {
		return false
	} else if (array[0] === num) {
		return true
	} else {
		return includesNumber(array.slice(1), num)
	}
}

