/* Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  // preorder array index moves one by one
  // use preorder item to split inorder array into pieces and call them recursively
  if (preorder.length == 0) return null
  var preIndex = 0
  return build(preorder[preIndex], inorder)

  function build(nodeVal, arr) {
    var node = new TreeNode(nodeVal)
    var dvidIndex = arr.indexOf(nodeVal)
    if (dvidIndex == 0) node.left = null
    else node.left = build(preorder[++preIndex], arr.slice(0, dvidIndex))
    if (dvidIndex == arr.length - 1) node.right = null
    else node.right = build(preorder[++preIndex], arr.slice(dvidIndex + 1, arr.length))
    return node
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([1, 2, 3, 4, 6, 5, 7], [2, 6, 4, 3, 7, 5, 1]))