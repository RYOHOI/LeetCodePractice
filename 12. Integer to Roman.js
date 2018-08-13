/* Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999. */

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let m = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  return num.toString().split('').reverse().map(function(digit, zeroCount) {
    if (digit == 0) return ''
    else if (digit == 1 || digit == 5) return m[digit + '0'.repeat(zeroCount)]
    else if (digit < 4) return m[1 + '0'.repeat(zeroCount)].repeat(digit)
    else if (digit == 4) return m[1 + '0'.repeat(zeroCount)] + m[5 + '0'.repeat(zeroCount)]
    else if (digit > 5 && digit < 9) return m[5 + '0'.repeat(zeroCount)] + m[1 + '0'.repeat(zeroCount)].repeat(+(digit) - 5)
    else if (digit == 9) return m[1 + '0'.repeat(zeroCount)] + m[1 + '0'.repeat(zeroCount + 1)]
  }).reverse().join('')
};

console.log(intToRoman(2331))