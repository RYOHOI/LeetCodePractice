/* Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, 
such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, 
and str contains lowercase letters separated by a single space. */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var words = str.split(' '),
    loops = words.length
  var positions = [],
    uniqueWords = []
  for (var i = 0; i < loops; i++) {
    if (uniqueWords.indexOf(words[i]) == -1) {
      uniqueWords.push(words[i])
      positions.push([i])
    } else {
      positions[uniqueWords.indexOf(words[i])].push(i)
    }
  }
  console.log(positions, uniqueWords)
  var positionsP = [],
    uniqueP = []
  for (var i = 0; i < pattern.length; i++) {
    if (uniqueP.indexOf(pattern[i]) == -1) {
      uniqueP.push(pattern[i])
      positionsP.push([i])
    } else {
      positionsP[uniqueP.indexOf(pattern[i])].push(i)
    }
  }
  console.log(positionsP, uniqueP)
  if (positions.length != positionsP.length || uniqueP.length != uniqueWords.length) return false
  for (var i = 0; i < uniqueP.length; i++) {
    if (positions[i].length != positionsP[i].length) return false
    for (var j = 0; j < positionsP.length; j++) {
      if (positionsP[i][j] != positions[i][j]) return false
    }
  }
  return true
};


console.log(wordPattern("abc", "b c a"))