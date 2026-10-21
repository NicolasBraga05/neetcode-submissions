class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const pairs: Record<string, string> = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for(const char of s) {
            if(char === '(' || char === '[' || char === '{'){
                stack.push(char)
            } else {
                if(stack.pop() !== pairs[char]){
                    return false
                }
            }
        }

        return stack.length === 0
    }
}
