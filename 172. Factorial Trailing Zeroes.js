 /* Given an integer n, return the number of trailing zeroes in n!.

    Note: Your solution should be in logarithmic time complexity. */

 /**
  * @param {number} n
  * @return {number}
  */
 var trailingZeroes = function(n) {
   var count = 0
   for (var i = 1; n / Math.pow(5, i) >= 1; i++) {
     count += Math.floor(n / Math.pow(5, i))
   }
   return count
 }

 console.log(trailingZeroes(4))
   // 452137076

 function trailingZeroes2(n) {
   var count2 = 0,
     count5 = 0
   for (var i = 1; i <= n; i++) {
     // console.log('enter loop')
     factorCounter(i)
   }

   function factorCounter(num) {
     // console.log(num + ' enter factorCounter')
     if (num % 2 == 0) {
       count2++
       factorCounter(num / 2)
     } else if (num % 5 == 0) {
       count5++
       factorCounter(num / 5)
     } else return null
   }
   return Math.min(count2, count5)
     // console.log('count2 ' + count2 + ' count5 ' + count5)
 };