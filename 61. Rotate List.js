/* Given a list, rotate the list to the right by k places, where k is non-negative.


Example:

Given 1->2->3->4->5->NULL and k = 2,

return 4->5->1->2->3->NULL. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head == null || head.next == null) return head
  var nodeCount = 1,
    start = head
  while (head.next) {
    head = head.next
    nodeCount++
  }
  k = k % nodeCount
  if (k == 0) return start
  head.next = start
  for (var i = 0; i < nodeCount - k - 1; i++) {
    start = start.next
  }
  var newStart = start.next
  start.next = null
  return newStart
};