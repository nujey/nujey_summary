class ArrayFun {
  constructor() {
    // console.log(this)
  }
  // 删除数组末尾的元素 返回值为被删除的元素
  arrPop(arr) {
    return arr.pop()
  }
  // 末尾添加元素
  arrPush(arr, item) {
    // console.log(arr.push(item))
    return arr.push(item)
  }
  arrFrom(item) {
    return Array.from(item)
  }
  arrOf(n) {
    // return Array.of(n)
    console.log(arguments)
    return Array.prototype.slice.call(arguments)
  }
  arrConcat(arr1, arr2) {
    return arr1.concat(arr2)
  }
}
