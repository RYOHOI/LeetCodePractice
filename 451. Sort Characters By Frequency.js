/* Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.
 */

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let m = {}
  for (let i = 0; i < s.length; i++) {
    if (m[s[i]] == undefined) m[s[i]] = 1
    else m[s[i]]++
  }
  let pairs = Object.entries(m)
  buildMaxHeap(pairs)
    // return pairs
  let res = ''
  for (let i = pairs.length - 1; i >= 0; i--) {
    swap(pairs, 0, i)
    res += pairs[i][0].repeat(pairs[i][1])
    siftDown(pairs, 0, i - 1)
  }
  // return pairs
  return res
};

console.log(frequencySort('jisdafUJsiijisjisdfjJU'))

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function buildMaxHeap(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    siftDown(arr, i)
  }
  return arr
}

function siftDown(arr, start, end = arr.length - 1) {
  if (start >= end) return
  let leftIdx = start * 2 + 1,
    rightIdx = start * 2 + 2,
    maxIdx = start
  if (leftIdx <= end && arr[leftIdx][1] > arr[maxIdx][1]) {
    maxIdx = leftIdx
  }
  if (rightIdx <= end && arr[rightIdx][1] > arr[maxIdx][1]) {
    maxIdx = rightIdx
  }
  if (maxIdx != start) {
    swap(arr, start, maxIdx)
    siftDown(arr, maxIdx, end)
  }
  return arr
}