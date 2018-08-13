/* Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space? 

secrect fomular:
C(n, k) = n! / ((n - k)! * k!)
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  function factorial(n) {
    if (n == 1) return 1
    return n * factorial(n - 1)
  }
  if (rowIndex == 0) return [1]
  var nums = [1]
  for (var i = 1; i < rowIndex; i++) {
    nums[i] = factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i))
  }
  nums.push(1)
  return nums
};

console.log(getRow(5))