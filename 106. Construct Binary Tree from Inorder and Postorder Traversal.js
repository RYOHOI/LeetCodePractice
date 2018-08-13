/* Given inorder and postorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  // postorder array index moves one by one
  // use postorder item to split inorder array into pieces and call them recursively
  if (postorder.length == 0) return null
  var postIndex = postorder.length - 1
  return build(postorder[postIndex], inorder)

  function build(nodeVal, arr) {
    var node = new TreeNode(nodeVal)
    var dvidIndex = arr.indexOf(nodeVal)
    if (dvidIndex == arr.length - 1) node.right = null
    else node.right = build(postorder[--postIndex], arr.slice(dvidIndex + 1, arr.length))
    if (dvidIndex == 0) node.left = null
    else node.left = build(postorder[--postIndex], arr.slice(0, dvidIndex))
    return node
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(buildTree([4, 6, 3, 2, 5, 7, 1], [4, 3, 6, 5, 1, 7, 2]))