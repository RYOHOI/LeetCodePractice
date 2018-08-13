// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 6.     312211
// 7.     13112221

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var outputStr = '1'
    if(n == 1) return outputStr
    for(var i = 1; i < n; i++) {
        outputStr = strReader(outputStr)
    }
    return outputStr
};

function strReader(s) {
    var currentChar = s[0], outputStr = '', repeatCount = 0
    for(var i = 0; i <= s.length; i++) {
        if (s[i] == currentChar) {
            repeatCount++
            continue
        } else {
            outputStr = outputStr + repeatCount + currentChar
            currentChar = s[i]
            repeatCount = 0
            i--
        }
    }
    return outputStr
}

console.log(countAndSay(6))