/* Given a positive integer, 
return its corresponding column title as appear in an Excel sheet.

For example:
    26 进制计数法
    1 -> A
    2 -> B
    3 -> C
    ...
    24 -> X
    25 -> Y
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
    677 -> ZA
    2456 -> CPL
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  function nA(n) {
    var sum = 0
    for (var i = 0; i < n; i++) sum += Math.pow(26, i)
    return sum
  }
  function numToChar(num) {
    return String.fromCharCode(64 + num) 
    // String.fromCharCode(65) = 'A'
    // String.fromCharCode(64) = '@'
  }
  var bitCount = 1, s =''
  while (n - Math.pow(26, bitCount) >= nA(bitCount)) bitCount++

  for (bitCount; bitCount > 1; bitCount--) {
    var bit = Math.ceil(n / Math.pow(26, bitCount - 1)) - 1
    // console.log('bit: ' + bit)
    var char = numToChar(bit)
    s += char
    n -= bit * Math.pow(26, bitCount - 1)
  }
  s += numToChar(n)
  return s
};

for (var index = 1; index < 1000; index++) {
  console.log(index, convertToTitle(index))
}