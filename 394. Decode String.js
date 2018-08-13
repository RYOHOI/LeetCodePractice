/* Given an encoded string, return it's decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
 */

/**
 * @param {string} s
 * @return {string}
 */
// [a-z]: [97-122]; '[': 91; ']':93; '1': 49; '9': 57;
var decodeString = function(s) {
  let chars = s.split('')
  return decode(chars)

  function decode(arr) {
    if (arr.length == 0) return ''
    let orphanStr = ''
    while (arr.length > 0 && arr[0].charCodeAt(0) >= 97) {
      orphanStr += arr.shift()
    }
    if (arr.length == 0) return orphanStr
    let times = ''
    while (arr.length > 0 && arr[0].charCodeAt(0) <= 57) {
      times += arr.shift()
    }
    let bracketStack = ['[']
    let index = 1
    while (index < arr.length && bracketStack.length != 0) {
      let currVal = arr[index]
      if (currVal == '[') bracketStack.push('[')
      else if (currVal == ']') bracketStack.pop()
      index++
    }
    return orphanStr + decode(arr.slice(1, index - 1)).repeat(+(times)) + decode(arr.slice(index, arr.length))
  }
};

var decodeString = function(s) {
  if (s.length == 0) return ''
  let index = 0
  let leadingStr = ''
  while (index < s.length && s.charCodeAt(index) >= 97) {
    leadingStr += s[index++]
  }
  if (index >= s.length) return leadingStr
  let times = ''
  while (index < s.length && s.charCodeAt(index) <= 57) {
    times += s[index++]
  }
  let bracketStack = [s[index++]]
  let startRepeat = index
  while (index < s.length && bracketStack.length != 0) {
    if (s[index] == '[') bracketStack.push('[')
    else if (s[index] == ']') bracketStack.pop()
    index++
  }
  return leadingStr + decodeString(s.substring(startRepeat, index - 1)).repeat(+(times)) + decodeString(s.substring(index, s.length))
};

console.log(decodeString("eff[2[d]]")) // 这种情况属于 0*[2[d]]，因此返回 eff
console.log(decodeString("2[a]5[b]89[c]"))