class MinStack {
    constructor(private readonly stack = [], private readonly minStack = []) {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length > 0) {
            val = Math.min(val, this.minStack.at(-1)!);
        }

        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1)!
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1)!
    }
}
