let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = Number(input[0]);
for(let i = 1; i <= T; i++){
  console.log(input[i][0]+input[i].split('').reverse()[0])
}