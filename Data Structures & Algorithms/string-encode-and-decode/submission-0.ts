class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let response = ""
        for(const s of strs){
            response += String(s.length) + '#' + s
        }
        return response
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const response = []
        let i = 0

        while(i < str.length){
            let j = i
            while(str[j] != '#'){
                j += 1
            }
            let length = Number(str.slice(i, j))
            response.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }
        return response
    }
}
