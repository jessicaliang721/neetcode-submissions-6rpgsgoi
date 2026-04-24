class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {};
        // key : value
        // current value : current index

        // create a map to keep track of the complement
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]; // 4
            if (map[complement] !== undefined) {
                return [map[complement], i]
            } else {
                map[nums[i]] = i
            }
        }

        return [];
    }
}
