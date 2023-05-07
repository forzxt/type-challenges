// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<CheckRepeatedChars<"abc">, false>>,
    Expect<Equal<CheckRepeatedChars<"abb">, true>>,
    Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
    Expect<Equal<CheckRepeatedChars<"">, false>>,
];

// ============= Your Code Here =============
type CheckRepeatedChars<T extends string, U = never> = T extends `${infer F}${infer R}`
    ? T extends U
        ? true
        : CheckRepeatedChars<R, U | F>
    : false;
