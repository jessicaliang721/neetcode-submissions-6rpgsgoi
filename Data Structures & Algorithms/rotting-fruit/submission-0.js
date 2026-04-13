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

        // traverse the matrix and store rotten oranges in a queue
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j])
                } else if (grid[i][j] === 1) {
                    fresh++;
                }
            }
        }

        // there are no fresh fruit to rot
        if (fresh === 0) {
            return 0;
        }

        let minutes = 0;
        while (queue.length > 0) {
            const levelLength = queue.length;

            // process each rotten fruit in the level - spread its rot to its neighbors
            for (let z = 0; z < levelLength; z++) {
                const [r, c] = queue.shift();

                // create neighbors
                const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
                for (const [dr, dc] of neighbors) {
                    if (r + dr < 0 || c + dc < 0 || r + dr === ROWS || c + dc === COLS || grid[r + dr][c + dc] !== 1) {
                        continue
                    }
                    grid[r + dr][c + dc] = 2;
                    queue.push([r + dr, c + dc]);
                    fresh--;
                }
            }
            minutes++; // this increments minutes even if there was no rotten fruit in the last level
        }

        return fresh === 0 ? minutes - 1 : -1; // remove 1 from minutes to account for last level
    }
}
