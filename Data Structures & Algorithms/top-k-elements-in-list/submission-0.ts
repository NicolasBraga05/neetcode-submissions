class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>()
        const result = []
        for(let i = 0; i < nums.length; i++) {
            const count = map.get(nums[i]) || 0
            map.set(nums[i], count + 1)
        }
        const sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));
        
        for(const key of sortedMap.keys()){
            result.push(key)

            if(result.length === k){
                return result
            }
        }

        return result
    }
}
