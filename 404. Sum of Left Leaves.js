/* Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  var sum = 0
  if (root == null || (root.left == null && root.right == null)) return sum
  if (root.left != null) {
    if (root.left.left == null && root.left.right == null) sum += root.left.val
    addLeft(root.left)
  }
  if (root.right != null) addLeft(root.right)
  return sum

  function addLeft(node) {
    if (node.left == null && node.right == null) return null
    if (node.left != null) {
      if (node.left.left == null && node.left.right == null) sum += node.left.val
      addLeft(node.left)
    }
    if (node.right != null) {
      addLeft(node.right)
    }
  }
};