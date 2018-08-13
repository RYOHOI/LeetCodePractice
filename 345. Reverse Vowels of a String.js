/* Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y". */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var arr = s.split(''),
    vowels = ['a', 'e', 'i', 'o', 'u']
  if (s.length < 2) return s
  var rightIndex = s.length - 1,
    leftIndex = 0
  var rightHand = null,
    leftHand = null
  while (rightIndex > leftIndex) {
    if (vowels.includes(arr[leftIndex]) && leftHand == null) {
      leftHand = arr[leftIndex]
    }
    if (vowels.includes(arr[rightIndex]) && rightHand == null) {
      rightHand = arr[rightIndex]
    }
    if (leftHand != null && rightHand != null) {
      arr.splice(leftIndex, 1, rightHand)
      arr.splice(rightIndex, 1, leftHand)
      leftHand = null
      rightHand = null
    }
    if (leftHand == null) {
      leftIndex++
    }
    if (rightHand == null) {
      rightIndex--
    }
  }
  return arr.join('')
};

console.log(reverseVowels('hell'))