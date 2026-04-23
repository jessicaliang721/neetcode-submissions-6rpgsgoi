class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let total = 0;
        for (const n of nums) {
            total += n;
            this.prefix.push(total)
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        const prefixRight = this.prefix[right];

        // need the sum to the LEFT of the left index
        const prefixLeft = left > 0 ? this.prefix[left-1] : 0;
        // prefix of right - prefix of left will give you the answer
        return prefixRight - prefixLeft;
    }
}
