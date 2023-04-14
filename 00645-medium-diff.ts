// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type Foo = {
    name: string;
    age: string;
};
type Bar = {
    name: string;
    age: string;
    gender: number;
};
type Coo = {
    name: string;
    gender: number;
};

type cases = [
    Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
    Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
    Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
    Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
];

// ============= Your Code Here =============

type Diff<O extends {}, O1 extends {}> = {
    [K in Exclude<keyof O1, keyof O> | Exclude<keyof O, keyof O1>]: (O & O1)[K];
};
