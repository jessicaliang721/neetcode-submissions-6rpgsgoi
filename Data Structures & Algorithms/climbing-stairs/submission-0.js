class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        // we need i to change with every recursion
        const dfs = (i) => {
            if (i === n) {
                return 1;
            }
            if (i > n) {
                return 0;
            }
            return dfs(i+1) + dfs(i+2);
        }
        return dfs(0)
    }
}
