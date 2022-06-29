type Separator = '_'
type CamelCase<S extends string, R extends string = ''> = S extends `${infer First}${infer Rest}`
  ? First extends Separator
    ? Rest extends `${infer F}${infer Re}`
      ? CamelCase<Re, `${R}${Capitalize<F>}`>
      :R
    :CamelCase<Rest, `${R}${Lowercase<First>}`>
  :R

// type a = CamelCase<'foo_bar'>
