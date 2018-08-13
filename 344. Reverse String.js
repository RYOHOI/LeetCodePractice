/* Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh". */

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  var slength = s.length
  var steps = Math.floor(slength / 2)
    // for (var i = 0; i <= steps; i++) {
    //   console.log(s)
    //   var char = s[i]
    //   s[i] = s[slength - i]
    //   s[slength - i] = char
    // }
  return s
};

console.log(reverseString('asdfdddsa'))