// Given an array of integers, 
// return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var nums = [8, 1, 12, 9, 10, 7, 22, 18, 110]
var target = 111

var twoSum = function(nums, target) {
  for (var flag = 0; flag < nums.length; flag++) {
    var part1 = nums[flag]
    var part2 = target - part1
    for (var innerFlag = flag + 1; innerFlag < nums.length; innerFlag++) {
      if (part2 == nums[innerFlag]) return [flag, innerFlag]
    }
  }
}

console.log(twoSum(nums, target))