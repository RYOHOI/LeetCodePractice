/* Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times. The algorithm should run in linear time and in O(1) space. */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  /*   var threshold = Math.floor(nums.length / 3)
    var m = {},
      res = []
    for (var i = 0; i < nums.length; i++) {
      if (m[nums[i]] == undefined) m[nums[i]] = 1
      else m[nums[i]]++
    }
    for (var key in m) {
      if (m[key] > threshold) res.push(+(key))
    }
    return res */
  const m = nums.reduce(function(obj, num) {
    obj[num] = (obj[num] || 0) + 1
    return obj
  }, {})

  const threshold = Math.floor(nums.length / 3)
  return Object.keys(m).filter(key => m[key] > threshold).map(Number)
};

console.log(majorityElement([1, 2, 1, 3, 1, 3, 3, 1, 3]))