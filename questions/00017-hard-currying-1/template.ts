type CurriedFn<Fn> = Fn extends (...arg: infer Args) => infer R ?
  Args extends [infer First, ...infer Rest] ?
      (arg: First) => CurriedFn<(...rest: Rest) => R>
    :ReturnType<Fn>
  : never

declare function Currying<Fn> (fn: Fn): CurriedFn<Fn>
