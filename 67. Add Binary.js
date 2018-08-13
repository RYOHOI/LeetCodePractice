// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
  if (a.length > b.length) {
    return addSmall(a, b)
  } else {
    return addSmall(b, a)
  }
};

function addSmall(a, b) {
  var carryFlag = false
  var s = '',
    j = b.length - 1
  for (var i = a.length - 1; i >= 0; i--) {
    var sum = 0
    j >= 0 ? sum = Number(a[i]) + Number(b[j]) + carryFlag : sum = Number(a[i]) + 0 + carryFlag
    carryFlag = false
    if (sum >= 2) {
      carryFlag = true
      sum = sum - 2
    }
    s = sum + s
    j--
  }
  if (carryFlag == true) return 1 + s
  return s
}

console.log(addBinary('1010', '1011'))