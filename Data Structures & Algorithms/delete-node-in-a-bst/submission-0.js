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
    minValueNode(root) {
        let curr = root;
        while (curr && curr.left) {
            curr = curr.left
        }
        return curr;
    } 
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        // base case is when we hit a leaf node (it cannot be deleted)
        if (root === null) {
            return null
        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {
            if (root.left === null) {
                return root.right
            } else if (root.right === null) {
                return root.left
            } else {
                let minNode = this.minValueNode(root.right);
                // replace the root with the val at minNode
                root.val = minNode.val
                // delete the copy of minNode that still exists, which is on the right side of root
                root.right = this.deleteNode(root.right, minNode.val)
            }
        }
        return root;
    }
}
