class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const ROWS = board.length;
        const COLS = board[0].length;

        // check rows
        for (let r = 0; r < ROWS; r++) {
            const rowSet = new Set();
            for (let c = 0; c < COLS; c++) {
                if (!rowSet.has(board[r][c])) {
                    rowSet.add(board[r][c])
                } else if (rowSet.has(board[r][c]) && board[r][c] !== ".") {
                    return false;
                }
            }
        }

        // check cols
        for (let c = 0; c < COLS; c++) {
            const colSet = new Set();
            for (let r = 0; r < ROWS; r++) {
                if (!colSet.has(board[r][c])) {
                    colSet.add(board[r][c])
                } else if (colSet.has(board[r][c]) && board[r][c] !== ".") {
                    return false;
                }
            }
        }

        const boxSet = Array.from({length: 9}, () => new Set());
        // check if in same 3x3 square
        // convert 2D indices into flat indices to check if it's the same square
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                const boxIndex = Math.floor(r/3)*3 + Math.floor(c/3);
                if (!boxSet[boxIndex].has(board[r][c])) {
                    boxSet[boxIndex].add(board[r][c])
                } else if (boxSet[boxIndex].has(board[r][c]) && board[r][c] !== ".") {
                    return false;
                }
            }
        }
        return true;
    }
}
