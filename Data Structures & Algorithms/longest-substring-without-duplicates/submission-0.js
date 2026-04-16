class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // two pointers
        let L = 0;
        const set = new Set();
        let maxLen = 0;

        for (let R = 0; R < s.length; R++) {
            // while window is invalid, shrink window
            // invalid condition is that the letter at R is already in the set
            while (set.has(s[R])) {
                set.delete(s[L]);
                L++;
            }

            // else update set with valid char
            set.add(s[R])

            // update len with each iteration
            const currLen = R - L + 1;
            maxLen = Math.max(currLen, maxLen);
        }

        return maxLen;
    }
}
