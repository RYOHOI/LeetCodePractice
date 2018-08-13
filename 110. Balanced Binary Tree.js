/* Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree 
in which the depth of the two subtrees of every node never differ by more than 1. 
and both the left subtree and right subtree are also balanced (depth of two subtree differ no more than 1).*/

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
var isBalanced = function(root) {
  return subtreeHeight(root) != -1

  // post-order traversal
  function subtreeHeight(node) {
    if (node == null) return 0
    var heightOfLeft = subtreeHeight(node.left)
    if (heightOfLeft == -1) return -1

    var heightOfRight = subtreeHeight(node.right)
    if (heightOfRight == -1) return -1

    if (Math.abs(heightOfLeft - heightOfRight) > 1) return -1
    else return Math.max(heightOfLeft, heightOfRight) + 1
  }
};

var isBalanced = function(root) {
  if (root == null) return true
  return isBalanced(root.left) && isBalanced(root.right) && Math.abs(height(node.left) - height(node.right)) <= 1

  function height(node) {
    if (node == null) return 0
    return Math.max(height(node.left), height(node.right)) + 1
  }
}