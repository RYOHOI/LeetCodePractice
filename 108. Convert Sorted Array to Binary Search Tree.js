// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

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
var sortedArrayToBST = function(nums) {
  if (nums.length == 0) return null
  function recursiveAdd(leftIndex, rightIndex) {
    // base case
    if (leftIndex == rightIndex) return null

    var middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    var node = new TreeNode(nums[middleIndex])
    node.left = recursiveAdd(leftIndex, middleIndex)
    node.right = recursiveAdd(middleIndex, rightIndex)
    return node
  }
  var head = recursiveAdd(0, nums.length - 1)
  return head
};