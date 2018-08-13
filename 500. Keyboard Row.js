/* Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet. */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  // 0 ~ 9, 10 ~ 18, 19 ~ 25
  var keys = [
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
    'z', 'x', 'c', 'v', 'b', 'n', 'm'
  ]
  var rowIndex = [
    [0, 9],
    [10, 18],
    [19, 25]
  ]
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase();
    if (word.length < 2) continue
    var charIndex = []
    for (var j = 0; j < word.length; j++) {
      charIndex.push(keys.indexOf(word[j]))
    }
    var whichRow
    if (charIndex[0] <= 9) whichRow = 0
    else if (charIndex[0] <= 18) whichRow = 1
    else whichRow = 2
    for (var k = 1; k < charIndex.length; k++) {
      if (!(charIndex[k] <= rowIndex[whichRow][1] && charIndex[k] >= rowIndex[whichRow][0])) {
        words.splice(i, 1)
          // console.log('words', words)
        i--
        break
      }
    }
  }
  return words
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]))