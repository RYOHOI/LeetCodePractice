/* Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \    
    1   3  

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
Note:

The size of the BST will be between 2 and 100.
The BST is always valid, each node's value is an integer, and each node's value is different. */

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
var minDiffInBST = function(root) {
  const nodeVals = []
  traverse(root)
  nodeVals.sort((a, b) => b - a)
  const diffs = []
  for (var i = 0; i < nodeVals.length - 1; i++) {
    diffs.push(nodeVals[i + 1] - nodeVals[i])
  }
  diffs.sort((a, b) => b - a)
  return diffs[0]

  function traverse(node) {
    if (!node) return
    nodeVals.push(node.val)
    traverse(node.left)
    traverse(node.right)
  }
}
