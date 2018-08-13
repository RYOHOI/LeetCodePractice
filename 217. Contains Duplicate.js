/* Given an array of integers, find if the array contains any duplicates. 
Your function should return true if any value appears at least twice in the array, 
and it should return false if every element is distinct. */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* var containsDuplicate = function(nums) {
  var unique = [], loops = nums.length
  for (var i = 0; i < loops; i++) {
    if (unique.indexOf(nums[i]) != -1) return true
    else unique.push(nums[i])
  }
  return false
}; */

var containsDuplicate = function (nums) {
  var m = new Map(), loops = nums.length
  for (var i = 0; i < loops; i++) {
    if (m.has(nums[i])) return true
    else m.set(nums[i])
  }
  return false
}

console.log(containsDuplicate([1, 2, 3]))