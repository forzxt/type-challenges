// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]

// ============= Your Code Here =============
type Merge<F extends {}, S extends {}> = {
  [T in keyof F | keyof S]: T extends keyof S
    ? S[T]
    : T extends keyof F
    ? F[T]
    : never
}
