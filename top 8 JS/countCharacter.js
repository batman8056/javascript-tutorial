// Count character occurrence:
// *********************************

const countCharacterOccurrence = (str) => {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1; // charCount[char] if value not present we take it as a undefine
    }

    return charCount;
};

// Example
console.log(countCharacterOccurrence("hello"));  // Output: { h: 1, e: 1, l: 2, o: 1 }