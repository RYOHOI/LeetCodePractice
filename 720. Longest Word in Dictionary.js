/* Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30]. */

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  var group = []
  for (var i = 0; i < words.length; i++) {
    if (group[words[i].length - 1] == undefined) group[words[i].length - 1] = [words[i]]
    else group[words[i].length - 1].push(words[i])
  }
  // return group
  if (group.length == 1) return group[0][0]
  for (var i = 1; i < group.length; i++) {
    if (group[i] == undefined) {
      group.splice(i)
      break
    }
    for (var j = 0; j < group[i].length; j++) {
      var match = false
      for (var k = 0; k < group[i - 1].length; k++) {
        if (group[i][j].slice(0, group[i][j].length - 1) == group[i - 1][k]) {
          match = true
          break
        }
      }
      if (!match) {
        group[i].splice(j, 1)
        j--
      }
    }
  }
  while (group[group.length - 1].length == 0) group.pop()
    // return group
  var longestWords = group.pop(),
    charIndex = 0
  return longestWords.sort()[0]
};

console.log(longestWord(["m", "mo", "moc", "moch", "mocha", "l", "la", "lat", "latt", "latte", "c", "ca", "cat"]))