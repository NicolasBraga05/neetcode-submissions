class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: any[]): string[][] {
        const anagrams = new Map<string, string[]>()

        for(const str of strs){
            const key = str.split('').sort().join('')

            if(!anagrams.has(key)){
                anagrams.set(key, [])
            }
            anagrams.get(key)!.push(str)
        }

        return Array.from(anagrams.values())

    }
}