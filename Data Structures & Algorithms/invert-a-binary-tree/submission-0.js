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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (root === null) {
            return null
        };

        // recursively invert left subtree
        const left = this.invertTree(root.left)

        // recursively invert right subtree
        const right = this.invertTree(root.right)

        // perform swap
        root.left = right;
        root.right = left;

        return root;
    }
}
