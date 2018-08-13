/* Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

Example 1:

    2
   / \
  1   3

Binary tree [2,1,3], return true.

Example 2:

    1
   / \
  2   3

Binary tree [1,2,3], return false.  */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root == null) return true
  let bool1 = validate(root.left, -Infinity, root.val)
  let bool2 = validate(root.right, root.val, Infinity)
  return bool1 && bool2

  function validate(node, lowerLimit, upperLimit) {
    if (node == null) return true
    if (node.val < upperLimit && node.val > lowerLimit) {
      let bool1 = validate(node.left, lowerLimit, node.val)
      let bool2 = validate(node.right, node.val, upperLimit)
      return bool1 && bool2
    } else return false
  }
};