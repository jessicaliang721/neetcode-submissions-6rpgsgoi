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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true;
        const dfs = (node) => {
            if (!node) {
                return 0;
            }

            const leftHeight = dfs(node.left)
            const rightHeight = dfs(node.right)
            if (leftHeight - rightHeight > 1 || rightHeight - leftHeight > 1) {
                isBalanced = false;
            }
            return 1 + Math.max(leftHeight, rightHeight);
        }
        dfs(root)
        return isBalanced;
    }
}
