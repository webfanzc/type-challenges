// keyof any 就是 string | number | symbol
type TupleToObject<T extends readonly (keyof any)[]> = {
  [P in T[number]]: P
}
