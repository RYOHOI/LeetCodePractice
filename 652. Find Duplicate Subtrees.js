/* Given a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with same node values.

Example 1: 
        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
The following are two duplicate subtrees:
      2
     /
    4
and
    4
Therefore, you need to return above trees' root in the form of a list. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  if (!root || (!root.left && !root.right)) return []
  let res = []
  let m = new Map()
  traverse(root)

  function traverse(node) {
    if (!node) return '#'
    let serial =
      node.val + ',' + traverse(node.left) + ',' + traverse(node.right)
    if (m.has(serial)) {
      m.set(serial, m.get(serial) + 1)
    } else {
      m.set(serial, 1)
    }
    if (m.get(serial) === 2) {
      res.push(node)
    }
    return serial
  }
}
