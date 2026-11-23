
class Solution {
    searchMatrix(matrix: number[][], target: number): boolean {
        const rows = matrix.length;

        if (rows === 0 || matrix[0].length === 0) {
            return false;
        }

        const cols = matrix[0].length;

        let top = 0;
        let bot = rows - 1;
        let row = -1;
        
        while (top <= bot) {
            const mid = Math.floor((top + bot) / 2);

            if (target > matrix[mid][cols - 1]) {
                top = mid + 1;
            } else if (target < matrix[mid][0]) {
                bot = mid - 1;
            } else {
                row = mid;
                break;
            }
        }

        if (row === -1) {
            return false;
        }

        let left = 0;
        let right = cols - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (target > matrix[row][mid]) {
                left = mid + 1;
            } else if (target < matrix[row][mid]) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
