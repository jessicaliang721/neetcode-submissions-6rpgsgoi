class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        let ROWS = grid.length;
        let COLS = grid[0].length;

        const dfs = (r, c) => {
            if (Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 0) {
                return 0;
            }

            let area = 1;

            // mark as visited
            grid[r][c] = 0;

            area += dfs(r+1, c);
            area += dfs(r-1, c);
            area += dfs(r, c+1);
            area += dfs(r, c-1);

            return area
        }

        // first traverse every cell
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    // perform DFS
                    let totalArea = dfs(i, j);
                    if (totalArea > maxArea) {
                        maxArea = totalArea;
                    }
                }
            }
        }

        return maxArea;
    }
}
