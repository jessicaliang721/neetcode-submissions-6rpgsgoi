class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s[0] !== "(" && s[0] !== "{" && s[0] !== "[") {
            console.log('s[0]', s[0])
            return false
        }
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
                stack.push(s[i]);
            }
            if (s[i] === "}") {
                if(stack[stack.length-1] === "{") {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (s[i] === "]") {
                if(stack[stack.length-1] === "[") {
                    stack.pop();
                } else {
                    return false;
                }
            }
            if (s[i] === ")") {
                if(stack[stack.length-1] === "(") {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        console.log('stack', stack)
        if (s.length > 1 && stack.length === 0) {
            return true;
        }
        return false;
    }
}
