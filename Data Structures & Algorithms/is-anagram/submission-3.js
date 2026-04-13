class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const sMap = {};
        const tMap = {};

        for (let i = 0; i < s.length; i++) {
            if (!sMap[s[i]]) {
                sMap[s[i]] = 1;
            } else {
                sMap[s[i]]++;
            }

            if (!tMap[t[i]]) {
                tMap[t[i]] = 1;
            } else {
                tMap[t[i]]++;
            }
        }

        for (const key in sMap) {
            if (sMap[key] !== tMap[key]) {
                return false
            }
        }

        return true;
    }
}
