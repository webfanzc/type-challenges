type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

function first(arr: any[]) {
  if (!arr.length)
    throw new Error('cannot find first element of empty array')

  return arr[0]
}

// console.log(first([3, 2, 1]))
