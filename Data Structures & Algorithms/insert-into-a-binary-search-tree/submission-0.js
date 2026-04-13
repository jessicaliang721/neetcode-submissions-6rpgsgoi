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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        // base case: we are at a leaf node and need to create the new node to insert
        if (root == null) {
            return new TreeNode(val)
        }

        if (val > root.val) {
            // check the right side
            root.right = this.insertIntoBST(root.right, val)
        } else if (val < root.val) {
            root.left = this.insertIntoBST(root.left, val)
        }
        return root;
    }
}
