let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let result = "";
let longNum = Number(input) / 4;

for (let n = 1; n <= longNum; n++) {
  result += "long ";
}

console.log(result + "int");
