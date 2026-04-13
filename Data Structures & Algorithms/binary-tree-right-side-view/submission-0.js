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
     * @return {number[]}
     */
    rightSideView(root) {
        let queue = [];
        let res = [];

        if (root) {
            queue.push(root)
        }

        while (queue.length > 0) {
            let queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                let curr = queue.shift();
                if (i === queueLength-1) {
                    res.push(curr.val)
                }
                if (curr.left) {
                    queue.push(curr.left)
                } 
                if (curr.right) {
                    queue.push(curr.right)
                }
            }
        }
        console.log('res', res);
        return res;
    }
}
