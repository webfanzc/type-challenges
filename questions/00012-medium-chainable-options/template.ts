type Chainable<R = {}> = {
  option<K extends string, V = any>(key: K extends keyof R ? never : K, value: V): Chainable<R & { [P in K]: V }>
  get(): R
}

class ChainableClass {
  result: Record<string, any>

  constructor() {
    this.result = {}
  }

  option(key: string, value: any) {
    if (this.result[key])
      throw new Error(`the key '${key}' is exist`)

    this.result[key] = value

    return this
  }

  get() {
    return this.result
  }
}
const chainable = new ChainableClass()

// console.log(chainable.option('name', 'zc').get())
// console.log(chainable.option('age', 18).get())
// console.log(chainable.option('mul', 'zc').option('name', 'yh').get())
// console.log(chainable.get())
