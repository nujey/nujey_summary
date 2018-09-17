class removeequal {
  constructor() {
    this.simpaleArray = [1, 2, 3, 4, 'sim2', 'sim2', 'sim1', 'sim2']
  }
  // 先来一个双重循环压压惊
  simpleEqual(arr) {
    // this.simpaleArray.sort()
    const len = arr.length
    for(let i = 0; i < len; i++) {
      for(let j = i + 1; j < len; j++) {
        if (arr[j] === arr[i]) {
          arr.splice(j, 1)
        }
      }
    }
    return arr
  }
  simpleMapEqual(arr) {
    const len = arr.length
    const map = {}
    const result = []
    for (let i = 0; i < len; i++) {
      if (!map[arr[i]]) {
        map[arr[i]] = true
        result.push(arr[i])
      }
    }
    console.log(result) 
  }
  simpleMapEqual2(arr) {
    const len = arr.length
    const map = {}
    const result = []
    for (let i = 0; i < len; i++) {
      map[arr[i]] ? '' : map[arr[i]] = true && result.push(arr[i])
    }
    console.log(result) 
  }
  middleSet(arr) {
    return [...new Set(arr)]
  }
  middleSet1(arr) {
    const s = new Set()
    arr.forEach(x => s.add(x))
    return [...s]
  }
  middleSet2(arr) {
    let set = new Set(arr)
    return Array.from(set)
  }
  // 如何对数组对象根据某一项去重呢？
  mapTest(arr, name) {
    var tempObj = {},
    result = []
    for(let i = 0; i < arr.length; i++) {
      tempObj[arr[i][name]] ? '' : tempObj[arr[i][name]] = 'true' && result.push(arr[i])
    }
    return result
  }
  mapTest2(arr) {
    var map = new Map()
    const newArr = arr.filter((item) => {
      return !map.has(item.name) && map.set(item.name, 1)
    })
    return newArr
  }
}