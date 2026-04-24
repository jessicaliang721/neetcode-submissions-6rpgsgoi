class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // compare hashmaps?
        // sort both strings and see if they're equal?

        const sortedS = s.split("").sort();
        const sortedT = t.split("").sort();
        if (sortedS.length === sortedT.length && sortedS.every((val, index) => val === sortedT[index])) return true;
        return false;
    }
}
