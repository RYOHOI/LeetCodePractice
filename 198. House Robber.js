/* You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security system connected 
and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, 
determine the maximum amount of money you can rob tonight without alerting the police. 

P(0)=0
P(1)=M(1)
P(k)=max(P(k−2)+M(k),P(k−1))
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length == 1) return nums[0]
  if (nums.length == 0) return 0
  var p = []
  p[0] = 0, p[1] = nums[0]
  for (var i = 2; i <= nums.length; i++) {
    console.log('loop')
    p[i] = Math.max(nums[i - 1] + p[i - 2], p[i - 1])
  }
  return p[nums.length]
};

console.log(rob([1,2,1,4,1,5,6,1,0,19,20,5]))