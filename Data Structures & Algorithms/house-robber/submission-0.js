class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = [];
        return this.recursion(nums, 0, cache)
    }

    recursion(nums, i, cache) {
        // base case - return 0 when i goes out of bounds
        if (i >= nums.length) {
            return 0;
        }
        if (cache[i] !== undefined) {
            return cache[i]
        }

        cache[i] = Math.max((nums[i] + this.recursion(nums, i + 2, cache)), this.recursion(nums, i + 1, cache));
        return cache[i]
    }
}