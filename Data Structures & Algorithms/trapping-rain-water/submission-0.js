class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;
        let maxLeft = height[left];
        let maxRight = height[right];
        let totalWater = 0;

        while (left < right) {
            if (maxLeft < maxRight || maxLeft == maxRight) {
                left++;
                const area = Math.min(maxLeft, maxRight) - height[left];
                totalWater += area < 0 ? 0 : area;
                maxLeft = Math.max(height[left], maxLeft)
            } else {
                right--;
                const area = Math.min(maxLeft, maxRight) - height[right];
                totalWater += area < 0 ? 0 : area;
                maxRight = Math.max(height[right], maxRight);
            }           
        }

        return totalWater;
    }
}
