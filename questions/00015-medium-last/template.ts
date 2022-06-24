type Last<T extends any[]> = T extends [... infer Head, infer Tail] ? Tail : never

function last(arr: any[]) {
  if (!arr.length)
    return

  return arr.at(-1)
}
