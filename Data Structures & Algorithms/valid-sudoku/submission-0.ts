class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const columns = Array.from({ length: 9 }, () => new Set())
        const rows = Array.from({ length: 9 }, () => new Set())
        const squares = Array.from({ length: 9 }, () => new Set())
        
        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const square = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if(board[r][c] === '.'){
                    continue
                }
                if(rows[r].has(board[r][c]) || 
                columns[c].has(board[r][c]) || 
                squares[square].has(board[r][c])){
                    return false
                }         
                columns[c].add(board[r][c])
                rows[r].add(board[r][c])
                squares[square].add(board[r][c])
            }
        }
        return true
    }
}
