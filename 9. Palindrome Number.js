// Determine whether an integer is a palindrome. Do this without extra space.

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.

var isPalindrome = function(x) {
    if (x < 10 && x >= 0) return true
    if (x < 0 || x % 10 === 0) return false
    var reversedHalf = 0
    while (reversedHalf < x) {
        var modVal = x % 10
        x = (x - modVal) / 10
        reversedHalf = reversedHalf * 10 + modVal
    }
    if (reversedHalf == x) return true
    else if (((reversedHalf - reversedHalf % 10) / 10) == x) return true
    else return false
};

console.log(isPalindrome(120921))