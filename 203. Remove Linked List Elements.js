/* Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  // Handle the edge cases
  if (head == null) return null
  if (head.next == null && head.val == val) return null

  // Make sure head does not point to node with val
  while (head.val == val) {
    head = head.next
    if (head == null) return null
  }
  
  if (head.next == null) return head

  // Safely start the real process
  var currentNode = head.next, previousNode = head
  while (currentNode != null) {
    if (currentNode.val == val) {
      previousNode.next = currentNode.next
      currentNode = currentNode.next
    } else {
      previousNode = currentNode
      currentNode = currentNode.next
    }
  }
  previousNode.next = null
  return head
};