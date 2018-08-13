/* Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
 */
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

/* ListNode {
  val: 3,
  next: ListNode { val: 4, next: ListNode { val: 4, next: [Object] } } }
 */

var deleteDuplicates = function(head) {
  var pointer = head
  while (pointer) {
    while (pointer.next && pointer.next.val == pointer.val) {
      pointer.next = pointer.next.next
    }
    pointer = pointer.next
  }
  return head
}


/* 此题并非数组去重
var deleteDuplicates = function(head) {
  var target = head[0]
  if (head.length == 0 || head.length == 1) return head
  for (var i = 1; i < head.length - 1; i++) {
    var current = head[i]
    // console.log('current: ' + current + ' target: ' + target)
    if (current == target) {
      head.splice(i, 1)
      i--
    }
    else target = current
    // console.log('head: ' + head)
  }
  return head
}; */