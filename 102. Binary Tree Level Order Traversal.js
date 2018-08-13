/* Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root == null) return []
  var res = []
  level(root, 0)
  return res

  function level(node, depth) {
    if (node == null) return
    if (res[depth] == undefined) res[depth] = []
    res[depth].push(node.val)
    level(node.left, depth + 1)
    level(node.right, depth + 1)
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
console.log(levelOrder(node))