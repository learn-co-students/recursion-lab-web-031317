function printString(string) {
    console.log(string[0])
    if (string.length > 1) {
        printString(string.substring(1, string.length))
    } 

    return true
}


function reverseString(string) {
    if (string.length === 1) {
        return string[0]
    } 

    return reverseString(string.slice(1)) + string[0]
}


function isPalindrome(string) {
    if (string.length === 0 || string.length === 1) {
        return true
    }

    if (string[0] === string[string.length - 1]) {
        return isPalindrome( string.slice(1, string.length - 1) )
    }

    return false
}


function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    } else {
        return array.shift() + addUpTo(array, --index)
    }
}

function maxOf(nums) { // Divide and Conquer algorithm
    if (nums.length === 1) { return nums[0] } // base case: if we're at the last number, return it
    nums[0] < nums[1] ? nums.splice(0, 1) : nums.splice(1, 1) // check the first two numbers in the array and remove the lesser
    return maxOf(nums) // with one less number in the array, call the same function
}

function includesNumber(array, number) {
    if (array.length > 0) {
        if (array[0] === number ) {
            return true
        } else { 
            return includesNumber(array.slice(1), number)
        }
    }
    
    return false
}