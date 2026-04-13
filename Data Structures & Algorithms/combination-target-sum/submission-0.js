class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const sum = 0;
        const res = [];
        const chosen = [];
        this.dfs(nums, 0, res, chosen, sum, target)
        return res;
    }

    dfs(nums, i, res, chosen, sum, target) {
        if (sum === target) {
            res.push([...chosen]);
            return;
        }
        if (sum > target || i === nums.length) {
            return;
        }
        chosen.push(nums[i]);
        this.dfs(nums, i, res, chosen, sum + nums[i], target)
        chosen.pop();
        this.dfs(nums, i + 1, res, chosen, sum, target) 
        
    }
}
