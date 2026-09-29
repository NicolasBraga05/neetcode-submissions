class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0
        let r = 0
        let longSubString = 0
        while(r < s.length){ 
            let i = l

            while(i < r && s[r] !== s[i]){
                i++
            }

            if(i === r){
                r++
            } else{
                l = i + 1
            }

            longSubString = Math.max(longSubString, r - l)
        }
        return longSubString
    }
}
