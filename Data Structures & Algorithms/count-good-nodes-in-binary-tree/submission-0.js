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
        this.count = 0;
        this.maxValue = root.val;
        this.dfs(root, this.maxValue);
        return this.count;
    }

    dfs(node, maxSoFar) {
        if (node == null) {
            return;
        }

        if (node.val >= maxSoFar) {
            this.count++;
        }

        maxSoFar = Math.max(node.val, maxSoFar);

        this.dfs(node.left, maxSoFar)
        this.dfs(node.right, maxSoFar)
    }
}
