class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (token === "+" || token === "-" || token === "/" || token === "*") {
                const numB = Number(stack.pop());
                const numA = Number(stack.pop());
                let res;
                if (token === "+") res = numA + numB;
                if (token === "-") res = numA - numB;
                if (token === "/") res = Math.trunc(numA/numB)
                if (token === "*") res = numA * numB
                stack.push(res);
            } else {
                stack.push(token)
            }
        }
        return stack.pop();
    }
}
