class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        // case where we don't start with a (0, 0)
        if (grid[0][0] === 1 || grid[ROWS-1][ROWS-1] === 1) {
            return -1;
        }

        // create a queue
        const queue =[[0, 0]];

        // create a set
        const visit = new Set(['0,0']);

        let length = 1;

        while (queue.length > 0) {
            const queueLength = queue.length;
            for (let i = 0; i < queueLength; i++) {
                const [r, c] = queue.shift();

                // base case where we reached the bottom right
                if (r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }

                // base case
                if (Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] === 1) {
                    continue;
                }

                // create neighbors
                const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

                for (const [dr, dc] of neighbors) {
                    if (!visit.has(`${r + dr},${c + dc}`)) {
                        queue.push([r + dr, c + dc]);
                        visit.add(`${r + dr},${c + dc}`);
                    }
                }
            }
            length += 1;
        }

        // if while loop finishes, that means no path exists
        return -1;
    }
}
