// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<0>, -1>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]


// ============= Your Code Here =============
type MinusOne<T extends number> = CountTo<`${T}`> extends [...infer A, infer B] ? A['length'] : -1



type CountTo<
  T extends string,
  Count extends 1[] = []
> = T extends `${infer First}${infer Rest}`
  ? CountTo<Rest, N<Count>[keyof N & First]>
  : Count

type N<T extends 1[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1]
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1]
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1]
  '4': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, 1, 1, 1, 1]
  '5': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1
  ]
  '6': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1
  ]
  '7': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]
  '8': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]
  '9': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1
  ]
}