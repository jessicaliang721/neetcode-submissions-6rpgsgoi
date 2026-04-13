class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n+1);
        return this.recursion(n, cache)
    }

    recursion(n, cache) {
        if (n <= 2) {
            return n;
        }
        if (cache[n] !== undefined) {
            return cache[n]
        }

        cache[n] = this.recursion(n-1, cache) + this.recursion(n-2, cache);
        return cache[n];
    }
}
