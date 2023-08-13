let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

const NumArr = [
  "",
  "",
  "ABC",
  "DEF",
  "GHI",
  "JKL",
  "MNO",
  "PQRS",
  "TUV",
  "WXYZ",
];

let result = 0;
input.map((alphabet) =>
  NumArr.map(
    (numAlphabet, index) =>
      numAlphabet.includes(alphabet) && (result += index + 1)
  )
);
console.log(result);
