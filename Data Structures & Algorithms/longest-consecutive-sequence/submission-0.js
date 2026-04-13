class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const mySet = new Set(nums);
        let longestLength = 0;

        // for each num in set
        for (const num of mySet) {
            // check if it's the start of a sequence - a number is a start if num-1 is NOT in the Set
            if (!mySet.has(num-1)) { // we found a start
                let sequenceLength = 0;
                sequenceLength++;
                // count how long this sequence goes
                while (mySet.has(num+sequenceLength)) {
                    sequenceLength++;
                }
                // update longest sequence found
                if (sequenceLength > longestLength) {
                    longestLength = sequenceLength;
                }
            }
        }
        return longestLength;
    }
}
