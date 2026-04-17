class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // log frequency of each letter
        const freqMap = {};
        let L = 0;
        let maxLength = 0;
        let maxFreq = 0;

        for (let R = 0; R < s.length; R++) {
            // add s[R] to frequency tracker
            if (freqMap[s[R]] === undefined) {
                freqMap[s[R]] = 1;
            } else {
                freqMap[s[R]]+=1;
            }

            // use window length
            // invalid condition
            while ((R - L + 1) - Math.max(...Object.values(freqMap)) > k) {
                // decrement s[L]'s count in frequency tracker
                freqMap[s[L]]-=1;
                // we need to shrink the window
                L++;
            }

            // update maxLen
            maxLength = Math.max(maxLength, R-L+1)
        }

        return maxLength;
    }
}
