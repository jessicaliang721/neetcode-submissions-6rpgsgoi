class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (ROWS === 0 && COLS === 0) {
            return -1;
        }

        // set up queue; no need for hashSet because you can change it directly (sink/rot it)
        const queue = [];

        let fresh = 0;

        // traverse the matrix
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                // store rotten oranges in a queue
                if (grid[i][j] === 2) {
                    queue.push([i, j])
                } else if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }

        let minutes = 0;
        // create neighbors
        const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        // need to make sure there's fresh fruit to process
        while (queue.length > 0 && fresh > 0) {
            const levelLength = queue.length;

            // process each rotten fruit in the level - spread its rot to its neighbors
            for (let z = 0; z < levelLength; z++) {
                const [r, c] = queue.shift();

                for (const [dr, dc] of neighbors) {
                    if (r + dr < 0 || c + dc < 0 || r + dr === ROWS || c + dc === COLS || grid[r + dr][c + dc] !== 1) {
                        continue
                    }
                    grid[r + dr][c + dc] = 2;
                    queue.push([r + dr, c + dc]);
                    fresh--;
                }
            }
            minutes++;
        }

        // check if there are any fresh oranges that were not able to be rotted
        return fresh === 0 ? minutes : -1;
    }
}
