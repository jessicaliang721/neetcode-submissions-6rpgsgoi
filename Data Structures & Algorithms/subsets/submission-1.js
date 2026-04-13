class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];
        for (const num of nums) {
            const subsets = result.map(subset => [...subset, num])
            result.push(...subsets) // spread to avoid nested array
        }
        return result;
    }
}
