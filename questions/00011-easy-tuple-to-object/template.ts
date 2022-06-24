// keyof any 就是 string | number | symbol
type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}

function tupleToObject(arr: any[]) {
  const obj: Record<keyof any, any> = {}

  arr.forEach((item) => {
    obj[item] = item
  })

  return obj
}

// console.log(tupleToObject([1, 2, 3]))
