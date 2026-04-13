class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // check if length is the same
        if (s.length !== t.length) {
            return false;
        }
        
        const hashMapForS = new Map();
        const hashMapForT = new Map();

        for (const i of s) {
            if (!hashMapForS.has(i)) {
                hashMapForS.set(i, 1)
            } else {
                let value = hashMapForS.get(i);
                hashMapForS.set(i, value+=1)
            }
        }

        for (const j of t) {
            if (!hashMapForT.has(j)) {
                hashMapForT.set(j, 1)
            } else {
                let value = hashMapForT.get(j);
                hashMapForT.set(j, value+=1)
            }
        }

        for (const [key, value] of hashMapForS) {
            if (value !== hashMapForT.get(key)) {
                return false
            }
        }
        return true;
    }
}
