let fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().split(" ")[0];

for (let i = 1; i <= N; i++) {
  let blank = " ".repeat(N - i);
  let star = "*".repeat(i + (i - 1));
  console.log(blank + star);
}
for (let j = N - 1; j >= 1; j--) {
  let blank = " ".repeat(N - j);
  let star = "*".repeat(j + (j - 1));
  console.log(blank + star);
}
