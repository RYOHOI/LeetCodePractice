/* Given a binary search tree(BST) with duplicates, find all the mode(s)(the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

  The left subtree of a node contains only nodes with keys less than or equal to the node 's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node 's key.
Both the left and right subtrees must also be binary search trees.
For example:
Given BST[1, null, 2, 2],
 1
  \
   2
  /
 2
return [2].

Note: If a tree has more than one mode, you can
return them in any order.

Follow up: Could you do that without using any extra space ? (Assume that the implicit stack space incurred due to recursion does not count). */

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
var findMode = function(root) {
  var modes = {}
  if (!root) return []
  if (!root.left && !root.right) return [root.val]
  else traverseNode(root)

  function traverseNode(node) {
    if (node.val in modes) modes[node.val]++
      else modes[node.val] = 1
    if (!node.left && !node.right) return null
    if (node.left) traverseNode(node.left)
    if (node.right) traverseNode(node.right)
  }

  var sortedModes = Object.keys(modes).sort(function(a, b) {
    return modes[b] - modes[a]
  })

  var result = [+(sortedModes[0])]
  for (var i = 1; i < sortedModes.length; i++) {
    if (modes[sortedModes[i]] == modes[sortedModes[0]]) result.push(+(sortedModes[i]))
  }
  return result
};

console.log(findMode())