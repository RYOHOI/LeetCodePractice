/* Given an integer array with no duplicates. A maximum tree building on this array is defined as follow:

    The root is the maximum number in the array.
    The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.
    The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.

Construct the maximum tree by the given array and output the root node of this tree.

Example 1:

Input: [3,2,1,6,0,5]
Output: return the tree root node representing the following tree:

      6
    /   \
   3     5
    \    / 
     2  0   
       \
        1

Note:

    The size of the given array will be in the range [1,1000].
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length == 0) return null
  let maxIndex = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      nums[maxIndex] = nums[i]
      maxIndex = i
    }
  }
  let root = new TreeNode(nums[maxIndex])
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length))
};