/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (node === null) {
            return null;
        }
        // map to store old nodes -> new nodes
        const hashMap = new Map();

        // this returns the cloned graph
        return this.dfs(node, hashMap);
    }

    dfs(node, hashMap) {
        // check if hashMap already has the cloned node in there
        if (hashMap.has(node)) {
            // return its clone
            return hashMap.get(node);
        }

        // otherwise, clone the node and add it to the hashMap
        const newNode = new Node(node.val);
        hashMap.set(node, newNode)

        // recursively clone all neighbors
        for (const neighbor of node.neighbors) {
            newNode.neighbors.push(this.dfs(neighbor, hashMap))
        }
        return newNode;
    }
}
