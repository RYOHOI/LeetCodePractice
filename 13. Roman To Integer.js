// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1,000

// The numerals for 4 (IIII) and 9 (VIIII) proved problematic, 
// and are generally replaced with IV (one less than 5) and IX (one less than 10). This feature of Roman numerals is called subtractive notation.

// For example the number 39 is XXXIX, (three tens and a ten less one), 
// 246 is CCXLVI (two hundreds, a fifty less ten, a five and a one. 
// There is, however no need for "place keeping" zeros, so "missing places" are simply omitted: 
// thus 207, for instance, is written CCVII (two hundreds, a five and two ones) and 1066 becomes MLXVI (a thousand, a fifty and a ten, a five and a one)

var romanHash = {
    I: [1, 1],
    V: [5, 2],
    X: [10, 3],
    L: [50, 4],
    C: [100, 5],
    D: [500, 6],
    M: [1000, 7]
}

var romanToInt = function(s) {
    var index = 0, init = 0
    if (s.length < 2) return romanHash[s][0]
    while (index < s.length) {
        var key = s[index], neighborKey = s[index + 1]
        console.log("key: " + key + "; neighbor key: "+neighborKey)
        if (neighborKey !== undefined && romanHash[key][1] < romanHash[neighborKey][1]) {
            console.log("reverse pair detected!")
            init += (romanHash[neighborKey][0] - romanHash[key][0])
            index += 2
            // skip to the next loop
            continue
        }
        init += romanHash[key][0]
        index++
    }
    return init
};

console.log(romanToInt("MCMXCVI"))