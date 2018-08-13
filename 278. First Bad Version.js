/* You are a product manager and currently leading a team to develop a new product. 
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, 
all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. 
Implement a function to find the first bad version. 
You should minimize the number of calls to the API. */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    if (isBadVersion(1)) return 1
    if (isBadVersion(n) && !isBadVersion(n - 1)) return n
    var leftIndex = 1,
      rightIndex = n
    while ((rightIndex - leftIndex) > 1) {
      // console.log('midIndex', midIndex)
      var midIndex = Math.floor((rightIndex + leftIndex) / 2)
      if (isBadVersion(midIndex)) {
        if (isBadVersion(midIndex - 1)) {
          rightIndex = midIndex
          continue
        } else {
          return midIndex
        }
      } else {
        if (isBadVersion(midIndex + 1)) {
          return midIndex + 1
        } else {
          leftIndex = midIndex
          continue
        }
      }
    }
  };
};

function isBadVersion(n) {
  var bad = true
  if (n == 1) return !bad
  if (n == 2) return !bad
  if (n == 3) return bad
  if (n == 4) return bad
  console.log('version not found!')
}
console.log(solution(isBadVersion)(4))