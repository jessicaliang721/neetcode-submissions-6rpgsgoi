class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let L = 1;

        for (let R = 1; R < nums.length; R++) {
            if (nums[R] != nums[R-1]) {
                // we see a unique value - put it at L
                nums[L] = nums[R]
                L++;
            }
        }
        console.log('L', L)
        return L;
    }
}
