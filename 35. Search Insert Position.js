// Given a sorted array and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:
// Input: [1,3,5,6], 5
// Output: 2

// Example 2:
// Input: [1,3,5,6], 2
// Output: 1

// Example 3:
// Input: [1,3,5,6], 7
// Output: 4

// Example 1:
// Input: [1,3,5,6], 0
// Output: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var leftEnd = 0, rightEnd = nums.length - 1
    if (nums[leftEnd] == target) return leftEnd
    else if (nums[rightEnd] == target) return rightEnd
    else if (nums[leftEnd] > target) return 0
    else if (nums[rightEnd] < target) return rightEnd + 1
    while (rightEnd - leftEnd > 1) {
        console.log("left: " + leftEnd + " right: " + rightEnd)
        var center = Math.floor((rightEnd + leftEnd) / 2)
        console.log("center: " + center)
        if (target == nums[center]) return center
        else if (target > nums[center]) leftEnd = center
        else rightEnd = center
    }
    return rightEnd
};

console.log(searchInsert([1,2,4,5,11,13,20], 10))