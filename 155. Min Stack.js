/* Design a stack that supports push, pop, top, 
and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2. */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack1 = []
  this.stack2 = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack1.push(x)
  // empty array does not equal to another empty array
  // note >=, if not, there'll be issues
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.stack1[this.stack1.length - 1] == this.stack2[this.stack2.length - 1]) {
    this.stack1.pop()
    this.stack2.pop()
  } else this.stack1.pop()
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack1[this.stack1.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack2[this.stack2.length - 1]
};

var obj = new MinStack()
obj.push(0)
console.log(obj)
obj.push(1)
console.log(obj)
obj.push(0)
console.log(obj)
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.getMin())
// ["MinStack","push","push","push","getMin","pop","getMin"]
// [[],[0],[1],[0],[],[],[]]
/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/