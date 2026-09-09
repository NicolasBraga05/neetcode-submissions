class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const alreadyVisited = new Map<number, number>()
        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]
            if(alreadyVisited.has(diff)){
                return [alreadyVisited.get(diff)!, i]
            }
            alreadyVisited.set(nums[i], i)
        }
    }
}
