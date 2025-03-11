const validParentheses = (str) => {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (const char of str) {
        if (char in map) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
// Example
console.log(validParentheses("()[]{}"));  // Output: true
console.log(validParentheses("(]"));  // Output: false