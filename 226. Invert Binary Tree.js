/* Invert a binary tree.

     4
   /   \
  2     7
 / \   / \
1   3 6   9
to
     4
   /   \
  7     2
 / \   / \
9   6 3   1 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root == null) return null
  if (root.left == null && root.right == null) return root
  invertBranch(root)
  return root

  function invertBranch(node) {
    if (node == null) {
      return null
    } else {
      var leftNode = node.left
      node.left = node.right
      node.right = leftNode
      invertBranch(node.left)
      invertBranch(node.right)
    }
  }
};

var invertTree = function(root) {
  if (root == null) return
  var tmp = root.left
  root.left = root.right
  root.right = tmp
  invertTree(root.left)
  invertTree(root.right)
  return root
};