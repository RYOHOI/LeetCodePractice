/* The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

00 - 0
01 - 1
11 - 3
10 - 2

Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that. */

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if (n == 0) return [0]
  let sequence1 = [
    '00',
    '01',
    '11',
    '10'
  ]
  let sequence2 = [
    '10',
    '11',
    '01',
    '00'
  ]
  let times = Math.round(n / 2)
  let res = []
  let count = Math.pow(2, n)
  glue('', sequence1, times)
  return res

  function glue(trace, sequence, times) {
    if (res.length == count) return
    if (times == 0) {
      res.push(parseInt(trace, 2))
      return
    }
    for (let i = 0; i < sequence.length; i++) {
      let traceCopy = trace + sequence[i]
      if (sequence[0] == '00') {
        if (i % 2 == 0) glue(traceCopy, sequence1, times - 1)
        else glue(traceCopy, sequence2, times - 1)
      } else {
        if (i % 2 == 1) glue(traceCopy, sequence2, times - 1)
        else glue(traceCopy, sequence1, times - 1)
      }
    }
  }
};

console.log(grayCode(3))
console.log(grayCode(3))