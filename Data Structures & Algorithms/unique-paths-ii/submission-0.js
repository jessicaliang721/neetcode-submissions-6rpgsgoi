class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let prevRow = new Array(COLS).fill(0);
        let currentRow = new Array(COLS).fill(0);

        if (grid[ROWS - 1][COLS - 1] === 1 || grid[0][0] === 1) {
            return 0;
        }

        currentRow[COLS-1] = 1

        for (let i = ROWS-1; i >= 0; i--) {
            for (let j = COLS-1; j >=0; j--) {
                if (grid[i][j] === 1) {
                    currentRow[j] = 0;
                } else if (j + 1 < COLS) { // make sure it's within bounds
                    currentRow[j] = prevRow[j] + currentRow[j + 1];
                }
            }
            prevRow = currentRow;
        }
        return prevRow[0];
    }
}
