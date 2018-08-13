/* Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var m = new Map()
  m.set('U', 0), m.set('D', 0), m.set('L', 0), m.set('R', 0)
  for (var i = 0; i < moves.length; i++) {
    m.set(moves[i], m.get(moves[i]) + 1)
  }
  return m.get('U') == m.get('D') && m.get('L') == m.get('R')
};