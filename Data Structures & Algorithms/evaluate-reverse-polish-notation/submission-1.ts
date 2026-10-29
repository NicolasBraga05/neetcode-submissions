class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
       const stack: number[] = [] 

       for(let i = 0; i < tokens.length; i++){
        if(tokens[i] === '+'){
            stack.push(stack.pop() + stack.pop())
        } else if(tokens[i] === '-'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b - a)
        } else if(tokens[i] === '*'){
            stack.push(stack.pop() * stack.pop())
        } else if(tokens[i] === '/'){
            let a = stack.pop()
            let b = stack.pop()
            stack.push(Math.trunc(Number(b / a)))
        } else {
            stack.push(Number(tokens[i]))
        }
       }

       return stack[0]
    }
}
