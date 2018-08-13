// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var p1 = 0, p2 = 0
    for (var i = 0; i < nums.length; i++) {
        // always point to good data
        while (nums[p2] === val) p2++
        // modified data at p1 every time
        console.log("i: " + i + "; nums[p1]: " + nums[p1] + "; nums[p2]: " +nums[p2])
        if (nums[p2] === undefined) break
        nums[p1] = nums[p2]
        p1++
        p2++
    }
    return p1
};

console.log(removeElement([1,2,1,1,3,3,4,3,1], 3))
