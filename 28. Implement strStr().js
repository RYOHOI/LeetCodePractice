// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle == '') return 0
    var index = 0
    // it doesn't need [haystack.length] loops here
    for (index; index <= haystack.length - needle.length; index++) {
        console.log("haystack[index]: " + haystack[index] + "; needle[0]" + needle[0])
        if (haystack[index] == needle[0]) {
            var j = 1
            for (j; j < needle.length; j++) {
                if (haystack[index + j] != needle[j]) {
                    break
                }
            }
            console.log('j: ' + j)
            if (j == needle.length) return index
        }
    }
    return -1
};

console.log(strStr("a", 'a'))