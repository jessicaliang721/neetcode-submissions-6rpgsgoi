class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length
        let L = 0;
        let R = ( rows * cols ) - 1;
        
        while (L <= R) {
            let mid = Math.floor((L + R)/2); // this is the 1D index;
            let m = Math.floor(mid / cols);
            let n = mid % cols;
            console.log('m', m, 'n', n)

            if (matrix[m][n] > target) {
                R = mid - 1;
            } else if (matrix[m][n] < target) {
                L = mid + 1;
            } else {
                return true
            }
            // after finding the target index, translate it back to the 2D indices
        }
        return false;
    }
}
