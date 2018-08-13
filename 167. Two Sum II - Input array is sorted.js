/* Given an array of integers that is already sorted in ascending order, 
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers 
such that they add up to the target, where index1 must be less than index2. 
Please note that your returned answers (both index1 and index2) are not zero-based.

You may assume that each input would have exactly one solution 
and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  var loops = numbers.length
  for (var i = 0; i < loops; i++) {
    var pal = target - numbers[i], leftIndex = i + 1, rightIndex = loops - 1
    if (pal == numbers[leftIndex]) return [i, leftIndex]
    else if (pal == numbers[rightIndex]) return [i, rightIndex]
    else {
      var searchResult = binarySearch(leftIndex, rightIndex, pal)
      if (searchResult == false) continue
      else return [i, searchResult]
    }
  }
  function binarySearch(leftIndex, rightIndex, pal) {
    // base case
    if (rightIndex - leftIndex == 1) return false
    var middleIndex = Math.floor((rightIndex + leftIndex) / 2)
    if (pal == numbers[middleIndex]) return middleIndex
    else if (pal > numbers[middleIndex]) return binarySearch(middleIndex, rightIndex, pal)
    else return binarySearch(leftIndex, middleIndex, pal)
  }
};

console.log(twoSum([1,2], 3))