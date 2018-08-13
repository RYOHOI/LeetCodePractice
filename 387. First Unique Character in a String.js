/* Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters. */

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function(s) {
  var chars = s.split(''),
    duplicates = []
  for (var i = 0; i < s.length; i++) {
    if (duplicates.indexOf(chars[i]) == -1 && chars.indexOf(chars[i], i + 1) == -1) {
      return i
    } else {
      if (duplicates.indexOf(chars[i]) == -1) {
        duplicates.push(chars[i])
      }
    }
  }
  return -1
};

console.log(firstUniqChar('ddeecds'))