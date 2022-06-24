type MyOwnExclude<T, K> = T extends K ? never : T
// type MyOmit<T, K extends keyof T> = Pick<T, MyOwnExclude<keyof T, K>>
type MyOmit<T, K extends keyof T> = {
  [P in MyOwnExclude<keyof T, K>]: T[P]
}

function myOmit(obj: Record<keyof any, any>, keys: (keyof any)[]) {
  const entries = Object.entries(obj)

  return Object.fromEntries(entries.filter(([key]) => !keys.includes(key)))
}
const todo = {
  title: 'zc',
  desc: 'desc',
  completed: false,
}

// console.log(myOmit(todo, ['title', 'desc']))
