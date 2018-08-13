/* A binary watch has 4 LEDs on the top which represent the hours (0-11), 
and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, 
return all possible times the watch could represent.

Example:
Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]

Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, 
it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, 
for example "10:2" is not valid, it should be "10:02". */

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  // if (num >= 9 || num < 0) return []
  var result = []
  var hourCombo = {
    0: [0],
    1: [8, 4, 2, 1],
    2: [10, 9, 6, 5, 3],
    3: [11, 7],
  }
  var minuteCombo = {
    0: [0],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
  }
  var re = new RegExp(/1/, 'g')
  for (var i = 0; i <= 59; i++) {
    var lights = (i).toString(2).match(re)
    if (lights != null) {
      var key = lights.length
      minuteCombo[key].push(i)
    }
  }
  for (var i = 0; i <= num; i++) {
    if (hourCombo[i] != undefined && minuteCombo[num - i] != undefined)
      mix(hourCombo[i], minuteCombo[num - i])
  }

  function mix(hourCombo, minuteCombo) {
    for (var hour of hourCombo) {
      for (var minute of minuteCombo) {
        if (minute < 10) minute = '0' + minute
        result.push(hour + ':' + minute)
      }
    }
  }
  return result
};

readBinaryWatch(1)