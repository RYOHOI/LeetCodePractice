/* Sort a linked list in O(n log n) time using constant space complexity. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// merge sort
var sortList = function(head) {
  if (!head || !head.next) return head
  let slow = head
  let fast = head
  let preSlow = head
  while (fast && fast.next) {
    preSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  preSlow.next = null
  return merge(sortList(head), sortList(slow))
}

function merge(l1, l2) {
  let dummy = new ListNode()
  let p = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  if (!l1) {
    p.next = l2
  } else {
    p.next = l1
  }
  return dummy.next
}
var l1 = { val: -11, next: { val: -2, next: { val: 3, next: null } } }
var l2 = { val: -3, next: { val: 1, next: { val: 20, next: null } } }

console.log(sortList(l1, l2))
