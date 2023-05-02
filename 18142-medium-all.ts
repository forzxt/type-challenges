// ============= Test Cases =============
import type { Equal, Expect, IsAny } from "./test-utils";

type cases = [
    Expect<Equal<All<[1, 1, 1], 1>, true>>,
    Expect<Equal<All<[1, 1, 2], 1>, false>>,
    Expect<Equal<All<["1", "1", "1"], "1">, true>>,
    Expect<Equal<All<["1", "1", "1"], 1>, false>>,
    Expect<Equal<All<[number, number, number], number>, true>>,
    Expect<Equal<All<[number, number, string], number>, false>>,
    Expect<Equal<All<[null, null, null], null>, true>>,
    Expect<Equal<All<[[1], [1], [1]], [1]>, true>>,
    Expect<Equal<All<[{}, {}, {}], {}>, true>>,
    Expect<Equal<All<[never], never>, true>>,
    Expect<Equal<All<[any], any>, true>>,
    Expect<Equal<All<[unknown], unknown>, true>>,
    Expect<Equal<All<[any], unknown>, false>>,
    Expect<Equal<All<[unknown], any>, false>>,
];

// ============= Your Code Here =============
type All<T extends unknown[], U extends unknown> = T extends [infer F, ...infer R]
    ? [F] extends [U]
        ? [IsAny<F> & IsAny<U>] extends [never]
            ? false
            : All<R, U>
        : false
    : true;
