class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // hashmap to track the count of each number in the array?
        // 1: 1
        // 2: 2
        // 3: 3

        // order it so that it's most -> least frequent
        // return the top k elements

        // use counts as indices for buckets array with nums.length + 1:
        // [0, 1, 2, 3, 0, 0, 0]

        // iterate in reverse and push elements until we've reached k items

        const map = new Map();

        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 1)
            } else {
                let count = map.get(num);
                map.set(num, count+=1)
            }
        }

        const buckets = Array.from({length: nums.length + 1}, () => []); // need to account for the fact that multiple numbers can have the same frequencies
        map.forEach((count, value) => { buckets[count].push(value) })

        const res = [];

        for (let i = buckets.length-1; i >= 0; i--) {
            if (buckets[i].length > 0) {
                for (const value of buckets[i]) {
                    if (res.length < k) {
                        res.push(value)
                    }
                }
            }
        }

        return res;
    }
}