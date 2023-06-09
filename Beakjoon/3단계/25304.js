let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const totalAmount = Number(input[0]);
let result = 0;

for (let i = 2; i < 2 + Number(input[1]); i++) {
  let num = input[i].split(" ");
  result += Number(num[0]) * Number(num[1]);
}

console.log(result === totalAmount ? "Yes" : "No");
