let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const T = input[0];

for (let i = 1; i <= T; i++) {
  let [R, S] = input[i].split(" ");
  let result = "";
  S.split("").map((alphabet) => {
    for (let n = 1; n <= R; n++) {
      result += alphabet;
    }
  });
  console.log(result);
}