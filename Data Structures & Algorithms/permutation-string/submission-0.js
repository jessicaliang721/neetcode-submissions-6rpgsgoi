class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) {
            return false;
        }

        const freqArray = new Array(26).fill(0);
        for (let letter of s1) {
            const index = letter.charCodeAt(0) - 97;
            freqArray[index]++
        }

        let L = 0;
        const windowSize = s1.length;

        const windowFreqArray = new Array(26).fill(0);

        // fixed window of size s1.length
        for (let R = 0; R < s2.length; R++) {
            const index = s2[R].charCodeAt(0) - 97;
            windowFreqArray[index]++;

            if (R-L+1 > windowSize) {
                const index = s2[L].charCodeAt(0) - 97;
                windowFreqArray[index]--;
                L++;
            }

            if (freqArray.every((val, i) => val === windowFreqArray[i])) return true;
        }

        return false;
    }
}
