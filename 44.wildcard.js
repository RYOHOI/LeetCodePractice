/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let matcher = [],
    currWord = ''
  for (let i = 0; i < p.length; i++) {
    if (p[i] == '*' || p[i] == '?') {
      if (currWord != '') {
        matcher.push(currWord)
        currWord = ''
      }
      matcher.push(p[i])
    } else {
      currWord += p[i]
    }
  }
  if (currWord != '') matcher.push(currWord)
  let flag = false
  explore(s, matcher, [])
  return flag

  function explore(ss, matcher) {
    if (flag) return
    if (ss.length == 0 && matcher.length == 0) {
      flag = true
      return
    }
    if (ss.length > 0 && matcher.length == 0) return
    if (isPure(matcher)) {
      if (subMatch(ss, matcher)) {
        flag = true
        return
      } else return
    }

    for (let i = 0; i < matcher.length; i++) {
      if (matcher[i] != '*' && matcher[i] != '?') {
        let isFirstDivider = true,
          divider
        do {
          divider = ss.indexOf(matcher[i], divider + 1)
          if (divider == -1) {
            if (isFirstDivider) return
            else break
          }

          isFirstDivider = false

          if (subMatch(ss.substring(0, divider), matcher.slice(0, i))) {
            explore(
              ss.substring(divider + matcher[i].length, ss.length),
              matcher.slice(i + 1, matcher.length), []
            )
          }
        } while (true)
        return
      }
    }
  }

  // a pure matcher is defined as not including any non-wildcard string
  function isPure(matcher) {
    let countChar = 0
    for (let i = 0; i < matcher.length; i++) {
      if (matcher[i] != '*' && matcher[i] != '?') countChar++
    }
    if (countChar == 0) return true
    else return false
  }

  // matche ss with pure matcher
  function subMatch(ss, matcher) {
    if (matcher.length == 0 && ss.length > 0) return false
    let countQ = 0,
      countS = 0
    for (let i = 0; i < matcher.length; i++) {
      if (matcher[i] == '?') countQ++
        if (matcher[i] == '*') countS++
    }
    if (countQ > 0) {
      if (countS > 0) return ss.length >= countQ
      else return ss.length == countQ
    } else {
      if (countS > 0) return true
      else return ss.length == 0
    }
  }
};



console.log(isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb", "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"))