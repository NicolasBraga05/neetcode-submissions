class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let longest = 0

        for(const num of set) {
            if(!set.has(num - 1)){
                let sqc = 1
                while(set.has(num + sqc)){
                sqc++
            }
            longest = Math.max(longest, sqc)
         }
        }
        return longest
    }
}
