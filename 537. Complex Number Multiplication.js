/* Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
Note:

The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 */

/**
* @param {string} a
* @param {string} b
* @return {string}
*/
var complexNumberMultiply = function (a, b) {
  const realNumberOfA = parseInt(a.split('+')[0])
  const realNumberOfB = parseInt(b.split('+')[0])
  const imaginaryNumberOfA = parseInt(Array.from(a.split('+')[1]).slice(0, -1).join(''))
  const imaginaryNumberOfB = parseInt(Array.from(b.split('+')[1]).slice(0, -1).join(''))
  const newRealNumber = realNumberOfA * realNumberOfB + imaginaryNumberOfA * imaginaryNumberOfB * -1
  const newImaginaryNumber = realNumberOfA * imaginaryNumberOfB + realNumberOfB * imaginaryNumberOfA
  return '' + newRealNumber + '+' + newImaginaryNumber + 'i'
};

console.log(complexNumberMultiply("1+1i", "1+1i"))