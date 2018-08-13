/* Print a binary tree in an m*n 2D string array following these rules:

    The row number m should be equal to the height of the given binary tree.
    The column number n should always be an odd number.
    The root node's value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (left-bottom part and right-bottom part). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don't need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don't need to leave space for both of them.
    Each unused space should contain an empty string "".
    Print the subtrees following the same rules.

Example 1:

Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]

Example 2:

Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]

Example 3:

Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]

Note: The height of binary tree is in the range of [1, 10].  */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
  if (root == nul) return []
  let depth = getDepth(root)
  let matrix = new Array(depth)
  let colCount = 1
  for (let i = 0; i < depth - 1; i++) {
    colCount = colCount * 2 + 1
  }
  for (let i = 0; i < depth; i++) {
    matrix[i] = Array(colCount).fill("")
  }
  traverse(root, 0, 0, colCount)
  return matrix

  function traverse(node, row, leftBound, rightBound) {
    if (row == depth) return
    let center = Math.floor(colCount / 2)
    matrix[row][center] += node.val
    traverse(node.left, row + 1, leftBound, center)
    traverse(node.right, row + 1, center + 1, rightBound)
  }

  function getDepth(node) {
    if (node == null) return 0
    let leftDepth = getDepth(node.left)
    let rightDepth = getDepth(node.right)
    return 1 + Math.max(leftDepth, rightDepth)
  }
};