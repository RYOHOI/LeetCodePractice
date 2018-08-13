/* Given a binary tree, find the leftmost value in the last row of the tree.

Example 1:
Input:

    2
   / \
  1   3

Output:
1
Example 2: 
Input:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

Output:
7
Note: You may assume the tree (i.e., the given root node) is not NULL. */

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
var findBottomLeftValue = function(root) {
  var res = []
  traverse(root, 0)
  return res[res.length]

  function traverse(node, depth) {
    if (node == null) return
    if (res[depth] == undefined) res[depth] = node.val
    else res[depth] = node.val
    traverse(node.right, depth + 1)
    traverse(node.left, depth + 1)
  }
};