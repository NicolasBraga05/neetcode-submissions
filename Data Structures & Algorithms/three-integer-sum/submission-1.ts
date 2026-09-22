class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sorted = nums.sort((a, b) => a - b)
        const result = []

        for (const [i, a] of nums.entries()) {
            if(i > 0 && a == nums[i - 1]){
                continue
            }
            let left = i + 1
            let right = sorted.length - 1
            while (left < right){
                const threeSum = a + nums[left] + nums[right]
                if(threeSum > 0){
                    right--
                } else if(threeSum < 0){
                    left++
                } else {
                    result.push([a, nums[left], nums[right]])
                    left++
                    while(nums[left] === nums[left - 1] && left < right){
                        left++
                    }
                }
            }
        }
        return result
    }
}
