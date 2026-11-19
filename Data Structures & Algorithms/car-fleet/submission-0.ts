class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = []
        const pair = position.map((p, i) => [p, speed[i]]);
        pair.sort()

        for (const [p, s] of [...pair].sort((a, b) => b[0] - a[0])) {
            stack.push((target - p) / s)
            if(stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }   
        }

        return stack.length

    }
}
