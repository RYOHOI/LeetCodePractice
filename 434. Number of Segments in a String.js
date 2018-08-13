/* Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5 */

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  // s.split(/\s+/).length
  var re = new RegExp(/[^\s\\]+/, 'g')
  if (s.match(re) != null)
    return s.match(re).length
  else return 0
};

console.log(countSegments(""))