/* Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3

return [2, -3, 4], since all the values happen only once, return all of them in any order.

Examples 2
Input:

  5
 /  \
2   -5

return [2], since 2 happens twice, however -5 only occur once.

Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.  */

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
var findFrequentTreeSum = function(root) {

  // counter is defined as: key -> sum, value -> [node1.val, node2.val, ...]
  let counter = {}
  traverse(root)
  let sumAsKey = Object.keys(counter).sort((a, b) => counter[b].length - counter[a].length)
  let res = [+sumAsKey[0]]
  for (let i = 1; i < sumAsKey.length; i++) {
    if (counter[sumAsKey[i]].length == counter[sumAsKey[0]].length) res.push(+sumAsKey[i])
    else break
  }

  return res

  function traverse(node) {
    if (node == null) return 0
    if (node.left == null && node.right == null) {
      if (counter[node.val] == undefined) counter[node.val] = [node.val]
      else counter[node.val].push(node.val)
      return node.val
    }
    let leftSum = traverse(node.left)
    let rightSum = traverse(node.right)
    let rootSum = node.val + leftSum + rightSum
    if (counter[rootSum] == undefined) counter[rootSum] = [node.val]
    else counter[rootSum].push(node.val)
    return rootSum
  }
};

let node = {
  val: -6,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: -1,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 4,
    left: {
      val: -2,
      left: null,
      right: null
    }
  }
}
console.log(findFrequentTreeSum(node))