/* Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:

Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.

Example 2:

Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.

Note:

    You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    Input words contain only lowercase letters. */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let m = {}
  words.forEach(it => {
    if (m[it] == undefined) m[it] = 1
    else m[it]++
  })
  let pairs = Object.entries(m)
  buildMaxHeap(pairs)
  for (let i = 0; i < k; i++) {
    swap(pairs, 0, pairs.length - 1 - i)
    siftDown(pairs, 0, pairs.length - 2 - i)
  }
  let topPairs = pairs.slice(pairs.length - k, pairs.length)
  let reverseKey = topPairs.map(it => it[0]).reverse()
  return reverseKey
};

console.log(topKFrequent(["the", "makelove", "day", "is", "sunny", "the", "gang", "the", "the", "sunny", "gang", "is", "is", "day", "makelove"], 3))

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
  if (leftIdx <= end) {
    if (arr[leftIdx][1] > arr[maxIdx][1]) {
      maxIdx = leftIdx
    } else if (arr[leftIdx][1] == arr[maxIdx][1]) {
      if (arr[leftIdx][0] < arr[maxIdx][0]) {
        maxIdx = leftIdx
      }
    }
  }
  if (rightIdx <= end) {
    if (arr[rightIdx][1] > arr[maxIdx][1]) {
      maxIdx = rightIdx
    } else if (arr[rightIdx][1] == arr[maxIdx][1]) {
      if (arr[rightIdx][0] < arr[maxIdx][0]) {
        maxIdx = rightIdx
      }
    }
  }
  // ****************
  // special case

  // ****************
  if (maxIdx != start) {
    swap(arr, start, maxIdx)
    siftDown(arr, maxIdx, end)
  }
  return arr
}