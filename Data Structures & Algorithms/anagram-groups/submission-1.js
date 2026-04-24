class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // group => hashmap
        // anagram : all of its anagrams
        // "act": ["act", "cat"]

        // for each word in array
        // sort the word
        // find if the word exists in map
        // if yes, add to the array
        // if no, create a key for it and add unsorted word to the array

        const map = {};

        for (const word of strs) {
            const sortedWord = word.split("").sort().join("");
            console.log('sortedWord', sortedWord, "word", word)

            if (map[sortedWord] !== undefined) {
                map[sortedWord].push(word);
            } else {
                map[sortedWord] = [word]
            }
        }

        return Object.values(map);
    }
}
