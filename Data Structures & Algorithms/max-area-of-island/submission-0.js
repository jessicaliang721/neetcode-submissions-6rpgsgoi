class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        // first traverse every cell
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === 1) {
                    // perform DFS
                    let totalArea = this.dfs(grid, i, j);
                    if (totalArea > maxArea) {
                        maxArea = totalArea;
                    }
                }
            }
        }

        return maxArea;
    }

    dfs(grid, r, c) {
        let ROWS = grid.length;
        let COLS = grid[0].length;

        if (Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 0) {
            return 0;
        }

        let area = 1;

        // mark as visited
        grid[r][c] = 0;

        area += this.dfs(grid, r+1, c);
        area += this.dfs(grid, r-1, c);
        area += this.dfs(grid, r, c+1);
        area += this.dfs(grid, r, c-1);

        return area
    }
}
