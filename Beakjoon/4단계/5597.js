let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let result = [];
for (let n = 1; n <= 30; n++) {
  input.includes(String(n)) || result.push(`${n}`);
}
result.map((n) => console.log(`${n}`));
