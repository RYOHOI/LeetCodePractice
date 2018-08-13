/* Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

For example, given s = "aab",
Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.  */

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
  let res = partition(s)
  res.sort((a, b) => (a.length - b.length))
  return res[0].length - 1
};

function partition(s) {

};

function isPalindrome(s, start = 0, end = s.length - 1) {
  if (s.substring(start, end + 1).length < 2) return true
  let loops = Math.round((end - start) / 2)
  let count = 0
  for (let i = start; i < loops; i++) {
    if (s[i] != s[end - count++]) return false
  }
  return true
}

console.log(minCut("ababababababababababababcbabababababababababababa"))