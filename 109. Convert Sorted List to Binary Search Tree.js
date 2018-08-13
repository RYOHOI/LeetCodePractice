/* Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (head === null || head.val === null) return null
  if (!head.next) {
    let node = new TreeNode(head.val)
    return node
  }

  let dummy = new ListNode(null)
  let fast = dummy
  let slow = dummy
  let preSlow = dummy
  dummy.next = head
  while (fast && fast.next) {
    preSlow = slow
    slow = slow.next
    fast = fast.next.next
  }
  let node = new TreeNode(slow.val)
  preSlow.next = null
  node.left = sortedListToBST(dummy.next)
  node.right = sortedListToBST(slow.next)
  return node
}

let list = {
  val: -1,
  next: {
    val: 0,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null,
        },
      },
    },
  },
}

console.log(sortedListToBST(list))
