// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<AnyOf<[1, "test", true, [1], { name: "test" }, { 1: "test" }]>, true>>,
    Expect<Equal<AnyOf<[1, "", false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, "test", false, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, "", true, [], {}]>, true>>,
    Expect<Equal<AnyOf<[0, "", false, [1], {}]>, true>>,
    Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }]>, true>>,
    Expect<Equal<AnyOf<[0, "", false, [], { 1: "test" }]>, true>>,
    Expect<Equal<AnyOf<[0, "", false, [], { name: "test" }, { 1: "test" }]>, true>>,
    Expect<Equal<AnyOf<[0, "", false, [], {}, undefined, null]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
];

// ============= Your Code Here =============

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? F extends 1 | `${infer F}${infer R}`
        ? true
        : keyof F extends never
        ? AnyOf<R>
        : true
    : false;
// type a = [keyof []]["length"] extends 1 | 2 ? true : false;
