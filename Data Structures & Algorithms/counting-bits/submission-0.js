class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = []
        for (let i = 0; i <= n; i++) {
            // count number of bits per i
            let countI = 0;
            let temp = i;
            while (temp > 0) {
                if ((temp & 1) === 1) {
                    countI++
                }
                temp = temp >> 1
            }
            res[i] = countI
        }
        return res;
    }
}
