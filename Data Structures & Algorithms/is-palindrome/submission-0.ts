class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const regexS = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        for(let i = 0, j = regexS.length - 1; i < j; i++, j--){
           if(regexS[i] !== regexS[j]) {
                return false
           }
        }
        return true
    }
}
