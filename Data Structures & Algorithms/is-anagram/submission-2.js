class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arrS = s.split('');
        const arrT = t.split('');

        const sortedS = arrS.sort().join(''); // need to join so that they're turned back into strings and not compare reference quality later
        const sortedT = arrT.sort().join('');

        if (sortedS === sortedT) {
            return true
        }
        console.log(sortedS, sortedT)

        return false
    }
}
