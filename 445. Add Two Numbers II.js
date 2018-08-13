/* You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 == null) return (l2 != null) ? l2 : null
  if (l2 == null) return l1
  var a1 = [],
    a2 = [],
    l1Copy = l1,
    l2Copy = l2
  getValues(l1Copy, a1), getValues(l2Copy, a2)
  var nodeCount1 = a1.length,
    nodeCount2 = a2.length
  var a3 = [],
    loop = Math.min(nodeCount1, nodeCount2),
    flag = false
  for (var i = 0; i < loop; i++) {
    var digit1, digit2
    if (nodeCount1 - 1 - i < 0) digit1 = 0
    else digit1 = a1[nodeCount1 - 1 - i]
    if (nodeCount2 - 1 - i < 0) digit2 = 0
    else digit2 = a2[nodeCount2 - 1 - i]
    var digitSum = digit1 + digit2 + flag
    if (digitSum > 9) {
      a3.unshift(digitSum % 10)
      flag = true
    } else {
      a3.unshift(digitSum)
      flag = false
    }
  }
  return a3
  var nodeCount3 = a3.length
  var start = (nodeCount1 >= nodeCount2) ? l1Copy : l2Copy
  if (nodeCount3 > Math.max(nodeCount1, nodeCount2)) {
    var head = new ListNode(a3[0])
    head.next = start
    a3.shift()
  } else var head = start
  for (var i = 0; i < a3.length; i++) {
    start.val = a3[i]
    start = start.next
  }
  return head

  function getValues(head, arr) {
    while (head) {
      arr.push(head.val)
      head = head.next
    }
  }
};