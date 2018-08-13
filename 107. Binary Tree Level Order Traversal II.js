/* Given a binary tree, return the bottom-up level order traversal of its nodes' values. 
(ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
  if (root == null) return []
  if (root.left == null && root.right == null) return [[root.val]]

  var flattened = []
  var childLevelNodes = [root], arrayIndex = 0

  // flattened[arrayIndex] is an array, it also contains all nodes in the same level
  // if there're all null in the array, stop the loop
  while (true) {
    var parentLevelNodes = childLevelNodes
    childLevelNodes = []
    flattened[arrayIndex] = []
    for (var i = 0; i < parentLevelNodes.length; i++) {
      if (parentLevelNodes[i].left != null) childLevelNodes.push(parentLevelNodes[i].left)
      if (parentLevelNodes[i].right != null) childLevelNodes.push(parentLevelNodes[i].right)
      flattened[arrayIndex][i] = parentLevelNodes[i].val
    }
    arrayIndex++
    if (childLevelNodes.length == 0) break
  }

  return flattened.reverse()
};