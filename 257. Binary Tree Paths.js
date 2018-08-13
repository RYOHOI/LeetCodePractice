/* Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"] */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var strs = []
  if (root == null) return []
  if (root.left == null && root.right == null)
    return ['' + root.val]
  if (root.left == null && root.right != null) {
    printTreePath(root.right, '' + root.val)
    return strs
  } else if (root.left != null && root.right == null) {
    printTreePath(root.left, '' + root.val)
    return strs
  } else {
    printTreePath(root.left, '' + root.val)
    printTreePath(root.right, '' + root.val)
    return strs
  }

  function printTreePath(node, history) {
    history += '->' + node.val
    if (node.left == null && node.right == null)
      strs.push(history)
    else if (node.left != null && node.right == null)
      printTreePath(node.left, history)
    else if (node.left == null && node.right != null)
      printTreePath(node.right, history)
    else {
      printTreePath(node.right, history)
      printTreePath(node.left, history)
    }
  }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var node1 = new TreeNode(1)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)
var node6 = new TreeNode(6)
var node7 = new TreeNode(7)
var node8 = new TreeNode(8)
var node9 = new TreeNode(9)

node6.left = node2
node6.right = node8
node2.left = node0
node2.right = node4
node8.left = node7
node8.right = node9
node4.left = node3
node4.right = node5

console.log(binaryTreePaths(node6))