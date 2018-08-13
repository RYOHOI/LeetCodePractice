/* Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:
Input: 9973
Output: 9973
Explanation: No swap.
Note:
The given number is in the range [0, 108] */

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  let digits = (num + '').split('')
  let maxDigit = '0',
    pos = -1
  let i = 0
  while (digits[i] >= digits[i + 1]) {
    i++
  }
  for (; i < digits.length; i++) {
    if (digits[i] >= maxDigit) {
      pos = i
      maxDigit = digits[i]
    }
  }
  for (let i = 0; i < digits.length; i++) {
    if (i > pos) break
    if (maxDigit > digits[i]) {
      let tmp = digits[i]
      digits[i] = maxDigit
      digits[pos] = tmp
      return parseInt(digits.join(''))
    }
  }
  return num
}

console.log(maximumSwap(877512))
