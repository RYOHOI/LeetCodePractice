/* Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
] */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let serial = []
  for (let i = 1; i <= n; i++) {
    serial.push(i)
  }
  let res = []
  combo([], k, serial)
  return res

  function combo(tmp, countDown, serial) {
    if (countDown == 0) {
      res.push(tmp)
      return
    }
    for (let i = 0; i < serial.length; i++) {
      let tmp1 = tmp.slice()
      tmp1.push(serial[i])
      let serial1 = serial.slice()
      serial1.splice(i, 1)
      combo(tmp1, countDown - 1, serial1)
    }
  }
};

var combine = function(n, k) {
  let res = []
  combo([], n, k)
  return res

  function combo(tmp, n, k) {
    if (k == 0) {
      res.push(tmp)
      return
    }
    for (let i = n; i > 0; i--) {
      let tmpCopy = tmp.slice()
      tmpCopy.push(i)
      combo(tmpCopy, i - 1, k - 1)
    }
  }
}

console.log(combine(5, 1))