/// <reference path='fourslash.ts' />

// @Filename: f.ts
////export function f(/*a*/a: number, b: string/*b*/): string {
////    return b;
////}

// @Filename: a.ts
////import { f as g } from "./f";
////g(4, "b");

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Convert to named parameters",
    actionName: "Convert to named parameters",
    actionDescription: "Convert to named parameters",
    newContent: `export function f({ a, b }: { a: number; b: string; }): string {
    return b;
}`
});

goTo.file("a.ts");
verify.currentFileContentIs(`import { f as g } from "./f";
g({ a: 4, b: "b" });`)