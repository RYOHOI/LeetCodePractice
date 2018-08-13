/* Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.

Note: The length of path between two nodes is represented by the number of edges between them.

Example 1:

Input:

              5
             / \
            4   5
           / \   \
          1   1   5
Output:

2
Example 2:

Input:

              1
             / \
            4   5
           / \   \
          4   4   5
Output:

2
Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000. */

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
var longestUnivaluePath = function(root) {
  var maxLength = 0
  if (root == null) return 0
  var a = detectUnivalPath(root.left, root.val)
  var b = detectUnivalPath(root.right, root.val)
  return Math.max(a + b, maxLength)

  function detectUnivalPath(node, val) {
    if (node == null) return 0

    if (node.val != val) {
      var a = detectUnivalPath(node.left, node.val)
      var b = detectUnivalPath(node.right, node.val)
      maxLength = Math.max(a + b, maxLength)
      return 0
    } else {
      var a = detectUnivalPath(node.left, val)
      var b = detectUnivalPath(node.right, val)
      maxLength = Math.max(a + b, maxLength)
      return Math.max(a, b) + 1
    }
  }
};