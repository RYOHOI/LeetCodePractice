/* Given two non - empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.A subtree of s is a tree consists of a node in s and all of this node 's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
  Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
  Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  var rootVal = t.val
  return findRoot(s)

  function findRoot(node) {
    if (node == null) return false
    if (node.val == rootVal && isSameTree(node, t)) return true
    else return findRoot(node.left) || findRoot(node.right)
  }

  function isSameTree(node, t) {
    if (node == null && t == null) return true
    else if (!node || !t) return false
    if (node.val == t.val) {
      return isSameTree(node.left, t.left) && isSameTree(node.right, t.right)
    } else return false
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var node0 = new TreeNode(1)
var node1 = new TreeNode(1)
var node2 = new TreeNode(1)
node0.left = node1
node1.left = node2
var node3 = new TreeNode(1)
console.log(isSubtree(node0, node3))