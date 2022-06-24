type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

function myPick(obj: Record<keyof any, any>, keys: (keyof any)[]) {
  // 这里只考虑key是obj的key的情况
  const picked: Record<keyof any, any> = {}

  keys.forEach((key) => {
    picked[key] = obj[key]
  })

  return picked
}
// console.log(myPick({ name: 'zc', age: 18 }, ['age', 'name']))
