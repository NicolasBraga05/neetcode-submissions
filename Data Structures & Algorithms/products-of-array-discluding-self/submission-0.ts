class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result = new Array(nums.length).fill(1)

        let product = 1

        for(let i = 0; i < nums.length; i++){
            result[i] = product
            product *= nums[i]
        }

        product = 1

        for(let i = nums.length - 1; i >= 0; i--){
            result[i] *= product
            product *= nums[i]
        }

        return result
}
}