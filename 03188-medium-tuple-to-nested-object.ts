// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]


// ============= Your Code Here =============
type TupleToNestedObject<T extends string[], U> = T['length'] extends 0
  ? U
  : T extends [infer F extends string,...infer T extends string[]]
  ? {[K in F]:TupleToNestedObject<T,U>}
  : U
