class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let totalIslands = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === "1") {
                    totalIslands++;
                    this.dfs(grid, i, j);
                }
            }
        }

        return totalIslands;
    }

    // the purpose of this function is to find all adjacent "1" islands
    dfs(grid, r, c) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (Math.min(r, c) < 0
        || r === ROWS
        || c === COLS
        || grid[r][c] === "0") {
            return 0
        }

        // mark that cell as visited
        grid[r][c] = "0";

        this.dfs(grid, r + 1, c);
        this.dfs(grid, r - 1, c);
        this.dfs(grid, r, c + 1);
        this.dfs(grid, r, c - 1);
    }
}
