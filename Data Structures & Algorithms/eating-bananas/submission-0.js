class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        let n = piles.length;
        let res = -1;

        while (low <= high) {
            let mid = Math.floor((low + high)/2);
            console.log('mid', mid)
            // let totalHours = piles.reduce((acc, curr) => acc + Math.ceil(curr/mid))
            let totalHours = 0;
            for (const el of piles) {
                totalHours += Math.ceil(el/mid)
            }
            console.log('totalHours', totalHours)
            // does the sum of all the time equal to less than or equal to h?
            if (totalHours > h) {
                low = mid + 1;
            } else {
                high = mid - 1;
                res = mid;
            }
        }
        return res;
    }
}
