// Implement int sqrt(int x).

// Compute and return the square root of x.

// x is guaranteed to be a non-negative integer.


// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, 
// the decimal part will be truncated.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  // special case
  if (x == 0 || x == 1) return x

  var i = 0
  while (Math.pow(2, i) < x) i++

  // if x follows pattern of, for example 64 == 2 ** 8 == (2 ** 4) ** 2, return (2 ** 4)
  // 原因是: 当 i 是偶数时, Math.floor 或 Math.ceil 不会将 Binary Search 的范围扩大. 因此需要加上这步判断搜索的起始边界
  if (Math.pow(2, i) == x && i % 2 == 0) return Math.pow(2, i / 2)
  
  var p1 = Math.floor(Math.pow(2, (i - 1) / 2))
  var p2 = Math.ceil(Math.pow(2, i / 2))
  var center
  while (p2 >= p1) {
    center = Math.floor((p1 + p2) / 2)
    if (p1 == center) break
    if (x > Math.pow(center, 2)) p1 = center
    else if (x == Math.pow(center, 2)) return center
    else p2 = center

  }
  return p1
};

console.log(mySqrt(3.7))