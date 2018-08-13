var stuffList = [{
  name: '张三',
  gender: 'male',
  age: 28,
  joinTime: '2017-9-19',
  title: 'CTO',
}, {
  name: '李美',
  gender: 'female',
  age: 18,
  joinTime: '2017-12-19',
  title: "COO",
}, {
  name: '陈香',
  gender: 'female',
  age: 18,
  joinTime: '2017-12-19',
  title: "CEO",
}, {
  name: '李梅',
  gender: 'female',
  age: 18,
  joinTime: '2010-12-19',
  title: "COO",
}]

let rank = {
  'CEO': 1,
  'CTO': 2,
  'COO': 3,
  '总监': 4,
  '经理': 5,
  '工程师': 6,
}

function stuffComparator(a, b) {
  if (rank[a.title] < rank[b.title]) return -1
  else if (rank[a.title] > rank[b.title]) return 1
  else {
    let aJoinTime = a.joinTime.split('-')
    let bJoinTime = b.joinTime.split('-')
    for (let i = 0; i < 3; i++) {
      if (aJoinTime[i] < bJoinTime[i]) return -1
      else if (aJoinTime[i] < bJoinTime[i]) return 1
      else continue
    }
    return 0
  }
}

function selectionSort(arr, comparator = (a, b) => b - a) {
  for (let i = arr.length - 1; i > 0; i--) {
    let maxIdx = 0
    for (let j = 1; j <= i; j++) {
      if (comparator(arr[maxIdx], arr[j]) < 0) maxIdx = j
    }
    swap(arr, i, maxIdx)
  }
  return arr

  function swap(arr, a, b) {
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }
}

// console.log(selectionSort(stuffList, stuffComparator))


function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return
  let pivotIdx = Math.floor(Math.random() * (end - start + 1) + start)
  swap(arr, pivotIdx, end)
  for (var p1 = start - 1, p2 = start; p2 <= end; p2++) {
    if (arr[p2] < arr[pivotIdx]) {
      p1++
      swap(arr, p1, p2)
    }
  }
  swap(arr, p1 + 1, end)
  quickSort(arr, start, p1)
  quickSort(arr, p1 + 1, end)
  return arr

  function swap(arr, a, b) {
    if (arr[a] === arr[b]) return
    let tmp = arr[a]
    arr[a] = arr[b]
    arr[b] = tmp
  }
}

// console.log(quickSort([7, 3, 8, 2, 4, 5, 1, 0, 2, 6]))