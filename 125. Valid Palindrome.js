/* Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? 
This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var r = new RegExp('[a-zA-Z]', 'g')
  var s = s.toLowerCase().match(r)
  if (s == null) return true
  var loops = Math.floor(s.length / 2), j = s.length - 1
  for (var i = 0; i < loops; i++) {
    // console.log('loop')
    if (s[i] != s[j]) return false
    j--
  }
  return true
};

console.log(isPalindrome('0P'))