class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let L = 0
        let R = nums.length - 1;
        let min = nums[L];
        
        while (L <= R) {
            // figure out if array is rotated or not 
            if (nums[L] <= nums[R]) {
                return Math.min(nums[L], min);
            }

            // is rotated array
            const M = Math.floor((L+R)/2);
            min = Math.min(min, nums[M]);
            if (nums[M] >= nums[L]) {
                L = M + 1;
            } else {
                R = M - 1;
            }
        }

        return min;
    }
}
