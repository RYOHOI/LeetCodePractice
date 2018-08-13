/* Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space? */

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
var isPalindrome = function(head) {
  if (head == null || head.next == null) return true
  if (head.next.next == null) {
    return head.val == head.next.val
  }
  // if (head.next.next.next == null) return head.val == head.next.next.val
  var countNode = 0
  var headR = reverseList(head)
  var reverseBack = Math.floor(countNode / 2)
    // everytime runs func reverseList, countNode changes!
  var countNode2 = countNode
  var headRB = reverseList(headR, reverseBack)
  var headRB2
    // return countNode2
  if (countNode2 % 2 != 0) headRB2 = headRB2.next
  for (var i = 0; i < reverseBack; i++) {
    // console.log('i', i)
    if (headRB2.val != headRB.val) {
      console.log('headRB', headRB, 'headRB2', headRB2)
      return false
    }
    headRB = headRB.next
    headRB2 = headRB2.next
  }
  return true

  function reverseList(head, step) {
    var currentNode = head,
      nextNode, previousNode = null
    while (currentNode.next != null) {
      if (step != undefined) {
        step--
        if (step == 0) break
      }
      nextNode = currentNode.next
      currentNode.next = previousNode
      countNode++
      previousNode = currentNode
      currentNode = nextNode
    }
    headRB2 = currentNode.next
    currentNode.next = previousNode
    countNode++
    return currentNode
  }
}