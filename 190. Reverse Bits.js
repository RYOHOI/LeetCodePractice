/* Reverse bits of a given 32 bits unsigned integer.

For example, given input 43261596 
(represented in binary as 00000010100101000001111010011100), 
00000010100101000001111010011100
return 964176192 (represented in binary as 00111001011110000010100101000000).

Follow up:
If this function is called many times, how would you optimize it? */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// parseInt('111001011110000010100101000000', 2) -> 964176192
var reverseBits = function(n) {
  var binaryStringInput = n.toString(2)
  var trailingZeroes = 32 - binaryStringInput.length
  var binaryStringOutput = binaryStringInput.split('').reverse().join('')
  for (var i = 0; i < trailingZeroes; i++) {
    binaryStringOutput += '0'
  }
  return parseInt(binaryStringOutput, 2)
};

console.log(reverseBits(43261596))