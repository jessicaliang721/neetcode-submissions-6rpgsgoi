class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // first create our buckets
        let counts = [0, 0, 0]
        for (let i = 0; i < nums.length; i++) {
            counts[nums[i]] += 1;
        }

        // iterate through counts array and re-populate nums
        let i = 0;
        for (let n = 0; n < counts.length; n++) {
            for (let j = 0; j < counts[n]; j++) {
                nums[i] = n;
                i++;
            }
        }
    }
}
