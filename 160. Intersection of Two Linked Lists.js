/* Write a program to find the node 
at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
Credits:
Special thanks to @stellari for adding this problem and creating all test cases. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null
  var pointerA = headA, pointerB = headB, swapHead = 0
  // if (headA == null && headB == null && headA != headB) return false
  while (pointerA != pointerB) {
    if (swapHead > 2) return null
    // console.log('pointerA: ' + pointerA + ' pointerB: ' + pointerB)
    if (pointerA.next == null) {
      pointerA = headB
      swapHead++
    }
    else pointerA = pointerA.next
    if (pointerB.next == null) {
      pointerB = headA
      swapHead++
    }
    else pointerB = pointerB.next
  }
  if (pointerA != null && pointerB != null) return pointerB
  else return null
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/* No intersection: 
[1,3,5,7,9,11,13,15,17,19,21]
[2] */

var listA = new ListNode('a1')
listA.next = new ListNode('a2')
listA.next.next = new ListNode('c1')
listA.next.next.next = new ListNode('c2')
listA.next.next.next.next = new ListNode('c3')

var listB = new ListNode('b1')
listB.next = new ListNode('b2')
listB.next.next = new ListNode('b3')

console.log(getIntersectionNode(listA, listB))