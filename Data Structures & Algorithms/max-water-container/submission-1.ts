class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0
        let left = 0
        let right = heights.length - 1

        while(left < right) {
            let diff = right - left 
            let sum 
            if(heights[left] < heights[right]){
                sum = heights[left] * diff
                result = Math.max(result, sum)
                left++
            } else if(heights[left] > heights[right]){
                sum = heights[right] * diff
                result = Math.max(result, sum)
                right--
            } else {
                sum = heights[left] * diff
                result = Math.max(result, sum)
                left++
            }
        }

        return result
    }
}
