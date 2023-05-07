// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<GetMiddleElement<[]>, []>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
    Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
    Expect<Equal<GetMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>>,
    Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
    Expect<Equal<GetMiddleElement<[never]>, [never]>>,
];
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>;

// ============= Your Code Here =============
type GetMiddleElement<T extends any[]> = T["length"] extends 1 | 2
    ? T
    : T extends [infer A, ...infer B, infer C]
    ? GetMiddleElement<B>
    : T;
