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
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        if (!root) return 0;
        return this.dfs(root, root.val);
    }

    dfs(node, maxSoFar) {
        if (node == null) {
            return 0;
        }

        let count = 0;

        if (node.val >= maxSoFar) {
            count = 1;
        }

        maxSoFar = Math.max(node.val, maxSoFar);

        count += this.dfs(node.left, maxSoFar);
        count += this.dfs(node.right, maxSoFar);
        return count;
    }
}