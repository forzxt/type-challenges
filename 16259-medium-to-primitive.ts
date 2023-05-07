// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type PersonInfo = {
    name: "Tom";
    age: 30;
    married: false;
    addr: {
        home: "123456";
        phone: "13111111111";
    };
    hobbies: ["sing", "dance"];
    readonlyArr: readonly ["test"];
    fn: () => any;
};

type ExpectedResult = {
    name: string;
    age: number;
    married: boolean;
    addr: {
        home: string;
        phone: string;
    };
    hobbies: [string, string];
    readonlyArr: readonly [string];
    fn: Function;
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

// ============= Your Code Here =============
type ToPrimitive<T extends Object> = {
    [K in keyof T]: T[K] extends string
        ? string
        : T[K] extends number
        ? number
        : T[K] extends boolean
        ? boolean
        : T[K] extends Function
        ? Function
        : T[K] extends Object
        ? ToPrimitive<T[K]>
        : never;
};
