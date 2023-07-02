let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ")[0];
const alphabetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let result = [];
alphabetArray.map((alphabet) => result.push(input.indexOf(alphabet)));
console.log(result.join(" "))