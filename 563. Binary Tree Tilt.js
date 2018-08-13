/* Given a binary tree, return the tilt of the whole tree.

The tilt of a tree node is defined as the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.

The tilt of the whole tree is defined as the sum of all nodes' tilt.

Example:
Input: 
         1
       /   \
      2     3
Output: 1
Explanation: 
Tilt of node 2 : 0
Tilt of node 3 : 0
Tilt of node 1 : |2-3| = 1
Tilt of binary tree : 0 + 0 + 1 = 1
Note:

The sum of node values in any subtree won't exceed the range of 32-bit integer.
All the tilt values won't exceed the range of 32-bit integer. */

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
var findTilt = function(root) {
  var tiltOfWholeTree = 0
  if (root == null) return tiltOfWholeTree
  var tiltOfRoot = Math.abs(sumOfSubtree(root.left) - sumOfSubtree(root.right))
  return tiltOfWholeTree + tiltOfRoot

  function sumOfSubtree(node) {
    if (node == null) return 0
    var sumOfLeftTree = sumOfSubtree(node.left)
    var sumOfRightTree = sumOfSubtree(node.right)
      // console.log('Tilt of Node', node.val, ': ', Math.abs(sumOfLeftTree - sumOfRightTree))
    tiltOfWholeTree += Math.abs(sumOfLeftTree - sumOfRightTree)
    return node.val + sumOfLeftTree + sumOfRightTree
  }
};

var findTilt = function(root) {
  // if (root == null) return 0
  var tilt = 0
  sum(root)
  return tilt

  function sum(node) {
    if (node == null) return 0
    var r = sum(node.right)
    var l = sum(node.left)
      // not binary search tree, just ordinary binary tree
    tilt += Math.abs(r - l)
    return r + l + node.val
  }
}