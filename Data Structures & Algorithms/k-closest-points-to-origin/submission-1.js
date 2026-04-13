class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue((point) => point[0]);
        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            maxHeap.enqueue([dist, x, y]);

            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        // extract k closest points from the heap
        const res = [];
        while (maxHeap.size() > 0) {
            const [_, x, y] = maxHeap.dequeue();
            res.push([x, y])
        }

        return res;
    }
}
