class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let profit = 0
        let left = 0
        let right = 1

        while(right < prices.length){
            if(prices[left] < prices[right]){
                let value = prices[right] - prices[left]
                profit = Math.max(profit, value)
            } else {
                left = right
            }
            right++
        }
        return profit
    }
}
