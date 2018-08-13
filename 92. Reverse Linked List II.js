/* Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (head.next == null) return head
  var count = 1,
    start = head,
    section = []
  while (head) {
    if (m == count) var pointerM = head
    if (pointerM) section.unshift(head.val)
    if (n == count) break
    head = head.next
    count++
  }
  for (var i = 0; i < section.length; i++) {
    pointerM.val = section[i]
    pointerM = pointerM.next
  }
  return start
};