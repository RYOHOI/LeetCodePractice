/* The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
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
 * @return {number}
 */
var rob = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return root.val
  const levelSums = []
  traverse([root])
  const table = [0, levelSums[0]]
  for (let i = 2; i <= levelSums.length; i++) {
    table[i] = Math.max(table[i - 1], table[i - 2] + levelSums[i - 1])
  }
  return table.pop()

  function traverse(nodes) {
    let nextLevel = []
    let sum = 0
    while (nodes.length > 0) {
      let currNode = nodes.pop()
      sum += currNode.val
      if (currNode.left) nextLevel.push(currNode.left)
      if (currNode.right) nextLevel.push(currNode.right)
    }
    levelSums.push(sum)
    if (nextLevel.length === 0) return
    traverse(nextLevel)
  }
}
