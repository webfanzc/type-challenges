type MyReturnType<T extends Function> = T extends (...arg: any[]) => infer R ? R :never
