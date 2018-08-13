/* Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) return head
  let dummy1 = new ListNode(),
    dummy2 = new ListNode(),
    p1 = dummy1,
    p2 = dummy2,
    p = head

  while (p) {
    if (p.val < x) {
      p1.next = p
      p = p.next
      p1 = p1.next
      p1.next = null
    } else {
      p2.next = p
      p = p.next
      p2 = p2.next
      p2.next = null
    }
  }
  p1.next = dummy2.next
  return dummy1.next
}
