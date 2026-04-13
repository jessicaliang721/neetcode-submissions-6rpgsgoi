class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]];
        let i = 0;
        while (i < nums.length) {
            const subsets = structuredClone(result);
            console.log('subsets', subsets)
            for (const subset of subsets) {
                subset.push(nums[i])
            }
            result.push(...subsets)
            i++;
        }
        console.log('result', result);
        return result;
    }
}
