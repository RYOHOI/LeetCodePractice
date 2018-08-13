/* You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  res = []
  traverse(root, 0)
  return res

  function traverse(node, depth) {
    if (node == null) return
    if (res[depth] == undefined) res[depth] = node.val
    if (res[depth] < node.val) res[depth] = node.val
    traverse(node.left, depth + 1)
    traverse(node.right, depth + 1)
  }
};