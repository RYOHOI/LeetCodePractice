/* The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* var findErrorNums = function(nums) {
  var sum = 0,
    duplicate
  nums.forEach(function(ele, i) {
    sum += ele
    if (nums.indexOf(ele) != i) {
      duplicate = ele
    }
  })
  var trueSum = (1 + nums.length) * (nums.length / 2)
    // console.log(trueSum, sum, duplicate, )
  return [duplicate, trueSum - sum + duplicate]
}; */

var findErrorNums = function(nums) {
  var trueSum = (1 + nums.length) * (nums.length / 2),
    duplicate, sum = 0
  nums.forEach(function(ele, i) {
    var p = Math.abs(ele)
    sum += p
    if (nums[p - 1] < 0) {
      duplicate = p
    } else {
      nums[p - 1] *= -1
    }
    console.log(nums, sum)
  })

  return [duplicate, trueSum - sum + duplicate]
}

console.log(findErrorNums([2, 2]))