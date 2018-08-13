/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
] */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  let leftHand = Array(n).fill('(')
  let rightHand = Array(n).fill(')')
  let tmp = []
  let notClosed = 0
  explore(tmp, notClosed, leftHand, rightHand)
  return res

  function explore(tmp, notClosed, leftHand, rightHand) {
    if (leftHand.length == 0) {
      res.push(tmp.concat(rightHand).join(''))
    } else {
      if (notClosed == 0) {
        // Array is Object, we need to clone a new array fucking everytime
        let tmp1 = tmp.slice()
        let leftHand1 = leftHand.slice()
        let rightHand1 = rightHand.slice()
        tmp1.push(leftHand1.pop())
        explore(tmp1, 1, leftHand1, rightHand1)
      } else {
        let tmp1 = tmp.slice()
        let leftHand1 = leftHand.slice()
        let rightHand1 = rightHand.slice()
        tmp.push(leftHand.pop())
        explore(tmp, notClosed + 1, leftHand, rightHand)
        tmp1.push(rightHand1.pop())
        explore(tmp1, notClosed - 1, leftHand1, rightHand1)
      }
    }
  }
};

console.log(generateParenthesis(5))