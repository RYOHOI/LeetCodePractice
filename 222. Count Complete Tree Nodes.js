/* Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia https://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h. */

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
var countNodes = function(root) {
  if (root == null) return 0
  return countNodes(root.left) + countNodes(root.right) + 1
};

var countNodes = function(root) {
  if (root == null) return 0
  var tmp1 = root,
    tmp2 = root
  var count1 = 1,
    count2 = 1
  while (tmp1.left) {
    tmp1 = tmp1.left
    count1++
  }
  while (tmp2.right) {
    tmp2 = tmp2.right
    count2++
  }
  if (count1 == count2) return 2 ** count1 - 1
  else return countNodes(root.left) + countNodes(root.right) + 1
}