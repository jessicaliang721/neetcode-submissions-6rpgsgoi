/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        const finalList = [];
        for (let i = 0; i < pairs.length; i++) {
            let j = i - 1;
            // when do we want to do the swap? when the value of i is smaller than j
            while (j >= 0 && pairs[j].key > pairs[j+1].key) {
                // perform swap
                const temp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = temp;
                j--;
            }
            finalList.push([...pairs]) // store snapshot of the modified array

        }
        // console.log('finalList', finalList);
        return finalList;
    }
}
