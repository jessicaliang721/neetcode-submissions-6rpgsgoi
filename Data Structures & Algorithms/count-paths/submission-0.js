class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        // start by creating prevRow
        let prevRow = new Array(n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            let currentRow = new Array(n).fill(0);
            // set the last number of the row to 1
            currentRow[n-1] = 1;
            for (let j = n - 2; j >= 0; j--) {
                // create the sum
                currentRow[j] = prevRow[j] + currentRow[j+1]
            }
            prevRow = currentRow
        }
        return prevRow[0]
    }
}