class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        this.minHeap = new MinPriorityQueue();
        nums.forEach((num) => this.minHeap.enqueue(num))

        while (this.minHeap.size() > k) {
            this.minHeap.dequeue();
        }

        return this.minHeap.front();
    }
}
