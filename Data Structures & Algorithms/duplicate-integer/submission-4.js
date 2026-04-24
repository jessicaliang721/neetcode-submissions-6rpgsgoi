class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // use hashmap to keep track of the count of each number
        const map = new Map();

        for (const num of nums) {
            if (!map.has(num)) {
                // add it to hashmap b/c it doesn't exist
                map.set(num, 1)
            } else {
                // it exists in hashmap so it must have a duplicate
                return true;
            }
        }

        return false;
    }
}
