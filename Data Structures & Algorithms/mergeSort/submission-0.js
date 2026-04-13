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
    mergeSort(pairs) {
        return this.mergeSortHelper(pairs, 0, pairs.length - 1);        
    }

    mergeSortHelper(pairs, start, end) {
        if (end - start + 1 <= 1) {
            return pairs;
        }

        const middle = Math.floor((start + end) / 2);
        this.mergeSortHelper(pairs, start, middle);
        this.mergeSortHelper(pairs, middle + 1, end);
        this.merge(pairs, start, middle, end);
        return pairs;
    }

    merge(pairs, start, middle, end) {
        // copy the left and right sides into new arrays
        const leftArr = pairs.slice(start, middle + 1);
        const rightArr = pairs.slice(middle + 1, end + 1);

        let i = 0; // index of left array
        let j = 0; // index of right array
        let k = start; // index of array to merge into

        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i].key <= rightArr[j].key) {
                pairs[k] = leftArr[i];
                i++;
            } else {
                pairs[k] = rightArr[j];
                j++;
            }
            k++
        }

        // put the remaining elements of a subarray into final sorted array, if the other subarray is done being sorted first
        while (i < leftArr.length) {
            pairs[k] = leftArr[i];
            i++;
            k++;
        }
        while (j < rightArr.length) {
            pairs[k] = rightArr[j];
            j++;
            k++;
        }
    }
}
