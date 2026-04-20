class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map();

        for (const num of nums) {
            if (map.get(num) === undefined) {
                // create an entry
                map.set(num, 1)
            } else {
                return num
            }
        }
    }
}
