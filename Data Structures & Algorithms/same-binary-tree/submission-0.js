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
        return this.dfs(p, q);
    }

    dfs(root1, root2) {
        if (root1 == null && root2 == null) {
            return true
        }
        if (root1 == null || root2 == null) {
            return false
        }
        if (root1.val !== root2.val) {
            return false
        }

        const leftSideMatch = this.dfs(root1.left, root2.left);
        const rightSideMatch = this.dfs(root1.right, root2.right);
        return leftSideMatch && rightSideMatch;
    }
}
