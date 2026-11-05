
class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result: number[] = new Array(temperatures.length).fill(0);
        const stack = [];

        for (const [i, t] of temperatures.entries()) {
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop()!;
                result[stackInd] = i - stackInd;
            }

            stack.push([t, i]);
        }

        return result;
    }
}
