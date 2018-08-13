/* Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !head.next || n == 0) return head
  var nodeCount = 1,
    start = head
  while (head.next) {
    head = head.next
    nodeCount++
  }
  // edge case
  n = n % nodeCount
  if (n == 0) {
    var newStart = start.next
    start.next = null
    return newStart
  }
  // primary case
  var p1 = start
  for (var i = 0; i < nodeCount - n - 1; i++) {
    p1 = p1.next
    if (!p1.next.next) {
      p1.next = null
      return start
    }
  }
  p1.next = p1.next.next
  return start
};