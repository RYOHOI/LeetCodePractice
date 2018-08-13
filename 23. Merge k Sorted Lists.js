/* Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.  */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length == 0) return null
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] == null) {
      lists.splice(i, 1)
      i--
    }
  }
  buildMinHeap(lists)
  if (lists.length == 0) return null
  let p = new ListNode(-1)
  let head = p

  while (lists.length > 0) {
    p.next = lists[0]
    p = p.next
    if (lists[0].next == null) {
      lists.shift()
      buildMinHeap(lists)
      continue
    } else {
      lists[0] = lists[0].next
    }
    p.next = null
    siftDown(lists, 0, lists.length - 1)
  }
  return head.next
};

function swap(arr, a, b) {
  let tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function buildMinHeap(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    siftDown(arr, i)
  }
  return arr
}

function siftDown(arr, start, end = arr.length - 1) {
  if (start >= end) return
  let leftIdx = start * 2 + 1,
    rightIdx = start * 2 + 2,
    minIdx = start
  if (leftIdx <= end && arr[leftIdx].val < arr[minIdx].val) {
    minIdx = leftIdx
  }
  if (rightIdx <= end && arr[rightIdx].val < arr[minIdx].val) {
    minIdx = rightIdx
  }
  if (minIdx != start) {
    swap(arr, start, minIdx)
    siftDown(arr, minIdx, end)
  }
  return arr
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function arr2List(arr) {
  if (arr.length == 0) return null
  let head = new ListNode(arr[0])
  if (arr.length == 1) return head
  let preNode = head
  for (let i = 1; i < arr.length; i++) {
    let currNode = new ListNode(arr[i])
    preNode.next = currNode
    preNode = currNode
  }
  return head
}
/* 
function randomRange(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    let currVal = Math.floor(Math.random() * 20)
    res.push(currVal)
  }
  return res
}

function getLists(length = 4) {
  let lists = []
  while (length-- > 0) {
    lists.push(arr2List(randomRange(10).sort((a, b) => a - b)))
  }
  return lists
} */

let lists = []
let input = [
  [-9, -3, -1, -1, 0],
  [-5],
  [4],
  [-8],
  [],
  [-9, -6, -5, -4, -2, 2, 3],
  [-3, -3, -2, -1, 0]
]
for (let i = 0; i < input.length; i++) {
  lists.push(arr2List(input[i]))
}
console.log(mergeKLists(lists))
  // console.log(buildMinHeap([3, 5, 1, 2, 23, 43, 1, 27, 34, 20, 32, 5, 22]))
  // console.dir(arr2List([5, 1, 2, 23, 43, 1, 27]))

// console.log(siftDown([-4, -3, -3, -5, 4], 0))