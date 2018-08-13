/* Implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

The function prototype should be:
bool isMatch(const char *s, const char *p)

Some examples:
isMatch("aa","a") → false
isMatch("aa","aa") → true
isMatch("aaa","aa") → false
isMatch("aa", "*") → true
isMatch("aa", "a*") → true
isMatch("ab", "?*") → true
isMatch("aab", "c*a*b") → false
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let flag = false
  explore(s, p)
  return flag

  function explore(s, p) {
    if (flag) return
    if (p.length == 0) {
      if (s.length > 0) return
      if (s.length == 0) {
        flag = true
        return
      }
    }
    let wild = isWild(p)
    if (wild !== false) {
      if (wild === true) {
        flag = true
        return
      } else {
        if (s.length >= wild) {
          flag = true
          return
        } else return
      }
    } else {
      if (s == p) {
        flag = true
        return
      } else if (p.indexOf('*') == -1 && p.indexOf('?') == -1) return false
    }
    for (let i = 0; i < p.length; i++) {
      if (p[i] != '*' && p[i] != '?') {
        let charIndex
        charIndex = s.indexOf(p[i])
        while (true) {
          if (charIndex == -1) return
          else if (charIndex == 0) {
            if (p[i - 1] == '?') return
            else explore(s.substring(1, s.length), p.substring(i + 1, p.length))
          } else if (charIndex == 1) {
            if (p[i - 1] == '*' || p[i - 1] == '?') explore(s.substring(2, s.length), p.substring(i + 1, p.length))
            else return
          } else if (charIndex > 1) {
            if (p[i - 1] == '*') explore(s.substring(charIndex + 1, s.length), p.substring(i + 1, p.length))
            else {
              let wild = isWild(p.substring(0, i))
              if (wild !== false) {
                if (wild === true) {
                  p = p.substring(i, p.length)
                  s = s.substring(charIndex, s.length)
                  continue
                } else {
                  if (s.substring(0, charIndex).length >= wild) {
                    p = p.substring(i, p.length)
                    s = s.substring(charIndex, s.length)
                    continue
                  } else return
                }
              } else {
                if (s == p) {
                  p = p.substring(i, p.length)
                  s = s.substring(charIndex, s.length)
                  continue
                } else return
              }
              return
            }
          }
          charIndex = s.indexOf(p[i], charIndex + 1)
        }
      }
    }
  }

  function isWild(p) {
    let countQ = 0,
      countAb = 0
    for (let i = 0; i < p.length; i++) {
      if (p[i] == '?') countQ++
        else if (p[i] != '*') countAb++
    }
    if (countAb > 0) return false
    else if (countQ > 0) return countQ
    else return true
  }
};


console.log(isMatch("abefcdgiescdfimde", "ab*cd?i*de"))
  // console.log(isMatch("aa", "*"))
  // console.log(isMatch("aa", "a*"))
  // console.log(isMatch("ab", "?*"))
  // console.log(isMatch("aa", "a"))
  // console.log(isMatch("aa", "aa"))
  // console.log(isMatch("aaa", "aa"))
  // console.log(isMatch("aab", "c*a*b"))