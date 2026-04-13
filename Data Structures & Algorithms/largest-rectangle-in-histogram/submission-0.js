class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        // we need to track both index and height
        const stack = [];
        let maxArea = 0;

        // iterate through heights
        for (let i = 0; i < heights.length; i++) {
            const currHeight = heights[i];
            let startIndex = i;

            // top of stack's height is greater than current height
            while (stack.length && currHeight < stack.at(-1)[1]) {
                // pop the top of the stack
                const [poppedIndex, poppedHeight] = stack.pop();
                const currentArea = (i - poppedIndex) * poppedHeight;
                // calculate max area
                maxArea = Math.max(maxArea, currentArea);
                startIndex = poppedIndex;
            }

            if (stack.length === 0 || currHeight > stack.at(-1)[1]) {
                // current height is taller than the one at the top of the stack
                // add it to the stack
                stack.push([startIndex, currHeight])
            }
        }

        const totalLength = heights.length;
        // now iterate through the remaining values in the stack
        for (const stackItem of stack) {
            const [index, height] = stackItem;
            const currentArea = (totalLength - index) * height;
            maxArea = Math.max(maxArea, currentArea)
        }

        return maxArea;
    }
}
