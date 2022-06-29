type MyCapitalize<S extends string> = S extends `${infer First}${infer Other}` ? `${Uppercase<First>}${Other}` : S

// function capitalize<S extends string>(string: S): S extends `${infer First}${infer Other}` ? `${Uppercase<First>}${Other}` : S

// function capitalize<S extends string>(string: S) {
//   if (!string.length)
//     return ''
//   return `${string[0].toUpperCase()}${string.slice(1)}`
// }

// console.log(capitalize('foobar'))
