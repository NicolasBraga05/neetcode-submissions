class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        if(height.length === 0) return 0
        let amount = 0
        let left = 0
        let right = height.length - 1
        let maxLeft = height[left]
        let maxRight = height[right]

        while(left < right) {
            if(maxLeft < maxRight){
                left++
                maxLeft = Math.max(maxLeft, height[left])
                amount += maxLeft - height[left]
            } else {
                right--
                maxRight = Math.max(maxRight, height[right])
                amount += maxRight - height[right]
            }
        }

        return amount
    }
}
