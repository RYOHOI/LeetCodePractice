/* A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list. */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

function RandomListNode(label) {
  this.label = label
  this.next = this.random = null
}

var part3 = {
  label: 10,
  next: null,
  random: null,
}

var part2 = {
  label: 8,
  next: part3,
  random: null,
}

var part1 = {
  label: 7,
  next: part2,
  random: part3,
}

var list = {
  label: -1,
  next: part1,
  random: part2,
}

var copyRandomList = function(head) {
  if (!head) return null
  if (!head.next) return new RandomListNode(head.label)
  let p = head
  while (p) {
    let node = new RandomListNode(p.label)
    if (!p.next) {
      p.next = node
      break
    }
    node.next = p.next
    p.next = node
    p = node.next
  }

  p = head
  while (p.next.next) {
    if (p.random !== null) {
      p.next.random = p.random.next
    }
    p = p.next.next
  }
  // return head

  p = head
  let p1 = head.next
  let head1 = p1
  while (p1.next) {
    p.next = p1.next
    p1.next = p.next.next
    p = p.next
    p1 = p1.next
  }
  p.next = p.next.next
  return head1
}

console.log(copyRandomList(list))
