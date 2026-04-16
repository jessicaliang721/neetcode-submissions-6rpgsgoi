class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0; // buy
        let r = 1; // sell
        let maxP = 0;

        // make sure r is in bounds
        while (r <= prices.length) {
            if (prices[l] < prices[r]) {
                // good profit
                const profit = prices[r] - prices[l]
                maxP = Math.max(profit, maxP)
            } else {
                l = r
            }
            r++;
        }
        return maxP;
    }
}
