// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

// ============= Your Code Here =============
type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

type Without<
  T extends any[],
  U extends any[] | any,
  Result extends any[] = []
> = U extends number[]
  ? T extends [infer F, ...infer R]
      ? Includes<U, F> extends true
        ? Without<R, U, Result>
        : Without<R, U, [...Result, F]>
    :Result
  : Without<T, [U], Result>