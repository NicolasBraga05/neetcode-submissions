class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const newS = s.split('').sort().join('')
        const newT = t.split('').sort().join('')

        if(newS !== newT) return false
        return true
        
    }
}
