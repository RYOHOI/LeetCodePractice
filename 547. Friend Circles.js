/* There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

Example 1:
Input: 
[[1,1,0],
 [1,1,0],
 [0,0,1]]
Output: 2
Explanation:The 0th and 1st students are direct friends, so they are in a friend circle. 
The 2nd student himself is in a friend circle. So return 2.
Example 2:
Input: 
[[1,1,0],
 [1,1,1],
 [0,1,1]]
Output: 1
Explanation:The 0th and 1st students are direct friends, the 1st and 2nd students are direct friends, 
so the 0th and 2nd students are indirect friends. All of them are in the same friend circle, so return 1.
Note:
N is in range [1,200].
M[i][i] = 1 for all students.
If M[i][j] = 1, then M[j][i] = 1. */

/**
 * @param {number[][]} M
 * @return {number}
 */

class UnionSet {
  constructor(size) {
    this.set = new Array(size).fill(-1)
  }

  find(x) {
    if (this.set[x] < 0) {
      return x
    } else {
      return this.find(this.set[x])
    }
  }

  // union by rank
  union(x, y) {
    let rootx = this.find(x)
    let rooty = this.find(y)
    if (rootx === rooty) return
    let depthx = -this.set[rootx]
    let depthy = -this.set[rooty]
    if (depthx === depthy) {
      this.set[rootx] = rooty
      this.set[rooty]--
    } else if (depthx > depthy) {
      this.set[rooty] = rootx
    } else {
      this.set[rootx] = rooty
    }
  }

  setCount() {
    return this.set.filter(it => it < 0).length
  }
}

var findCircleNum = function (M) {
  let us = new UnionSet(M.length)

  for (let i = 1; i < M.length; i++) {
    for (let j = 0; j < i; j++) {
      if (M[i][j] === 1) {
        us.union(i, j)
      }
    }
  }
  return us.setCount
};