class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = {};

        for (const num of nums) {
            if (hashMap[num] === undefined) {
                hashMap[num] = 1
            } else {
                return true
            }
        }

        return false;
    }
}
