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
    traverse(root, res) {
        if (root === null) {
            return;
        }

        this.traverse(root.left, res);
        res.push(root.val);
        this.traverse(root.right, res);
    }
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    inorderTraversal(root) {
        let res = []
        this.traverse(root, res)
        return res;
    }
}
