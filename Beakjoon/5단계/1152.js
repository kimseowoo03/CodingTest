let fs = require("fs");
let input = fs.readFileSync("예제.txt").toString().trim().split(" ");
let answer = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") answer++;
}

console.log(answer);