class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let L = 0
        for (let R = 1; R < nums.length; R++) {
            if (nums[R] != nums[L]) {
                L++;
                nums[L] = nums[R]
            }
        }
        console.log('L', L);
        return L+1;
    }
}
