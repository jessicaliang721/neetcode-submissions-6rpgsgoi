class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        for (let i = 0; i < prices.length; i++) {
            console.log('i', i)
            const sellPrice = prices[i];
            if (prices[l] <= prices[i]) { // this is a low buy price; calculate profit
                const profit = prices[i] - prices[l];
                maxProfit = Math.max(profit, maxProfit)
            } else {
                l = i;
            }
                
        }

        return maxProfit;
    }
}
