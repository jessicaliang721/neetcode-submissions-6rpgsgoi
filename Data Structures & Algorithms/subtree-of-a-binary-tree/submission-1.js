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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (!subRoot) return true; // null subroot
        if (!root) return false; // immediately return false if root is null because subtree will never be in it
        if (this.sameTree(root, subRoot)) return true; // are both trees equal
        
        // is the current node the start of the subroot?
        // if no, traverse left child and ask if the current node is the start of the subroot
        // else traverse right child and ask if the current node is the start of the subroot
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    sameTree(root1, root2) { // this is assuming that we found the same root node
        if (root1 == null && root2 == null) {
            return true;
        }
        if (root1 == null || root2 == null) {
            return false;
        }
        if (root1.val !== root2.val) {
            return false;
        }

        const leftMatches = this.sameTree(root1.left, root2.left);
        const rightMatches = this.sameTree(root1.right, root2.right);

        return leftMatches && rightMatches;
    }
}
