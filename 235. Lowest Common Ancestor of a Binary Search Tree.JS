/* Given a binary search tree (BST), 
find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: 
“The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. 
Another example is LCA of nodes 2 and 4 is 2, 
since a node can be a descendant of itself according to the LCA definition. */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var trackp = [],
    trackq = [],
    currentNode = root
  while (true) {
    // console.log('p val', p.val, 'current', currentNode.val)
    trackp.push(currentNode)
    if (p.val == currentNode.val) {
      break
    }
    if (p.val > currentNode.val) {
      currentNode = currentNode.right
    } else {
      currentNode = currentNode.left
    }
  }
  // redirect the pointer
  currentNode = root
  while (true) {
    trackq.push(currentNode)
    if (q.val > currentNode.val) {
      currentNode = currentNode.right
    } else if (q.val < currentNode.val) {
      currentNode = currentNode.left
    } else {
      break
    }
  }
  var lowestNode,
    loops = trackp.length > trackq.length ? trackq.length : trackp.length
  for (var i = 0; i < loops; i++) {
    if (trackp[i].val != trackq[i].val) break
    lowestNode = trackp[i]
  }
  // console.log('trackq', trackq, 'trackp', trackp)
  return lowestNode
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var node0 = new TreeNode(0)
var node2 = new TreeNode(2)
var node3 = new TreeNode(3)
var node4 = new TreeNode(4)
var node5 = new TreeNode(5)
var node6 = new TreeNode(6)
var node7 = new TreeNode(7)
var node8 = new TreeNode(8)
var node9 = new TreeNode(9)

node6.left = node2
node6.right = node8
node2.left = node0
node2.right = node4
node8.left = node7
node8.right = node9
node4.left = node3
node4.right = node5

var node_2 = new TreeNode(2)
var node_1 = new TreeNode(1)
node_2.left = node_1

// console.log(lowestCommonAncestor(node_2, node_2, node_1))
console.log(lowestCommonAncestor(node6, node0, node5))