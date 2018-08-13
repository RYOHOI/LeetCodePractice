/* Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length at most 12.
S will consist only of letters or digits. */

/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  const res = []
  const trace = []
  let letters = S.split('')
  explore(trace, letters)
  return res

  function explore(trace, letters) {
    while (true) {
      if (letters.length == 0) {
        res.push(trace.slice().join(''))
        return
      }
      let charCode = letters[0].charCodeAt(0)
      if (charCode <= 57 && charCode >= 48) {
        trace.push(letters.shift())
      } else {
        if (charCode >= 97 && charCode <= 122) {
          let curr = letters[0]
          letters.shift()
          let traceCopy = trace.slice()
          trace.push(curr.toUpperCase())
          explore(trace, letters.slice())
          traceCopy.push(curr)
          explore(traceCopy, letters.slice())
        } else {
          let curr = letters[0]
          letters.shift()
          let traceCopy = trace.slice()
          trace.push(curr.toLowerCase())
          explore(trace, letters.slice())
          traceCopy.push(curr)
          explore(traceCopy, letters.slice())
        }
        return
      }
    }
  }
}

console.log(letterCasePermutation('a1b1'))
