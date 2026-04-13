class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // we only want to look at the first index, which contains our distance
        this.minHeap = new MinPriorityQueue((point) => point[0]);
        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            this.minHeap.enqueue([dist, x, y]);
        }
        const res = [];
        let i = 0;
        while (i < k) {
            const [_, x, y] = this.minHeap.dequeue();
            res.push([x, y]);
            i++;
        }
        return res;
    }
}