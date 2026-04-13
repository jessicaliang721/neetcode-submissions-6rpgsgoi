class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // first define left and right pointers
        let L = 0, R = nums.length - 1;

        while (L <= R) {
            // calculate mid
            let mid = Math.floor((L + R)/2);

            if (nums[mid] < target) {
                L = mid + 1;
            } else if (nums[mid] > target) {
                R = mid - 1;
            } else {
                return mid;
            }
        }

        return -1;
    }
}
