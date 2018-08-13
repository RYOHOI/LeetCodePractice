/* Given a string, you need to reverse the order of characters in each word within a sentence
while still preserving whitespace and initial word order.

Example 1:
  Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string. */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var words = s.split(' ')
  for (var i = 0; i < words.length; i++) {
    var word = words[i].split('')
    for (var j = 0; j < Math.floor(word.length / 2); j++) {
      var cache = word[j]
      word[j] = word[word.length - 1 - j]
      word[word.length - 1 - j] = cache
    }
    words.splice(i, 1, word.join(''))
  }
  return words.join(' ')
};

console.log(reverseWords("Let's take LeetCode contest"))