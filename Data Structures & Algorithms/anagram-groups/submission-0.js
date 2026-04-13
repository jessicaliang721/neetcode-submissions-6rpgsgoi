class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let word of strs) {
            const arrayKey = new Array(26).fill(0);
            for (let letter of word) {
                // add letter to arrayKey
                // get index of letter:
                const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
                arrayKey[index]++;
            }
            // set arrayKey as key to the hash map
            const stringifiedKey = arrayKey.join(',');

            // key already exists
            if (map.has(stringifiedKey)) {
                // first get the array
                const wordsArray = map.get(stringifiedKey);
                wordsArray.push(word);
                // add the word to it
                map.set(stringifiedKey, wordsArray);
            } else {
                map.set(stringifiedKey, [word])
            }
        }

        return Array.from(map.values());
    }
}
