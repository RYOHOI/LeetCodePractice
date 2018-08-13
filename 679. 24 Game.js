/* You have 4 cards each containing a number from 1 to 9. You need to judge whether they could operated through *, /, +, -, (, ) to get the value of 24.

Example 1:

Input: [4, 1, 8, 7]
Output: True
Explanation: (8-4) * (7-1) = 24

Example 2:

Input: [1, 2, 1, 2]
Output: False

Note:

    The division operator / represents real division, not integer division. For example, 4 / (1 - 2/3) = 12.
    Every operation done is between two numbers. In particular, we cannot use - as a unary operator. For example, with [1, 1, 1, 1] as input, the expression -1 - 1 - 1 - 1 is not allowed.
    You cannot concatenate numbers together. For example, if the input is [1, 2, 1, 2], we cannot write this as 12 + 12.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const operator = '+-*/'.split('')
let count = 0

var judgePoint24 = function(nums, trace = [], res = []) {
  if (nums.length == 0) {
    let s = trace.join('')
    count++
    // console.log(s)
    if (Math.abs(eval(s) - 24) < 0.1) res.push(s)
    else return
  }
  if (trace.length == 0) {
    for (let i = 0; i < nums.length; i++) {
      trace.push(nums[i])
      let numsCopy = nums.slice()
      numsCopy.splice(i, 1)
      judgePoint24(numsCopy, trace, res)
      trace.pop()
    }
  } else {
    trace.unshift('(')
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < operator.length; j++) {
        let numsCopy = nums.slice()
        numsCopy.splice(i, 1)
        trace.push(operator[j]), trace.push(nums[i]), trace.push(')')
        judgePoint24(numsCopy, trace, res)
        trace.pop(), trace.pop(), trace.pop()
      }
    }
    trace.shift()
  }
  return res
    // return res.length > 0
};

const add = (a, b) => a + b,
  sub = (a, b) => a - b,
  div = (a, b) => a / b,
  mul = (a, b) => a * b

var judgePoint24 = function(nums) {
  let res = []
  explore(nums, [])
  return res.length > 0

  function explore(nums, trace) {
    if (nums.length == 1) {
      if (Math.abs(nums[0] - 24) < 0.1) res.push(trace.slice())
      else return
    }
    for (let i = 0; i < nums.length; i++) {
      let nums1 = nums.slice()
      nums1.splice(i, 1)
      trace.push(nums[i])
      for (let j = 0; j < nums1.length; j++) {
        let nums2 = nums1.slice()
        nums2.splice(j, 1)
        trace.push(nums1[j])
        for (let k = 0; k < operator.length; k++) {
          trace.push(operator[k])
          let currVal = eval('(' + nums[i] + ')' + operator[k] + '(' + nums1[j] + ')')
          let nums3 = nums2.slice()
          nums3.push(currVal)
          explore(nums3, trace)
          trace.pop()
        }
        trace.pop()
      }
      trace.pop()
    }
  }
}


var judgePoint24 = function(nums) {
  if (nums.length == 1) {
    if (Math.abs(nums[0] - 24) < 0.1) return true
    else return false
  }
  for (let i = 0; i < nums.length; i++) {
    let nums1 = nums.slice()
    nums1.splice(i, 1)
    for (let j = 0; j < nums1.length; j++) {
      let nums2 = nums1.slice()
      nums2.splice(j, 1)
      for (let k = 0; k < operator.length; k++) {
        let currVal
        switch (operator[k]) {
          case '+':
            currVal = add(nums[i], nums1[j])
            break;
          case '-':
            currVal = sub(nums[i], nums1[j])
            break;
          case '*':
            currVal = mul(nums[i], nums1[j])
            break;
          case '/':
            currVal = div(nums[i], nums1[j])
            break;
        }
        let nums3 = nums2.slice()
        nums3.push(currVal)
        if (judgePoint24(nums3)) return true
      }
    }
  }
  return false
}

// console.log(judgePoint24([8, 6, 7, 9]))
console.log(judgePoint24([6, 6, 9, 5]))
console.log(count)

/* let times = 20

function randomRange(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(Math.round(Math.random() * 10))
  }
  return res
}
while (times-- > 0) {
  let testCase = randomRange(4)
  console.log(judgePoint24(testCase), testCase)
} */