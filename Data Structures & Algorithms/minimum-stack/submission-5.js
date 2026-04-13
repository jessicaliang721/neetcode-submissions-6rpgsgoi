class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (val <= this.minStack[this.minStack.length - 1] || this.minStack.length === 0) {
            this.minStack.push(val)
        }
        console.log('this.stack', this.stack);
        console.log('this.minStack', this.minStack);
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.minStack[this.minStack.length - 1] === this.stack[this.stack.length - 1]) {
            this.minStack.pop();
        }
        
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log("getmin", this.minStack[this.minStack.length - 1]);
        return this.minStack[this.minStack.length - 1]
    }
}
