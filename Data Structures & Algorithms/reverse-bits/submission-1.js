class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let res = 0;
        for (let i = 0; i <= 31; i++) {
            // extract the last bit
            let bit = n & 1;
            
            // shift left to make room for next bit
            res = res << 1

            // move bits to the left
            res = res | bit

            // shift right to get the next bit
            n = n >>> 1
            
        }
        return res >>> 0
    }
}
