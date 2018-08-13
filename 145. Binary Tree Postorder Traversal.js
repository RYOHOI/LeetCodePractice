/* Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

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
var postorderTraversal = function(root) {
  var res = []
  traverse(root)
  return res

  function traverse(node) {
    if (node == null) return
    traverse(node.left)
    traverse(node.right)
    res.push(node.val)
  }
};

var postorderTraversal = function(root) {
  if (root == null) return []
  var res = [],
    nodes = [root]
  while (nodes[nodes.length - 1].left != null) {
    nodes.push(nodes[nodes.length - 1].left)
  }
  while (nodes.length > 0) {

  }
}