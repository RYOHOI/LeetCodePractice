/* Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like 
(ie, buy one and sell one share of the stock multiple times). 
However, you may not engage in multiple transactions at the same time 
(ie, you must sell the stock before you buy again). */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  // preprocess
  var loops = prices.length, i = 1
  if (loops < 2) return 0
  for (i; i < loops; i++) {
    if (prices[i] <= prices[i - 1]) continue
    else break
  }
  prices.splice(0, i - 1)
  loops = prices.length
  if (loops < 2) return 0

  // real transaction
  var buyAt, climbingUp = false, max = 0
  for (var i = 1; i < loops; i++) {
    if (prices[i] > prices[i - 1] && !climbingUp) {
      buyAt = prices[i - 1]
      climbingUp = true
    }
    if (prices[i] <= prices[i - 1] && climbingUp) {
      max += (prices[i - 1] - buyAt)
      buyAt = null
      climbingUp = false
    }
  }
  console.log('before the last step, max: ' + max)
  console.log('buyAt: ' + buyAt, 'prices[last]: ' + prices[loops - 1])
  if (buyAt != null) max += (prices[loops - 1] - buyAt)
  return max
};

console.log(maxProfit([2,1,2,0,1]))