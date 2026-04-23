class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        const totalSum = nums.reduce((acc, curr) => acc + curr, 0);
        let leftTotal = 0;

        for (let i = 0; i < nums.length; i++) {
            // find left prefix sum
            if (i === 0) {
                leftTotal = 0
            } else {
                leftTotal = leftTotal + nums[i-1]
            }

            const rightTotal = totalSum - leftTotal - nums[i]
            if (leftTotal === rightTotal) {
                return i;
            }
        }

        return -1;
    }
}
