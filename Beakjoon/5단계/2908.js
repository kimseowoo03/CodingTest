let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [A, B] = input;
let a = +A.split("").reverse().join("");
let b = +B.split("").reverse().join("");
console.log(a > b ? a : b);
