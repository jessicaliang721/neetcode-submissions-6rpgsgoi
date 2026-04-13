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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if (preorder.length === 0 && inorder.length === 0) {
            return null
        };
        let root = preorder[0];
        const rootIndex = inorder.indexOf(root);
        const leftInorder = inorder.slice(0, rootIndex); // exclude root!!
        const rightInorder = inorder.slice(rootIndex + 1);
        root = new TreeNode(root)
        const leftPreorder = preorder.slice(1, leftInorder.length + 1);
        const rightPreorder = preorder.slice(leftInorder.length + 1);
        root.left = this.buildTree(leftPreorder, leftInorder);
        root.right = this.buildTree(rightPreorder, rightInorder);
        return root;
    }
}
