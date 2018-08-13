/* Sort a linked list using insertion sort. */

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
var insertionSortList = function(head) {
  if (!head) return head
  let dummy = new ListNode(-Infinity)
  dummy.next = head
  let p = head
  while (p.next) {
    let currNode = p.next
    if (currNode.val >= p.val) {
      p = currNode
    } else {
      let flagNode = findFlagNode(dummy, currNode)
      insertAfter(flagNode, p, currNode)
      p = currNode
    }
  }
  return dummy.next

  function findFlagNode(prenode, node) {
    while (true) {
      if (node.val >= prenode.val && node.val <= prenode.next.val) {
        return prenode
      } else {
        prenode = prenode.next
      }
    }
  }

  function insertAfter(flagNode, prenode, node) {
    prenode.next = node.next
    afterFlagNode = flagNode.next
    flagNode.next = node
    node.next = afterFlagNode
  }
}
