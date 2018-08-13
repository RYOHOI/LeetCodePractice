/* Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

Credits: */

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
  this.iterator = generator(root)
  this.curr = this.iterator.next()

  function* generator(root) {
    if (root) {
      yield* generator(root.left)
      yield root.val
      yield* generator(root.right)
    }
  }
};

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
  return !this.curr.done
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
  let val = this.curr.value
  this.curr = this.iterator.next()
  return val
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

function arrayToTree(array, pos = 0) {
  if (array[pos] == null) return null
  return {
    val: array[pos],
    left: arrayToTree(array, pos * 2 + 1),
    right: arrayToTree(array, pos * 2 + 2),
  }
}

let root = arrayToTree([1, 2, 3, 4, 5, 11, 21, null, 1, null, 32])

var i = new BSTIterator(root),
  a = []

while (i.hasNext()) {
  let val = i.next()
  console.log(val)
  a.push(val)
}