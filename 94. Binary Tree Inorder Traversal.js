/* Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

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
var inorderTraversal = function(root) {
  if (root == null) return []
  var res = []
  inorder(root)
  return res

  function inorder(node) {
    if (node == null) return
    inorder(node.left)
    res.push(node.val)
    inorder(node.right)
  }
};


var node = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 10,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: {
        val: 3,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}
console.log(inorderTraversal(node))