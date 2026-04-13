class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stripped = s.split(' ').join('').toLowerCase().replace(/[^a-z0-9]/gi, "");
        let i = 0;
        let j = stripped.length - 1;
        while (i !== j && i < j) {
            if (stripped[i] !== stripped[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
