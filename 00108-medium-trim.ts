// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>
]

// ============= Your Code Here =============
type Trim<S extends string> = S extends ` ${infer T}`
  ? Trim<T>
  : S extends `\n${infer T}`
  ? Trim<T>
  : S extends `\t${infer T}`
  ? Trim<T>
  : S extends `${infer T} `
  ? Trim<T>
  : S extends `${infer T}\n`
  ? Trim<T>
  : S extends `${infer T}\t`
  ? Trim<T>
  : S
