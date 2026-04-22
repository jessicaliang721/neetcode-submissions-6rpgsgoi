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
    isValidBST(root) {
        return this.dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
    }
    
    dfs(node, min, max) { // return if current node is valid
        if (!node) return true;
        if (node.val >= max || node.val <= min) {
            return false;
        }
         
        return this.dfs(node.left, min, node.val) &&
            this.dfs(node.right, node.val, max)
    }
}
