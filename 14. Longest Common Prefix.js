// Write a function to find the longest common prefix string amongst an array of strings.

var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return ''
    if (strs.length == 1) return strs[0]
    // find shortest string
    var theShortest = strs[0]
    for (var i = 1; i < strs.length; i++) {
        if (theShortest.length < strs[i].length) theShortest = strs[i]
    }
    var commonPrefix = ''
    for (var i = 0; i < theShortest.length; i++) {
        console.log("outer loop " +i)
        var currentChar = theShortest[i]
        for (var j = 0; j < strs.length; j++) {
            console.log("inner loop " +j)
            if (currentChar == strs[j][i]) continue
            else return commonPrefix
        }
        commonPrefix += currentChar
    }
    return commonPrefix
};

console.log(longestCommonPrefix(["abcdeefjs", "abcd", "abcdjjusi", "abcdio"]))