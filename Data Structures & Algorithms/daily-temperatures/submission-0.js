class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const indexStack = [];
        const output = new Array(temperatures.length).fill(0);
        // first add index of current temp to the stack
        for (let i = 0; i < temperatures.length; i++) {
            const currentTemp = temperatures[i];
            // get the temp at the top of the stack
            // we found the next greater temp
            while (indexStack.length > 0 && currentTemp > temperatures[indexStack[indexStack.length-1]]) {
                // compute difference of index
                const diff = i - (indexStack[indexStack.length - 1])
                // set the index at output to diff
                output[indexStack[indexStack.length-1]] = diff;
                // pop from the stack
                indexStack.pop()
            }
            indexStack.push(i);
        }
        return output;
    }
}
