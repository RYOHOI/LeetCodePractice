/* Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example:
Given 1->2->3->4->5->NULL,
return 1->3->5->2->4->NULL.

Note:
The relative order inside both the even and odd groups should remain as it was in the input. 
The first node is considered odd, the second node even and so on ...

Credits:
Special thanks to @DjangoUnchained for adding this problem and creating all test cases. */

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
var oddEvenList = function(head) {
  if (head.next.next == null) return head
  var p1 = oddStart = head,
    p2 = evenStart = head.next
  var i = 1
  while (true) {
    if (i % 2 == 1) {
      if (p2.next != null) {
        p1.next = p2.next
        p1 = p1.next
      } else break
    } else {
      if (p1.next != null) {
        p2.next = p1.next
        p2 = p2.next
      } else break
    }
    i++
  }
  if (i % 2 == 0) p2.next = null
  p1.next = evenStart
  return oddStart
};