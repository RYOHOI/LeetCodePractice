/* Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:

  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  while (tokens.length > 0) {
    if (!isNaN(+(tokens[0]))) stack.push(tokens.shift())
    else {
      let operand2 = stack.pop(),
        operand1 = stack.pop(),
        operator = tokens.shift()
      let res = eval('(' + operand1 + ')' + operator + '(' + operand2 + ')')
      if (res < 0) res = Math.ceil(res)
      else res = Math.floor(res)
      stack.push(res)
    }
  }
  return stack.pop()
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))
  // 10 * (6 / ((9 + 3) * -11)) + 17 + 5