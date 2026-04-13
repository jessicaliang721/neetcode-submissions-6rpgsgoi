class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if (!hashMap.has(difference)) {
                // store current element in the hashmap with index
                hashMap.set(nums[i], i)
            } else {
                return [hashMap.get(difference), i]
            }
        }
    }
}
