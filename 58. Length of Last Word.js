// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
// return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:
// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s == '') return 0
    // remove empty space in the tail
    while (s[s.length - 1] == ' ') s = s.slice(0, s.length - 1)
    
    var count = 0, index = s.length - 1
    while (s[index] != ' ' && index >= 0) {
        count++
        index--
    }
    return count
};

console.log(lengthOfLastWord("Hello World"))