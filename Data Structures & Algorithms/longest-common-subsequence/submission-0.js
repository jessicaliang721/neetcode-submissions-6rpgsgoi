class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const memo = new Map();

        const recursion = (i, j, map) => {
            // when either index reaches the end of the respective string
            if (i === text1.length || j === text2.length) { // out of bounds
                return 0;
            }

            // instantiate the key
            const key = `${i},${j}`;
            if (map.has(key)) {
                return map.get(key)
            }

            let result;
            // characters match
            if (text1[i] === text2[j]) {
                // the one adds to the count
                result = 1 + recursion(i + 1, j + 1, map);
            }
            // characters don't match
            else {
                result = Math.max(recursion(i + 1, j, map), recursion(i, j + 1, map))
            }
            map.set(key, result);
            return result;
        }

        return recursion(0, 0, memo);
    }
}
