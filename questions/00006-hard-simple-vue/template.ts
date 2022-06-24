// declare function SimpleVue<C, D, M>(options: {
//   data: () => D
//   computed: C & ThisType<D>
//   methods: M & ThisType<{
//     [key in keyof C]: C[key] extends (...arg: any[]) => infer R
//       ? R
//       : never
//   }& D & C >
// }): any
type ComputedValues<C> = {
  [key in keyof C]: C[key] extends (...args: unknown[]) => infer R ? R : never
}

declare function SimpleVue<D, C, M>(options: {
  data: (this: {}) => D
  computed: C & ThisType<D>
  methods: M & ThisType<D & M & ComputedValues<C>>
}): any
