/* Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null || root.left == null && root.right == null) return true
  if (root.left == null && root.right != null || root.right == null && root.left != null) return false
  else return isMirrorTree(root.left, root.right)

  function isMirrorTree(p, q) {
    // both are empty
    if (p == null && q == null) return true
  
    // one is empty, while the other is not
    if (p == null && q != null || q == null && p != null) return false
  
    // both do not have any child
    if (p.left == null && q.left == null && p.right == null && q.right == null) return p.val == q.val
    
    // all of other situations
    return p.val == q.val && isMirrorTree(p.left, q.right) && isMirrorTree(p.right, q.left)
  }
};