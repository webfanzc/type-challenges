type Pop<T extends any[]> = T extends [...infer Head, infer PopItem] ? Head : []

// js实现
function pop(arr: any[]) {
  if (!pop.length)
    return arr

  return arr.slice(0, arr.length - 1)
}

// console.log(pop([3, 2, 1]))
