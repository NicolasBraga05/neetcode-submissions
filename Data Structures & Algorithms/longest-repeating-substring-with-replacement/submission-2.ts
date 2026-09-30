class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const count = new Map<string, number>();
        let result = 0
        let left = 0
        let freq = 0
        for(let right = 0; right < s.length; right++) {
            count.set(s[right], (count.get(s[right]) ?? 0) + 1)
            freq = Math.max(freq, count.get(s[right]))

            while((right - left + 1) - freq > k) {
                count.set(s[left], count.get(s[left])! - 1)
                left++
            }
            result = Math.max(result, right - left + 1)
        }
        return result
    }
}
