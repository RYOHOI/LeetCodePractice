// Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example:

// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var pointer1 = 0, pointer2 = 1
    for (var i = 1; i < nums.length; i++) {
        if (nums[pointer1] === nums[pointer2]) {
            pointer2++
            if (pointer2 >= nums.length) break
        }
        else {
            // if not the same, move p1 to the next position
            // copy value at p2 to p1
            // move p2 to the next position
            pointer1++
            nums[pointer1] = nums[pointer2]
            pointer2++
        }
    }
    return (pointer1 + 1)
};