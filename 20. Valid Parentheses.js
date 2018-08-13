// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// The brackets must close in the correct order, 
// "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

var isValid = function(s) {
    var parenthStack = []
    var opponentHash = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    var pointer = -1
    for (var i = 0; i < s.length; i++) {
        if (opponentHash[parenthStack[pointer]] == s[i]) {
            parenthStack.pop()
            pointer--
        }
        else {
            parenthStack.push(s[i])
            pointer++
        }
    }
    if (parenthStack.length > 0) {
        return false
    }
    else return true
};

console.log(isValid("([]{)"))