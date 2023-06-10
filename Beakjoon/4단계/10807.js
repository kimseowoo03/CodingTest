let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = input[0];
let numbers = input[1].split(" ");
let v = input[2];

console.log(numbers.filter((n) => n === v).length);