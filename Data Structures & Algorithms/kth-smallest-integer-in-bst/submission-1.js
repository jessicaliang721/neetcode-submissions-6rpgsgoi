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
    traverse(root) {
        if (root === null) {
            return
        }

        this.traverse(root.left);
        this.res.push(root.val)
        this.traverse(root.right);
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.res = [];
        this.traverse(root)
        return this.res[k-1];
    }
}
