/* Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = "aab",
Return

[
  ["aa","b"],
  ["a","a","b"]
] */

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let res = []
  explore([], s, res)
  return res
};

function explore(tmp, ss, res) {
  if (ss.length == 0) {
    res.push(tmp)
    return
  }
  let tmp1 = tmp.slice()
  tmp1.push(ss[0])
  explore(tmp1, ss.substring(1, ss.length), res)
  if (ss.length < 2) return
  for (let i = 1; i < ss.length; i++) {
    if (isPalindrome(ss, 0, i)) {
      let tmp2 = tmp.slice()
      tmp2.push(ss.substring(0, i + 1))
      explore(tmp2, ss.substring(i + 1, ss.length), res)
    }
  }
}

function isPalindrome(s, start = 0, end = s.length - 1) {
  if (s.substring(start, end + 1).length < 2) return true
  let loops = Math.round((end - start) / 2)
  let count = 0
  for (let i = start; i < loops; i++) {
    if (s[i] != s[end - count++]) return false
  }
  return true
}

console.log(partition('aabcbaacba'))

/* [
  ["a", "a", "b", "c", "b", "a", "a", "c", "b", "a"],
  ["a", "a", "b", "c", "b", "aa", "c", "b", "a"],
  ["a", "a", "bcb", "a", "a", "c", "b", "a"],
  ["a", "a", "bcb", "aa", "c", "b", "a"],
  ["a", "abcba", "a", "c", "b", "a"],
  ["aa", "b", "c", "b", "a", "a", "c", "b", "a"],
  ["aa", "b", "c", "b", "aa", "c", "b", "a"],
  ["aa", "bcb", "a", "a", "c", "b", "a"],
  ["aa", "bcb", "aa", "c", "b", "a"],
  ["aabcbaa", "c", "b", "a"]
] */