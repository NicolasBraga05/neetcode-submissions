class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const set = new Set<number>()
        for(let i: number = 0; i < nums.length; i++){
            if(!set.has(nums[i])){
                set.add(nums[i])
            } else {
                return true
            }
        }
        return false
    }
}
