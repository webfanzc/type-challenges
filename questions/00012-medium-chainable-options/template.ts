type Chainable<R = {}> = {
  option<K extends string, V = any>(key: K extends keyof R ? never : K, value: V): Chainable<R & { [P in K]: V }>
  get(): R
}
