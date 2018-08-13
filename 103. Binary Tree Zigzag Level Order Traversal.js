/* Given a binary tree, return the zigzag level order traversal of its nodes' values.
 (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its zigzag level order traversal as:

[
  [3],
  [20,9],
  [15,7]
]
 */

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
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const result = []
  let nodes = [root]
  while (nodes.length > 0) {
    nodes =
      result.length % 2 === 0 ? traverse(nodes, true) : traverse(nodes, false)
  }
  return result

  function traverse(nodes, oddLevel) {
    let loop = nodes.length
    let level = result.length
    let nextLevel = []
    result[level] = []
    while (loop-- > 0) {
      let node = nodes.pop()
      result[level].push(node.val)
      if (oddLevel) {
        if (node.left) nextLevel.push(node.left)
        if (node.right) nextLevel.push(node.right)
      } else {
        if (node.right) nextLevel.push(node.right)
        if (node.left) nextLevel.push(node.left)
      }
    }
    console.log(nextLevel)
    return nextLevel
  }
}
