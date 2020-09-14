// import { curry1 } from "true-myth//utils";
import { curry, mathMod } from "ramda";


const match = curry((reg: RegExp, s: string) => s.match(reg));

//provided at once
match(/r/g)("greenworld");

//provided one at time
let supllyReg = match(/hello/g);
let supplyStrings = supllyReg("hello world");
console.log(supplyStrings);
