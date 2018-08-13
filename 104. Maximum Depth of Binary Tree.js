/* Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node. */

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
var maxDepth = function(root) {
  if (root == null) return 0
  return 1 + largerDepth(root.left, root.right)

  function largerDepth(p, q) {
    if (p == null && q == null) return 0
    if (p != null && q == null) return 1 + largerDepth(p.left, p.right)
    if (q != null && p == null) return 1 + largerDepth(q.left, q.right)

    var pChildDepth = largerDepth(p.left, p.right)
    var qChildDepth = largerDepth(q.left, q.right)
    if (pChildDepth > qChildDepth) return 1 + pChildDepth
    else return 1 + qChildDepth
  }
};

var maxDepth = function(root) {
  if (root == null) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}