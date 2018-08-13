// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: 123
// Output: 321

// Example 2:
// Input: -123
// Output: -321

// Example 3:
// Input: 120
// Output: 21

// 32bit ▶ -2147483648 ~ 2147483648

var reverse = function(x) {
    // strip zero tail
    if (x === 0 || x > 2147483648 || x < -2147483648) return 0
    while (x % 10 === 0) x = x / 10
    var result = 0
    while (x !== 0) {
        var modVal = x % 10
        x = (x - modVal) / 10
        result = result * 10 + modVal
    }
    if (result > 2147483648 || result < -2147483648) return 0
    return result
};

console.log(reverse(901000))