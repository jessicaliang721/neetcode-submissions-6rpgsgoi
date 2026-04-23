class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let minLength = Number.POSITIVE_INFINITY;
        let sum = 0;
        let L = 0;

        for (let R = 0; R < nums.length; R++) {
            sum += nums[R]
            console.log('sum', sum)

            while (sum >= target) {
                const length = R - L + 1;
                console.log('length', length)
                minLength = Math.min(minLength, length);
                sum -= nums[L]
                L++;
            }
        }
        console.log('minLength', minLength)

        return minLength === Number.POSITIVE_INFINITY ? 0 : minLength;
    }
}
