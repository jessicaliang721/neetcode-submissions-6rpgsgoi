class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack  = []
        const parenMapper = {
            "}": "{",
            "]": "[",
            ")": "("
        }
        for (let i = 0; i < s.length; i++) {
            console.log('i', i)
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                stack.push(s[i]);
                console.log('open stack', stack)
            } else {
                if (stack[stack.length - 1] === parenMapper[s[i]]) {
                    stack.pop();
                    console.log('popped stack', stack)
                } else {
                    console.log('return false')
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
