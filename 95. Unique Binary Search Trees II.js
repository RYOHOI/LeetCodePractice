/* Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.

For example,
Given n = 3, your program should return all 5 unique BST's shown below.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  let trees = []
  let nodes = []
  for (let i = 1; i <= n; i++) nodes.push(i)
  explore(nodes, [])
  return trees

  function explore(nodes, trace) {
    if (nodes.length == 0) {
      trace.push(null)
      trees.push(trace.slice())
      trace.pop()
      return
    }
    for (let i = 0; i < nodes.length; i++) {
      trace.push(nodes[i])
        // 设：左侧分到 j 个节点
      for (let j = 0; j < nodes.length - 1; j++) {

      }
      trace.pop()
    }
  }
};