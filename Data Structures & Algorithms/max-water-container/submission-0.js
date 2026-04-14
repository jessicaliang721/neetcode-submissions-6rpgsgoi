class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = (r-l) * Math.min(heights[r], heights[l]);

        while (l < r) {
            if (heights[l] < heights[r] || heights[l] === heights[r]) {
                l++;
                const area = (r-l) * Math.min(heights[r], heights[l]);
                maxArea = Math.max(maxArea, area)
            } else {
                r--;
                const area = (r-l) * Math.min(heights[r], heights[l]);
                maxArea = Math.max(maxArea, area)
            }
        }
        console.log('maxArea', maxArea)
        return maxArea;
    }
}
