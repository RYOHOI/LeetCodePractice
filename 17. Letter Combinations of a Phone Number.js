/* Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.  */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const FUNNEL = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let index = 0
  let res = []
  let firstRoute = FUNNEL[digits[index]]
  for (let i = 0; i < firstRoute.length; i++) {
    combine(firstRoute[i], index + 1)
  }
  return res

  function combine(ss, index) {
    if (index == digits.length) {
      res.push(ss)
      return
    }
    let routes = FUNNEL[digits[index]]
    for (let i = 0; i < routes.length; i++) {
      combine(ss + routes[i], index + 1)
    }
  }
};

console.log(letterCombinations('32'))