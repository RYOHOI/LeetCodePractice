// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

// If you have figured out the O(n) solution, 
// try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // no positive number in the array, output the largest item
    if (nums.filter(function(a) {
        return a > 0
    }).length == 0 ) return nums.reduce(function(a1, a2) {
        if (a1 > a2) return a1
        else return a2
    })

    var largestSum = 0, sum = 0
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        if (sum <= 0) {
            sum = 0
            continue
        } else {
            if (sum > largestSum) largestSum = sum
        }
    }
    return largestSum
};

console.log(maxSubArray([-1,-9,2,4]))