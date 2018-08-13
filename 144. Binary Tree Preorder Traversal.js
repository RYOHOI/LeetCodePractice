/* Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively? */

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
var preorderTraversal = function(root) {
  var res = []
  traverse(root)
  return res

  function traverse(node) {
    if (node == null) return
    res.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
};

/* var preorderTraversal = function(root) {
  var res = [],
    nodes = [root],
    pointer = root
  while (nodes.length != 0) {
    res.unshift(pointer.val)
    if (pointer.right == null)
      pointer = pointer.right
    nodes.push(pointer)
  }
  return res
} */