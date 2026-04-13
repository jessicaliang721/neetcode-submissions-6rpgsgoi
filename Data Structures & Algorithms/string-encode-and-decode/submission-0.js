class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let finalStr = "";
        for (const word of strs) {
            finalStr += word.length;
            finalStr += `#${word}`;
        }
        return finalStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++;
            }
            const strLen = parseInt(str.substring(i, j));
            console.log("strLen", strLen)
            const word = str.slice(j+1, j+1+strLen);
            res.push(word)
            i = j + 1 + strLen;
        }
        return res;
    }
}
