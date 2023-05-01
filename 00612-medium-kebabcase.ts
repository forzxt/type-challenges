// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
    Expect<Equal<KebabCase<"FooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"fooBarBaz">, "foo-bar-baz">>,
    Expect<Equal<KebabCase<"foo-bar">, "foo-bar">>,
    Expect<Equal<KebabCase<"foo_bar">, "foo_bar">>,
    Expect<Equal<KebabCase<"Foo-Bar">, "foo--bar">>,
    Expect<Equal<KebabCase<"ABC">, "a-b-c">>,
    Expect<Equal<KebabCase<"-">, "-">>,
    Expect<Equal<KebabCase<"">, "">>,
    Expect<Equal<KebabCase<"😎">, "😎">>,
];

// ============= Your Code Here =============
type KebabCase<S extends string, isFirst extends boolean = true> = S extends string
    ? S extends `${infer F}${infer R}`
        ? F extends Lowercase<F>
            ? `${F}${KebabCase<R, false>}`
            : isFirst extends true
            ? `${Lowercase<F>}${KebabCase<R, false>}`
            : `-${Lowercase<F>}${KebabCase<R, false>}`
        : S
    : S;
