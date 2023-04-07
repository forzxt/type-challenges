// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>
]

// ============= Your Code Here =============
type TrimLeft<S extends string> = S extends ` ${infer T}`
  ? TrimLeft<T>
  : S extends `\n${infer T}`
  ? TrimLeft<T>
  : S extends `\t${infer T}`
  ? TrimLeft<T>
  : S
