/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const list = [];
    if(!nums1.length || !nums2.length || !k) return list;
    const heap = new Heap().comparator((a,b)=>a[0] + a[1] - b[0] - b[1]);
    for(let i = 0, t = 0; i < nums1.length && t < k; i++, t++){
        heap.push([nums1[i], nums2[0], 0]);
    }
    for(let t = 0; t < k && heap.store.length; t++){
        const pair = heap.pop();
        list.push(pair.slice(0,2));
        if(pair[2] + 1< nums2.length){
            heap.push([pair[0], nums2[pair[2] + 1], pair[2] + 1]);
        }
    }
    return list;
};

function Heap(){
  this.store = [];
  this._comparator = (a,b)=>a-b;
}
//insert an item to the heap
Heap.prototype.push = function(d){
  this.store.push(d);
  let i = this.store.length - 1;
  while(i > 0 &&
    this._comparator(
      this.store[i],
      this.store[this.getParent(i)]) < 0){
    swap(this.store, this.getParent(i), i);
    i = this.getParent(i);
  }
};
//return the top most item in the heap
Heap.prototype.top = function(){
  return this.store[0];
};
//extract the top most item in the heap and return it
Heap.prototype.pop = function(){
  if(this.store.length <= 1) return this.store.pop();
  const d = this.store[0];
  this.store[0] = this.store.pop();
  this.heapify(0);
  return d;
};
//bubble the heap
Heap.prototype.heapify = function(i){
  const size = this.store.length;
  let bubble = i; //bubble from either left or right
  while(true){
    const left = this.getLeft(i);
    const right = this.getRight(i);
    if(left < size &&
      this._comparator(this.store[left], this.store[i]) < 0){
      bubble = left;
    }
    if(right < size &&
      this._comparator(this.store[right], this.store[bubble]) < 0){
      bubble = right;
    }
    if(bubble !== i){
      swap(this.store, i, bubble);
      i = bubble;
    } else break;
  }
};
//Utilities
Heap.prototype.getParent = function(i){
  return Math.floor((i-1)/2);
};
Heap.prototype.getLeft = function(i){
  return 2 * i + 1;
};
Heap.prototype.getRight = function(i){
  return 2 * i + 2;
};
Heap.prototype.comparator = function(_){
  return arguments.length ? (this._comparator = _, this) : this._comparator;
};
function swap(list, i, j){
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
  return list;
}