/* Reverse a singly linked list. */

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
var reverseList = function(head) {
  if (head == null) return null
  if (head.next == null) return head
  var currentNode = head,
    nextNode, previousNode = null
  while (currentNode.next != null) {
    nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  currentNode.next = previousNode
  return currentNode
};

var reverseList = function(head) {
  if (head.next == null || head == null) return head
  var end = reverseList(head.next)
  head.next.next = head
  head.next = null
  return end
}

var reverseList = function(head) {
  var pre = null,
    curr = head
  while (curr != null) {
    var temp = curr.next
    curr.next = pre
    pre = curr
    curr = temp
  }
  return pre
}