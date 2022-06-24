type MyOwnExclude<T, K> = T extends K ? never : T
// type MyOmit<T, K extends keyof T> = Pick<T, MyOwnExclude<keyof T, K>>
type MyOmit<T, K extends keyof T> = {
  [P in MyOwnExclude<keyof T, K>]: T[P]
}
