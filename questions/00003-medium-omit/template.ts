type MyOwnExclude<T, K> = T extends K ? never : T
type MyOmit<T, K extends keyof T> = {
  [P in MyOwnExclude<keyof T, K>]: T[P]
}
