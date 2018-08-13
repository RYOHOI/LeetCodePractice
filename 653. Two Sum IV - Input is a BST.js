/* Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  var nodeVals = []
  inOrderTraverse(root)
  var leftIndex = 0,
    rightIndex = nodeVals.length - 1
  while (leftIndex < rightIndex) {
    if ((nodeVals[leftIndex] + nodeVals[rightIndex]) < k) {
      leftIndex++
    } else if ((nodeVals[leftIndex] + nodeVals[rightIndex]) > k) {
      rightIndex--
    } else return true
  }
  return false

  function inOrderTraverse(node) {
    if (node == null) return
    inOrderTraverse(node.left)
    nodeVals.push(node.val)
    inOrderTraverse(node.right)
  }
};

var findTarget = function(root, k) {
  var nodeVals = new Set(),
    nodes = [root]

  while (nodes.length == 0) {
    if (node == null) nodes.pop()
    nodeVals.add(node.val)
    if (nodeVals.has(k - node.val)) return true
    nodes.unshift(node.right)
    nodes.unshift(node.left)
    nodes.pop()
  }
  return false
}