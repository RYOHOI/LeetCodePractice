/* Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,
Given n = 3, there are a total of 5 unique BST's.

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 */

/**
 * @param {number} n
 * @return {number}
 */
const table = {}

var numTrees = function(quota) {
  if (quota == 0 || quota == 1) {
    return 1
  }
  let res = 0
  for (let i = 0; i <= quota - 1; i++) {
    let leftCombo
    let rightCombo
    if (table[i] == undefined) {
      table[i] = numTrees(i)
    }
    leftCombo = table[i]

    if (table[quota - 1 - i] == undefined) {
      table[quota - 1 - i] = numTrees(quota - 1 - i)
    }
    rightCombo = table[quota - 1 - i]

    res += (leftCombo * rightCombo)
  }
  return res
};


console.log(numTrees(19))