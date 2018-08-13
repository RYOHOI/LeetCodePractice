/* Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space? */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null) return false
  var hare = head, tortoise = head
  do {
    if (tortoise.next == null) return false
    else tortoise = tortoise.next
    if (hare.next == null) return false
    if (hare.next.next == null) return false
    else hare = hare.next.next
  } while (hare != tortoise)
  return true
};