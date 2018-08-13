/* The set [1,2,3,…,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order,
We get the following sequence (ie, for n = 3):

    "123"
    "132"
    "213"
    "231"
    "312"
    "321"

Given n and k, return the kth permutation sequence.

Note: Given n will be between 1 and 9 inclusive. */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let res = []
  let serial = []
  for (let i = 1; i <= n; i++) {
    serial.push(i)
  }
  explore(res, serial)
  return res.join('')

  function explore(res, serial) {
    if (n == 1) {
      res.push(serial[0])
      return
    }
    let track = factorial(--n)
    let levelIndex = 0
    while (k - track > 0) {
      k -= track
      levelIndex++
    }
    res.push(serial.splice(levelIndex, 1))
    explore(res, serial)
  }
};

function factorial(n) {
  if (n == 1) return 1
  else return factorial(n - 1) * n
}

console.log(getPermutation(4, 20))