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
    Expect<Equal<AnyOf<[0, "", false, [], {}, null]>, false>>,
    Expect<Equal<AnyOf<[]>, false>>,
];

// ============= Your Code Here =============
type isTrue<T> = T extends 0 | "" | false | null | undefined
    ? false
    : T extends 1 | true
    ? true
    : T extends `${infer S}${infer D}`
    ? true
    : T extends any[]
    ? T["length"] extends 0
        ? false
        : true
    : [keyof T] extends [never]
    ? false
    : true extends true
    ? true
    : false;

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? isTrue<F> extends true
        ? true
        : AnyOf<R>
    : false;
