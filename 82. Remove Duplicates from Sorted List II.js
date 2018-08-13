/* Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head
  let dummy = new ListNode()
  dummy.next = head
  let p = head
  let pre = dummy
  while (p.next) {
    if (p.val == p.next.val) {
      pre.next = uniqueHead(p)
      p = pre.next
    } else {
      pre = p
      p = p.next
    }
  }
  return dummy.next
}

function uniqueHead(head) {
  if (!head || !head.next) return head
  let p = head
  let val = head.val
  while (p) {
    if (p.val == val) {
      p = p.next
    } else {
      break
    }
  }
  return p
}
