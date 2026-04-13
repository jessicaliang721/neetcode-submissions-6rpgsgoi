/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    quickSort(pairs) {
        this.helper(pairs, 0, pairs.length-1);
        return pairs;
    }

    helper(pairs, s, e) {
        // base case - when there is only length one left in the pivot
        if (e-s+1 <= 1) {
            return pairs;
        }

        let pivot = pairs[e] // right-most element
        let inserter = s;


        for (let i = s; i < e; i++) {
            if (pairs[i].key < pivot.key) {
            
                // swap
                let temp = pairs[inserter];
                pairs[inserter] = pairs[i];
                pairs[i] = temp; 
                inserter++;
            }
        }

        // always swap pivot with inserter (temp variable may be used)
        pairs[e] = pairs[inserter];
        pairs[inserter] = pivot;

        this.helper(pairs, s, inserter - 1); // inserter is where our pivot is at
        this.helper(pairs, inserter + 1, e);
    }
}
