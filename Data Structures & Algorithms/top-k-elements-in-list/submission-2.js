class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // sort nums into buckets based on frequency
        const buckets = Array.from({length: nums.length + 1}, () => []);
        const map = new Map();
        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, (map.get(num) + 1))
            } else {
                map.set(num, 1)
            }
        }
        for (const [num, frequency] of map) {
            buckets[frequency].push(num);
        }
        console.log('buckets', buckets)
        const res = [];
        for (let i = buckets.length-1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (const num of buckets[i]) {
                    res.push(num)
                }
            }
        }
        return res.slice(0, k)
        console.log('res', res)
    }
}
