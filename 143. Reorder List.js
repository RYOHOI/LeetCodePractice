/* Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}. */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return head
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  const nodes = []
  let p = slow.next
  slow.next = null
  while (p) {
    let currNode = p
    p = p.next
    currNode.next = null
    nodes.push(currNode)
  }

  p = head
  while (nodes.length !== 0) {
    let currNode = nodes.pop()
    let afterNode = p.next
    p.next = currNode
    currNode.next = afterNode
    p = afterNode
  }
  return head
}

var list = {
  val: -3,
  next: {
    val: 1,
    next: {
      val: 20,
      next: {
        val: 8,
        next: {
          val: 11,
          next: {
            val: 21,
            next: null,
          },
        },
      },
    },
  },
}

console.log(reorderList(list))
