class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false

        const count1 = new Map<string, number>()
        const count2 = new Map<string, number>()
        
        for (const char of s1) {
            count1.set(char, (count1.get(char) ?? 0) + 1)
        }

        let left = 0

        for (let right = 0; right < s2.length; right++) {
            const char = s2[right]

            count2.set(char, (count2.get(char) ?? 0) + 1)

            if (right - left + 1 > s1.length) {
                const leftChar = s2[left]

                count2.set(
                    leftChar,
                    count2.get(leftChar)! - 1
                )

                if (count2.get(leftChar) === 0) {
                    count2.delete(leftChar)
                }

                left++
            }

            if (right - left + 1 === s1.length) {
                if (this.mapsEqual(count1, count2)) {
                    return true
                }
            }
        }

        return false
    }

    mapsEqual(
        map1: Map<string, number>,
        map2: Map<string, number>
    ): boolean {
        if (map1.size !== map2.size) return false

        for (const [char, count] of map1) {
            if (map2.get(char) !== count) {
                return false
            }
        }

        return true
    }
}