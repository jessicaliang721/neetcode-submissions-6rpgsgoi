class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const maxHeap = new MaxPriorityQueue();
        const queue = [];
        let time = 0;

        // first get a frequency count of each letter
        let count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)] += 1
        }
        
        // add these counts to the maxheap - must enqueue one by one
        for (const frequency of count) {
            if (frequency > 0) {
                maxHeap.enqueue(frequency);
            }
        }

        while (!maxHeap.isEmpty() || queue.length > 0) {
            // check if first task at queue is available
            if (queue.length && time === queue[0][1]) {
                const availableEle = queue.shift();
                maxHeap.enqueue(availableEle[0])
            }
            const topEle = maxHeap.dequeue();

            time++;

            // decrease the number of elements and put it in queue
            const oneLess = topEle - 1;

            if (oneLess > 0) {
                // calculate minimum reprocessing time
                const nextTime = time + n;

                // push both to the queue as a pair
                queue.push([oneLess, nextTime])
            }
        }

        return time;
    }
}
