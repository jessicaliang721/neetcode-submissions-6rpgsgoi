class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        this.maxHeap = new MaxPriorityQueue();
        stones.forEach((stone) => this.maxHeap.enqueue(stone));

        while (this.maxHeap.size() > 1) {
            // remove the 2 heaviest stones
            const x = this.maxHeap.dequeue();
            const y = this.maxHeap.dequeue();

            if (x !== y) {
                const difference = x - y;
                this.maxHeap.enqueue(difference)
            }
        }

        return this.maxHeap.front() || 0;
    }
}
