/* Given a binary search tree with non - negative values, find the minimum absolute difference between values of any two nodes.

Example:

  Input:

  1\
3
  /
  2

Output:
  1

Explanation:
  The minimum absolute difference is 1, which is the difference between 2 and 1(or between 2 and 3).
Note: There are at least two nodes in this BST. */

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
/* var getMinimumDifference = function(root) {
  var sortedArray = [root]
  inOrderTraverse(root)
  for (var i = 1; i < sortedArray.length; i++) {
    sortedArray[i - 1] = sortedArray[i] - sortedArray[i - 1]
  }
  sortedArray.pop()
  return Math.min(...sortedArray)

  function inOrderTraverse(node) {
    var nodeIndex = sortedArray.indexOf(node)
    sortedArray.splice(nodeIndex, 1, node.val)
    if (node.right) {
      sortedArray.splice(nodeIndex + 1, 0, node.right)
      inOrderTraverse(node.right)
    }
    if (node.left) {
      sortedArray.splice(nodeIndex, 0, node.left)
      inOrderTraverse(node.left)
    }
  }
}; */

var getMinimumDifference = function(root) {
  var min = Infinity
  var prev = null
  inOrder(root)
  return min

  function inOrder(node) {
    if (node == null) return
    inOrder(node.left)
    if (prev != null) {
      console.log('prev', prev, 'node.val', node.val)
      min = Math.min(min, node.val - prev)
    }
    prev = node.val
    inOrder(node.right)
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var node0 = new TreeNode(0),
  node1 = new TreeNode(2236),
  node2 = new TreeNode(1277),
  node3 = new TreeNode(2776),
  node4 = new TreeNode(519)

node0.right = node1
node1.left = node2
node1.right = node3
node2.left = node4

console.log(getMinimumDifference(node0))