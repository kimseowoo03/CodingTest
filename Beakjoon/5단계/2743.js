let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0]
console.log(input.length);