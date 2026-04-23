class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // set to keep track of all numbers in my window size of k
        const window = new Set();
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            if (R - L > k) {
                window.delete(nums[L])
                L++;
            }

            if (window.has(nums[R])) return true;

            window.add(nums[R]);
        }
        return false;
    }
}
