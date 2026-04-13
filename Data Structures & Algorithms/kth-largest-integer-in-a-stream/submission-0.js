class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        // min heap with k largest integers
        this.k = k;
        this.minHeap = new MinPriorityQueue();
        for (const num of nums) {
            this.minHeap.enqueue(num)
        }

        // remove smallest elements until we only have k elements
        while (this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
