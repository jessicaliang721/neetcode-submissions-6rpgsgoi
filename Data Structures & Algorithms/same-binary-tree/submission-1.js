/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        if (!p && !q) { // empty trees
            return true
        }
        if (!p || !q || p.val !== q.val) { // one node is null and the other isn't or the nodes' values are different
            return false
        }

        const leftSideMatch = this.isSameTree(p.left, q.left);
        const rightSideMatch = this.isSameTree(p.right, q.right);
        return leftSideMatch && rightSideMatch; // both subtrees need to match
    }
}
