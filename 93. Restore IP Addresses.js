/* Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)  */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let res = []
  let count = 0
  explore(s)
  return res

  function explore(ss, trace = [], cut = 0) {
    // console.log(count++, ss)
    if (trace.length == 4) {
      if (ss.length == 0) res.push(trace.join('.'))
      else return
    }
    if (cut == 3) {
      if (ss.length > 3 || ss.length == 0) return
      else if (isValid(ss)) {
        trace.push(ss)
        res.push(trace.join('.'))
        trace.pop(ss)
        return
      }
    }
    for (let i = 0; i < 3; i++) {
      if (isValid(ss.slice(0, i + 1))) {
        trace.push(ss.slice(0, i + 1))
        explore(ss.slice(i + 1, ss.length), trace, cut + 1)
        trace.pop()
      }
    }
  }

  function isValid(ss) {
    if (ss.length > 1 && ss[0] == '0') return false
    if (+ss <= 255) return true
    else return false
  }
};

console.log(restoreIpAddresses('189274876'))