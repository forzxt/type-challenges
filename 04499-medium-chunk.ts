// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<Chunk<[], 1>, []>>,
    Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
    Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
    Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
];

// ============= Your Code Here =============
type Chunk<
    T extends any[],
    U extends number,
    V extends any[] = [],
    W extends any[] = [],
> = V["length"] extends U
    ? Chunk<T, U, [], [...W, V]>
    : T extends [infer F, ...infer R]
    ? Chunk<R, U, [...V, F], W>
    : V["length"] extends 0
    ? W
    : [...W, V];

