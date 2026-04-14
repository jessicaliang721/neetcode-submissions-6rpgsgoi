class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const res = [];
        // go through each one and fix i
        for (let i = 0; i <= sorted.length - 3; i++) {
            // skip duplicate i values
            if (i > 0 && sorted[i] === sorted[i-1]) continue
            let j = i + 1;
            let k = sorted.length - 1;
            while (j < k) {
                const sum = sorted[i] + sorted[j] + sorted[k]
                if (sum === 0) {
                    res.push([sorted[i], sorted[j], sorted[k]])
                    // keep moving in to find additional answers
                    j++;
                    k--;

                    // skip duplicate values
                    while (j < k && sorted[j] === sorted[j-1]) j++;
                    while (j < k && sorted[k] === sorted[k-1]) k++;
                } else if (sum < 0) {
                    // move left pointer up
                    j++
                } else {
                    // sum is too big; move right pointer down
                    k--
                }
            }
        }
        console.log('res', res)
        // const unique = Array.from(
        //     new Set(res.map(JSON.stringify)),
        //     JSON.parse
        // );
        // console.log('unique', unique)
        return res;
    }
}
