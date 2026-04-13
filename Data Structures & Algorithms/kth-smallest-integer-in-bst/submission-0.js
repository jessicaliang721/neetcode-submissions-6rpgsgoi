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
    traverse(root, k) {
        if (root === null) {
            return
        }

        this.traverse(root.left, k);
        this.counter++;
        if (this.counter === k) {
            this.result = root.val;
        }
        this.traverse(root.right, k);
    }
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.counter = 0;
        this.result = null;
        this.traverse(root, k)
        return this.result;
    }
}
