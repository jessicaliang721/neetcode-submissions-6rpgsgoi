class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // create prefix array
        const prefix = [];
        for (let i = 0; i < nums.length; i++) {
            let initialPrefix = prefix[i - 1] !== undefined ? prefix[i - 1] : 1
            let total = nums[i] * initialPrefix
            prefix.push(total)
        }

        // create postfix
        let postfix = new Array(nums.length).fill(0);
        for (let i = nums.length - 1; i >= 0; i--) {
            let initialPostfix = postfix[i + 1] !== undefined ? postfix[i + 1] : 1;
            let total = nums[i] * initialPostfix;
            postfix[i] = total
        }

        console.log(prefix, postfix)

        // now multiply prefix[i-1] * postfix[i+1]
        const res = [];
        for (let i = 0; i < prefix.length; i++) {
            let pre = prefix[i - 1] !== undefined ? prefix[i - 1] : 1
            let post = postfix[i + 1] !== undefined ? postfix[i + 1] : 1;
            let total = pre*post;
            res.push(total)
        }

        return res;
    }
}
