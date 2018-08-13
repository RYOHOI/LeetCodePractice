/* Given a binary tree, you need to compute the length of the diameter of the tree.The diameter of a binary tree is the length of the longest path between any two nodes in a tree.This path may or may not pass through the root.

Example:
  Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path[4, 2, 1, 3] or[5, 2, 1, 3].

Note: The length of path between two nodes is represented by the number of edges between them. */

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
var diameterOfBinaryTree = function(root) {
  var diameters = []
  traverseNode(root)
  return diameters.sort(function(a, b) {
    return b - a
  })[0]

  function traverseNode(node) {
    diameters.push(getDiameter(node))
    if (node.left) traverseNode(node.left)
    if (node.right) traverseNode(node.right)
  }

  function getDiameter(node) {
    if (node == null || !node.left && !node.right) return 0
    return longestPath(node.left) + longestPath(node.right)

    function longestPath(node) {
      if (node == null) return 0
      var pathLeft = 0,
        pathRight = 0
      if (node.left) {
        pathLeft = longestPath(node.left)
      }
      if (node.right) {
        pathRight = longestPath(node.right)
      }
      return Math.max(pathLeft, pathRight) + 1
    }
  }
  console.log(diameters)
};