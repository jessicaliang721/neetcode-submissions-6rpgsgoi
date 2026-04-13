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
     * @return {number[][]}
     */
    levelOrder(root) {
        let queue = [];
        if (root) {
            queue.push(root)
        }

        const res = [];
        while (queue.length > 0) {
            const levelLength = queue.length;
            const currentLevel = [];
            for (let i = 0; i < levelLength; i++) {
                const curr = queue.shift();
                currentLevel.push(curr.val)
                if (curr.left) {
                    queue.push(curr.left)
                }
                if (curr.right) {
                    queue.push(curr.right)
                }
            }
            res.push(currentLevel)
        }

        console.log("res", res)
        return res;
    }
}
