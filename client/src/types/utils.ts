export type Diff<T, U> = T extends U ? never : T;

export function isNotNull<C>(c: C): c is Diff<C, null> {
  return c !== null;
}
