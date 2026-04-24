class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        // brute force solution
        let count = 0;

        for (let i = 0; i < nums.length; i++) {
            let currentSum = 0;
            for (let j = i; j < nums.length; j++) {
                currentSum += nums[j]
                if (currentSum === k) {
                    count++;
                }
            }
        }

        return count;
    }
}
