class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        // case where we don't start with a (0, 0)
        if (grid[0][0] === 1) {
            return -1;
        }

        const ROWS = grid.length;
        const COLS = grid[0].length;

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

                // create neighbors
                const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

                // iterate through neighbors
                for (let j = 0; j < neighbors.length; j++) {
                    let dr = neighbors[j][0];
                    let dc = neighbors[j][1];
                    if (r + dr < 0 || c + dc < 0 || r + dr === ROWS || c + dc === COLS || visit.has(`${r + dr},${c + dc}`) || grid[r + dr][c + dc] === 1) {
                        continue;
                    }
                    queue.push([r + dr, c + dc]);
                    visit.add(`${r + dr},${c + dc}`);
                }
            }
            length += 1;
        }

        // if while loop finishes, that means no path exists
        return -1;
    }
}
