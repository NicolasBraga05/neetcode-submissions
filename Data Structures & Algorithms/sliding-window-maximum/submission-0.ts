class Solution {
    maxSlidingWindow(nums: number[], k: number): number[] {
        const result: number[] = [];
        let left = 0;
        let right = 0;
        const queue: number[] = [];

        while (right < nums.length) {
            while (
                queue.length > 0 &&
                nums[queue[queue.length - 1]] < nums[right]
            ) {
                queue.pop();
            }

            queue.push(right);

            if (left > queue[0]) {
                queue.shift();
            }

            if (right + 1 >= k) {
                result.push(nums[queue[0]]);
                left++;
            }

            right++;
        }

        return result;
    }
}
