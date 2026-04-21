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
    traverseTree(root) {
        if (root === null) {
            return 0
        }
        let left = this.traverseTree(root.left)
        let right = this.traverseTree(root.right)
        const currentDiameter = left + right;
        this.maxDiameter = Math.max(currentDiameter, this.maxDiameter)
        return 1 + Math.max(left, right)
    }
    diameterOfBinaryTree(root) {
        this.maxDiameter = 0;
        this.traverseTree(root)
        return this.maxDiameter;
    }
}
